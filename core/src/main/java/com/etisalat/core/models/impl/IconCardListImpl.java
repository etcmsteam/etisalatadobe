package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import com.etisalat.core.util.CommonUtility;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import com.etisalat.core.models.HeroLinkSectionVO;
import com.etisalat.core.models.IconCardList;
import com.etisalat.core.models.IconCardVO;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
		IconCardList.class }, resourceType = { IconCardListImpl.RESOURCE_TYPE })
public class IconCardListImpl implements IconCardList {
	
	public static final String RESOURCE_TYPE = "etisalat/components/iconcardlist";
	public static final String NAV_ITEMS = "iconCardList";
	public static final String CARD_TITLE = "cardTitle";
	public static final String CARD_ICON = "cardIcon";
	public static final String CARD_LINK = "cardLink";
	public static final String LINK_BEHAVIOR = "linkBehavior";

	@SlingObject
	@Optional
	private Resource res;
	
	@Self
	@Optional
	private SlingHttpServletRequest request;
	
	@SlingObject
    ResourceResolver resourceResolver;

	private List <IconCardVO> iconCardListItem;

	@Override
	public List<IconCardVO> getIconCardListItems() {
		Resource iconCardList = res.getChild(NAV_ITEMS);
		iconCardListItem = new ArrayList<>();
		if(iconCardList !=null && iconCardList.hasChildren()) {
			Iterator<Resource> list = iconCardList.listChildren();
			while (list.hasNext()) {
				Resource r = list.next();
				IconCardVO cardList = new IconCardVO();
				cardList.setCardIcon(r.getValueMap().get(CARD_ICON,String.class));
				cardList.setCardTitle(r.getValueMap().get(CARD_TITLE,String.class));
				cardList.setLinkBehavior(r.getValueMap().get(LINK_BEHAVIOR,String.class));
				cardList.setCardLink(CommonUtility.appendHtmlExtensionToPage(resourceResolver,r.getValueMap().get(CARD_LINK,String.class)));				
			    iconCardListItem.add(cardList);
			}
			
		}
		return Collections.unmodifiableList(iconCardListItem);
	}
	
	@Override
	public int getIconCardSize() {
		int defaultSize = 0;
		if(getIconCardListItems() !=null) {
		return getIconCardListItems().size();
		}
	 return defaultSize;
	}

}
