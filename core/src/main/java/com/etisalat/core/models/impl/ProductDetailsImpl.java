package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;

import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.etisalat.core.models.CategoryTagVO;
import com.etisalat.core.models.ProductDetails;
import com.etisalat.core.util.CommonUtility;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {
    ProductDetails.class}, resourceType = {ProductDetailsImpl.RESOURCE_TYPE}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ProductDetailsImpl implements ProductDetails {
	
  private static final Logger LOG = LoggerFactory.getLogger(ProductDetailsImpl.class);

  /**
   * The resource type.
   */
  protected static final String RESOURCE_TYPE = "etisalat/components/productdetail";

  /**
   * The current currentRes.
   */
  @SlingObject
  protected Resource currentRes;
  
  @ScriptVariable
  private Page currentPage;
  
  @Inject
  private String productPath;
  
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String productFilterTag;
  
  @Self
  protected SlingHttpServletRequest request;
  
  @SlingObject
  ResourceResolver resourceResolver;


  @Override
  public List<CategoryTagVO> getProductFilterTagDetails() {
    final TagManager tagManager = currentRes.getResourceResolver().adaptTo(TagManager.class);
    final List<CategoryTagVO> filterTagList = new ArrayList<>();
    LOG.info("Product Detials Filter tag path:: {}", productFilterTag);
    if (StringUtils.isNotBlank(productFilterTag)) {
      final Tag tag = tagManager.resolve(productFilterTag);
      if (null != tag) {
        tag.listChildren().forEachRemaining(childtag -> {
          CategoryTagVO categoryTag = new CategoryTagVO();
          categoryTag.setTagName(childtag.getName());
          categoryTag.setTagTitle(childtag.getTitle(currentPage.getLanguage()));
          filterTagList.add(categoryTag);
        });
      }
    }
    LOG.info("Product Detials filter list size:: {}", filterTagList.size());
    return Collections.unmodifiableList(filterTagList);
  }


  @Override
  public String getProductFilterTagName() {
    return CommonUtility.getCategoryTagName(request, productFilterTag);
  }
  
  @Override
  public String getTagNameFromProductPath() {
    if (StringUtils.isNotBlank(productPath)) {
      String productCategoryTag = resourceResolver.getResource(productPath).getValueMap().get("productFilterTag",
          StringUtils.EMPTY);
      return CommonUtility.getCategoryTagName(request, productCategoryTag);
    }
    return StringUtils.EMPTY;
  }
  
  
}
