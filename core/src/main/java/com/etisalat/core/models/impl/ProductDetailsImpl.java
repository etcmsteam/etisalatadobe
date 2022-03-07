package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.etisalat.core.models.ProductDetails;
import com.etisalat.core.util.CommonUtility;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {
    ProductDetails.class}, resourceType = {ProductDetailsImpl.RESOURCE_TYPE})
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
  
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String productFilterTag;
  
  @Self
  protected SlingHttpServletRequest request;


  @Override
  public List<String> getProductFilterTagDetails() {
    final TagManager tagManager = currentRes.getResourceResolver().adaptTo(TagManager.class);
    final List<String> filterTagList = new ArrayList<>();
    LOG.info("Product Detials Filter tag path:: {}",productFilterTag);
    if (StringUtils.isNotBlank(productFilterTag)) {
      final Tag tag = tagManager.resolve(productFilterTag);
      if (null != tag) {
        tag.listChildren().forEachRemaining(childtag -> {
          filterTagList.add(childtag.getTitle());
        });
      }
    }
    LOG.info("Product Detials filter list size:: {}",filterTagList.size());
    return Collections.unmodifiableList(filterTagList);
  }


  @Override
  public String getProductFilterTagName() {
    return CommonUtility.getCategoryTagName(request, productFilterTag);
  }
  
  
}
