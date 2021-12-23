package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.etisalat.core.constants.AEConstants;
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
		return Collections.unmodifiableList(getItems(AEConstants.QUICKLINKS));
	}

	@Override
	public List<LinkModel> getBrandItems() {
		return Collections.unmodifiableList(getItems(AEConstants.BRAND_ITEMS));
	}

	public String getRedirectPage() {
		return CommonUtility.appendHtmlExtensionToPage(resourceResolver, redirectPage);
	}

}
