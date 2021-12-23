package com.etisalat.core.models;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;

import com.etisalat.core.constants.AEConstants;
import com.etisalat.core.constants.PageConstants;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = {Resource.class,
    SlingHttpServletRequest.class})
public class FixedNavigationModel {

  private static final Logger LOG = LoggerFactory.getLogger(FixedNavigationModel.class);

  @SlingObject
  private SlingHttpServletRequest request;

  @SlingObject
  @Optional
  protected Resource currentResource;

  private List<FixedNavigtaionMultifieldModel> fixedNav;

  @PostConstruct
  protected void init() {
    fixedNav = new ArrayList<>();
    LOG.info("current resource is {}", currentResource.getPath());
    if (currentResource.hasChildren()) {
      final Resource multiFieldChild = currentResource.getChild(AEConstants.MULTIFIELD_NODE);
      if (null != multiFieldChild) {
        final Iterator<Resource> multiItr = multiFieldChild.listChildren();
        while (multiItr.hasNext()) {
          Resource res = multiItr.next();
          FixedNavigtaionMultifieldModel modelObj = res
              .adaptTo(FixedNavigtaionMultifieldModel.class);
          setExtensionToLink(modelObj);
          fixedNav.add(modelObj);
        }
      }
    }
  }

  public List<FixedNavigtaionMultifieldModel> getFixedNav() {
    return Collections.unmodifiableList(fixedNav);
  }

  private void setExtensionToLink(FixedNavigtaionMultifieldModel modelObj) {
    String cardLink = modelObj.getNavigationLink();
    if (StringUtils.isNotBlank(cardLink) && cardLink.startsWith("/content/") && !StringUtils
        .contains(cardLink, PageConstants.HTML_EXTENSION)) {
      modelObj.setNavigationLink(cardLink + PageConstants.HTML_EXTENSION);
    }

  }
}
