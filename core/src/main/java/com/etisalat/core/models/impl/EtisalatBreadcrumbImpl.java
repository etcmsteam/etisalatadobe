package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import com.etisalat.core.constants.AEConstants;
import com.etisalat.core.util.CommonUtility;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.etisalat.core.models.EtisalatBreadcrumb;
import com.etisalat.core.models.EtisalatBreadcrumbVO;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {
    EtisalatBreadcrumb.class}, resourceType = {EtisalatBreadcrumbImpl.RESOURCE_TYPE})
public class EtisalatBreadcrumbImpl implements EtisalatBreadcrumb {

  private static final Logger LOG = LoggerFactory.getLogger(EtisalatBreadcrumbImpl.class);
  public static final String RESOURCE_TYPE = "etisalat/components/etisalatbreadcrumb";

  @SlingObject
  @Optional
  private Resource res;

  @Self
  @Optional
  private SlingHttpServletRequest request;

  @SlingObject
  ResourceResolver resourceResolver;


  @Override
  public List<EtisalatBreadcrumbVO> getEtisalatBreadcrumbItems() {
    final Resource etisalatBreadcrumb = res.getChild(AEConstants.BREADCRUMB_ITEMS);
    List<EtisalatBreadcrumbVO> etisalatBreadcrumbItem = new ArrayList<>();
    if (etisalatBreadcrumb != null && etisalatBreadcrumb.hasChildren()) {
      final Iterator<Resource> list = etisalatBreadcrumb.listChildren();
      while (list.hasNext()) {
        final Resource childResource = list.next();
        final EtisalatBreadcrumbVO breadCrumVO = new EtisalatBreadcrumbVO();
        breadCrumVO.setBreadcrumbTitle(
            childResource.getValueMap().get(AEConstants.ETISALAT_BREADCRUMB_TITLE, StringUtils.EMPTY));
        breadCrumVO.setLinkBehavior(childResource.getValueMap().get(AEConstants.LINK_BEHAVIOR, StringUtils.EMPTY));
        breadCrumVO.setBreadcrumbLink(CommonUtility.appendHtmlExtensionToPage(resourceResolver,
            childResource.getValueMap().get(AEConstants.ETISALAT_BREADCRUMB_LINK, StringUtils.EMPTY)));
        etisalatBreadcrumbItem.add(breadCrumVO);
      }

    } else {
      LOG.error("Breadcurmb List is empty {}", res.getPath());
    }
    return Collections.unmodifiableList(etisalatBreadcrumbItem);
  }

  @Override
  public int getEtisalatBreadcrumbSize() {
    final int defaultSize = 0;
    if (getEtisalatBreadcrumbItems() != null) {
      return getEtisalatBreadcrumbItems().size();
    }
    return defaultSize;
  }

}
