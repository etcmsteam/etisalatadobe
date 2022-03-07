package com.etisalat.core.models.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;

import junitx.util.PrivateAccessor;

class ProductDetailsImplTest {

  @InjectMocks
  private ProductDetailsImpl productDetailsImpl;

  @Mock
  private TagManager tagManager;

  @Mock
  private Tag tag;

  @Mock
  private ResourceResolver resourceResolver;

  @Mock
  private Resource resource;
  
  @Mock
  private SlingHttpServletRequest slingHttpServletRequest;
  
  private static final String FILTER_TAG_PATH = "etisalat:product-card/filters";
  private static final String ALL_CATEGORIES = "all-categories";
  private static final String PRODUCT_FILTER_TAG = "productFilterTag";
  private static final String ALL_CATEGORIES_TAG = "etisalat:product-card/filters/all-categories";

  @BeforeEach
  void setUp() throws NoSuchFieldException {
    MockitoAnnotations.initMocks(this);
    PrivateAccessor.setField(productDetailsImpl, PRODUCT_FILTER_TAG, FILTER_TAG_PATH);
    PrivateAccessor.setField(productDetailsImpl, "currentRes", resource);

    Mockito.when(this.resource.getResourceResolver()).thenReturn(this.resourceResolver);
    Mockito.when(this.slingHttpServletRequest.getResourceResolver()).thenReturn(this.resourceResolver);
    Mockito.when(this.resourceResolver.adaptTo(TagManager.class)).thenReturn(this.tagManager);
  }

  @Test
  void testProductFilterTagPath() throws NoSuchFieldException {
    Tag filterTag = mock(Tag.class);
    Tag nocontract = mock(Tag.class);
    Tag allcategory = mock(Tag.class);

    List<Tag> listTags = new ArrayList<>();

    listTags.add(nocontract);
    listTags.add(allcategory);

    Iterator<Tag> tagIterator = listTags.iterator();
    when(nocontract.getTitle()).thenReturn("No Contract");
    when(allcategory.getTitle()).thenReturn("All Categories");

    when(tagManager.resolve(FILTER_TAG_PATH)).thenReturn(filterTag);
    when(filterTag.listChildren()).thenReturn(tagIterator);
    List<String> filterList = productDetailsImpl.getProductFilterTagDetails();
    assertEquals(2, filterList.size());
  }
  
  @Test
  void getFilterTagEmpty() {
    Tag filterTag = mock(Tag.class);

    when(tagManager.resolve(FILTER_TAG_PATH)).thenReturn(filterTag);
    when(filterTag.listChildren()).thenReturn(Collections.emptyIterator());

    List<String> filterList = productDetailsImpl.getProductFilterTagDetails();

    assertTrue(filterList.isEmpty());
  }

  @Test
  void getFilterTagName() throws NoSuchFieldException {
    Tag categoryTag = mock(Tag.class);
    PrivateAccessor.setField(productDetailsImpl, PRODUCT_FILTER_TAG, ALL_CATEGORIES_TAG);
    
    when(tagManager.resolve(ALL_CATEGORIES_TAG)).thenReturn(categoryTag);
    when(categoryTag.getName()).thenReturn(ALL_CATEGORIES);
    String actualTagName = productDetailsImpl.getProductFilterTagName();

    assertEquals(ALL_CATEGORIES, actualTagName);
  }
  
}
