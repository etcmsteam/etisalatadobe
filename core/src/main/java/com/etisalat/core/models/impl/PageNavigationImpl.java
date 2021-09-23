package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import com.etisalat.core.models.FixedNavigtaionMultifieldModel;
import com.etisalat.core.models.PageNavigation;
import com.etisalat.core.util.CommonUtility;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
		PageNavigation.class }, resourceType = { PageNavigationImpl.RESOURCE_TYPE })
public class PageNavigationImpl implements PageNavigation {
	
	/**
	 * The resource type.
	 */
	protected static final String RESOURCE_TYPE = "etisalat/components/pagenavigation";
	
	private static final String PAGE_CHILD_ITEMS = "pageItems";
	
	/**
	 * The current currentRes.
	 */
	@SlingObject
	protected Resource currentRes;

	@Override
	public List<FixedNavigtaionMultifieldModel> getPageNavItems() {
		Resource pageItemRes = currentRes.getChild(PAGE_CHILD_ITEMS);
		List<FixedNavigtaionMultifieldModel> pageItemList = new ArrayList<>();
		if (null != pageItemRes) {
			pageItemRes.listChildren().forEachRemaining(resource -> {
				FixedNavigtaionMultifieldModel pageModel = resource.adaptTo(FixedNavigtaionMultifieldModel.class);
				if (StringUtils.isNotBlank(pageModel.getNavigationLink())) {
					pageModel.setNavigationLink(CommonUtility.appendHtmlExtensionToPage(pageModel.getNavigationLink()));
				}
				pageItemList.add(pageModel);
			});
		}
		return Collections.unmodifiableList(pageItemList);
	}

}
