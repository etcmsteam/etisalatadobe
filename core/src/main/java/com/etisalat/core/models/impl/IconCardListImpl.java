package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import com.etisalat.core.models.IconCardList;
import com.etisalat.core.models.IconCardListItem;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
		IconCardList.class }, resourceType = { IconCardListImpl.RESOURCE_TYPE })
public class IconCardListImpl implements IconCardList {
	
	protected static final String RESOURCE_TYPE = "etisalat/components/iconcardlist";

	@Inject
	@Optional
	@ChildResource
	private Resource iconCardList;

	private List <IconCardListItem> iconCardListItem;

	@Override
	public List<IconCardListItem> getIconCardListItems() {
		iconCardListItem = new ArrayList<>();
		if(iconCardList !=null && iconCardList.hasChildren()) {
			Iterator<Resource> list = iconCardList.listChildren();
			while (list.hasNext()) {
				Resource r = list.next();
				IconCardListItem cardList = r.adaptTo(IconCardListItem.class);
				iconCardListItem.add(cardList);
			}
			
		}
		return iconCardListItem;
	}

}
