package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.etisalat.core.models.LinkModel;
import com.etisalat.core.models.SiteSearch;
import com.etisalat.core.util.CommonUtility;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = { SiteSearch.class }, resourceType = {
		SiteSearchImpl.RESOURCE_TYPE })
public class SiteSearchImpl implements SiteSearch {

	public static final String RESOURCE_TYPE = "etisalat/components/search";

	private static final String QUICKLINK_ITEMS = "quicklinks";

	private static final String BRAND_ITEMS = "brandItems";

	@SlingObject
	@Optional
	private Resource currentRes;
	
	@SlingObject
	private ResourceResolver resourceResolver;
	
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String redirectPage;

	/**
	 * 
	 * @param itemRes
	 * @return the items list for quick links and brand items
	 */
	private List<LinkModel> getItems(String itemRes) {
		List<LinkModel> subItemList = new ArrayList<>();
		Resource subItemRes = currentRes.getChild(itemRes);
		if (null != subItemRes) {
			subItemRes.listChildren().forEachRemaining(resource -> {
				LinkModel linkModel = resource.adaptTo(LinkModel.class);
				subItemList.add(linkModel);
			});
		}
		return subItemList;
	}

	@Override
	public List<LinkModel> getQuickLinksItems() {
		return Collections.unmodifiableList(getItems(QUICKLINK_ITEMS));
	}

	@Override
	public List<LinkModel> getBrandItems() {
		return Collections.unmodifiableList(getItems(BRAND_ITEMS));
	}

	public String getRedirectPage() {
		return CommonUtility.appendHtmlExtensionToPage(resourceResolver, redirectPage);
	}

}
