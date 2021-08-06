package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import com.etisalat.core.models.TabImage;
import com.etisalat.core.models.TabImageItem;

@Model(adaptables = {Resource.class,SlingHttpServletRequest.class}, 
  adapters = {TabImage.class}, resourceType = {TabImageImpl.RESOURCE_TYPE})
public class TabImageImpl implements TabImage {

	/**
	 * The resource type.
	 */
	protected static final String RESOURCE_TYPE = "etisalat/components/tabs";

	private static final String IMAGE_TAB = "imagetab";

	@SlingObject
	@Optional
	private Resource res;

	/**
	 * Returns the tab menu image items list.
	 * 
	 * @param childItem
	 * @return
	 */
	private List<TabImageItem> getItems() {
		Resource imageRes = res.getChild(IMAGE_TAB);
		List<TabImageItem> itemsList = new ArrayList<>();
		if (null != imageRes) {
			imageRes.listChildren().forEachRemaining(resource -> {
				TabImageItem imageModel = resource.adaptTo(TabImageItem.class);

				itemsList.add(imageModel);
			});
		}
		return itemsList;
	}

	@Override
	public List<TabImageItem> getTabImageItems() {
		return Collections.unmodifiableList(getItems());
	}

}
