package com.etisalat.core.models.impl;

import java.util.List;

import com.etisalat.core.constants.PageConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.etisalat.core.constants.AEConstants;
import com.etisalat.core.models.FixedNavigtaionMultifieldModel;
import com.etisalat.core.models.PageNavigation;
import com.etisalat.core.util.CommonUtility;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {
    PageNavigation.class}, resourceType = {PageNavigationImpl.RESOURCE_TYPE})
public class PageNavigationImpl implements PageNavigation {
	
  private static final Logger LOG = LoggerFactory.getLogger(PageNavigationImpl.class);

  /**
   * The resource type.
   */
  protected static final String RESOURCE_TYPE = "etisalat/components/pagenavigation";

  /**
   * The current currentRes.
   */
  @SlingObject
  protected Resource currentRes;

  @Self
  protected SlingHttpServletRequest request;

  @SlingObject
  private ResourceResolver resourceResolver;

  @Override
  public List<FixedNavigtaionMultifieldModel> getPageNavItems() {
    final List<FixedNavigtaionMultifieldModel> pageItemList = CommonUtility
        .getFixedNavigationItems(AEConstants.PAGE_CHILD_ITEMS, currentRes, resourceResolver, request);
    if (LOG.isDebugEnabled()) {
      LOG.debug("Page Navigation List {}", pageItemList);
    }
    return pageItemList;
  }
}
