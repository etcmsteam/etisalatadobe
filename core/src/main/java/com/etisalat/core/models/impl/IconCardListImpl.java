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

import com.etisalat.core.models.IconCardList;
import com.etisalat.core.models.IconCardVO;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {
    IconCardList.class}, resourceType = {IconCardListImpl.RESOURCE_TYPE})
public class IconCardListImpl implements IconCardList {

  public static final String RESOURCE_TYPE = "etisalat/components/iconcardlist";

  @SlingObject
  @Optional
  private Resource res;

  @Self
  @Optional
  private SlingHttpServletRequest request;

  @SlingObject
  ResourceResolver resourceResolver;


  @Override
  public List<IconCardVO> getIconCardListItems() {
    final Resource iconCardList = res.getChild(AEConstants.NAV_ITEMS);
		List<IconCardVO> iconCardListItem = new ArrayList<>();
    if (iconCardList != null && iconCardList.hasChildren()) {
      Iterator<Resource> list = iconCardList.listChildren();
      while (list.hasNext()) {
        Resource childResource = list.next();
        IconCardVO cardList = new IconCardVO();
        cardList.setCardIcon(childResource.getValueMap().get(AEConstants.CARD_ICON, String.class));
        cardList.setCardTitle(childResource.getValueMap().get(AEConstants.CARD_TITLE, String.class));
        cardList.setLinkBehavior(childResource.getValueMap().get(AEConstants.LINK_BEHAVIOR, String.class));
        cardList.setCardLink(CommonUtility.appendHtmlExtensionToPage(resourceResolver,
						childResource.getValueMap().get(AEConstants.CARD_LINK, String.class)));
        iconCardListItem.add(cardList);
      }

    }
    return Collections.unmodifiableList(iconCardListItem);
  }

  @Override
  public int getIconCardSize() {
    final int defaultSize = 0;
    if (getIconCardListItems() != null) {
      return getIconCardListItems().size();
    }
    return defaultSize;
  }

}
