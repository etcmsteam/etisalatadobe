package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import com.etisalat.core.models.IconCardList;
import com.etisalat.core.models.IconCardListItem;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
		IconCardList.class }, resourceType = { IconCardListImpl.RESOURCE_TYPE })
public class IconCardListImpl implements IconCardList {
	
	public static final String RESOURCE_TYPE = "etisalat/components/iconcardlist";
	public static final String NAV_ITEMS = "iconCardList";

	@SlingObject
	@Optional
	private Resource res;
	
	@Self
	@Optional
	private SlingHttpServletRequest request;

	private List <IconCardListItem> iconCardListItem;

	@Override
	public List<IconCardListItem> getIconCardListItems() {
		Resource iconCardList = res.getChild(NAV_ITEMS);
		iconCardListItem = new ArrayList<>();
		if(iconCardList !=null && iconCardList.hasChildren()) {
			Iterator<Resource> list = iconCardList.listChildren();
			while (list.hasNext()) {
				Resource r = list.next();
				IconCardListItem cardList = r.adaptTo(IconCardListItem.class);
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
