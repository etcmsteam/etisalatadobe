package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import com.etisalat.core.constants.AEConstants;
import com.etisalat.core.util.CommonUtility;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import com.etisalat.core.models.EtisalatBreadcrumb;
import com.etisalat.core.models.EtisalatBreadcrumbVO;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {
    EtisalatBreadcrumb.class}, resourceType = {EtisalatBreadcrumbImpl.RESOURCE_TYPE})
public class EtisalatBreadcrumbImpl implements EtisalatBreadcrumb {

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
    final Resource EtisalatBreadcrumb = res.getChild(AEConstants.BREADCRUMB_ITEMS);
		List<EtisalatBreadcrumbVO> EtisalatBreadcrumbItem = new ArrayList<>();
    if (EtisalatBreadcrumb != null && EtisalatBreadcrumb.hasChildren()) {
      Iterator<Resource> list = EtisalatBreadcrumb.listChildren();
      while (list.hasNext()) {
        Resource childResource = list.next();
        EtisalatBreadcrumbVO etisalatBreadcrumb = new EtisalatBreadcrumbVO();
        etisalatBreadcrumb.setBreadcrumbTitle(childResource.getValueMap().get(AEConstants.ETISALAT_BREADCRUMB_TITLE, String.class));
        etisalatBreadcrumb.setLinkBehavior(childResource.getValueMap().get(AEConstants.LINK_BEHAVIOR, String.class));
        etisalatBreadcrumb.setBreadcrumbLink(CommonUtility.appendHtmlExtensionToPage(resourceResolver,
						childResource.getValueMap().get(AEConstants.ETISALAT_BREADCRUMB_LINK, String.class)));
        EtisalatBreadcrumbItem.add(etisalatBreadcrumb);
      }

    }
    return Collections.unmodifiableList(EtisalatBreadcrumbItem);
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
