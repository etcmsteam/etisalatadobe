package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import com.etisalat.core.models.LinkModel;
import com.etisalat.core.models.TabImage;

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
	private List<LinkModel> getItems() {
		Resource imageRes = res.getChild(IMAGE_TAB);
		List<LinkModel> itemsList = new ArrayList<>();
		if (null != imageRes) {
			imageRes.listChildren().forEachRemaining(resource -> {
				LinkModel imageModel = resource.adaptTo(LinkModel.class);

				itemsList.add(imageModel);
			});
		}
		return itemsList;
	}

	@Override
	public List<LinkModel> getTabImageItems() {
		return Collections.unmodifiableList(getItems());
	}

}
