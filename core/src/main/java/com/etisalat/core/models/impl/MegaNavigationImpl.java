package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.etisalat.core.constants.PageConstants;
import com.etisalat.core.models.MegaNavigation;
import com.etisalat.core.models.MegaNavigationItem;
import com.etisalat.core.models.MegaSubNavigationItem;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
		MegaNavigation.class }, resourceType = { MegaNavigationImpl.RESOURCE_TYPE })
public class MegaNavigationImpl implements MegaNavigation {

	/**
	 * The resource type.
	 */
	protected static final String RESOURCE_TYPE = "etisalat/components/global/meganavigation";

	private static final String NAVIGATION_ITEMS = "navigationItems";

	private static final String ADDITIONAL_LINKS = "addLinks";

	private static final String SUB_NAVIGATION_ITEMS = "subNavItems";

	@SlingObject
	@Optional
	private Resource res;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String fileReference;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String logoLink;

	/**
	 * Returns the MegaNavigation menu items list.
	 * 
	 * @param childItem
	 * @return
	 */
	private List<MegaNavigationItem> getNavigationItems(String childItem) {
		Resource navItemRes = res.getChild(childItem);
		List<MegaNavigationItem> navigationItemsList = new ArrayList<>();
		if (null != navItemRes) {
			navItemRes.listChildren().forEachRemaining(resource -> {
				MegaNavigationItem navModel = resource.adaptTo(MegaNavigationItem.class);
				navModel.setNavigationLinkTo(appendHtmlExtensionToPage(navModel.getNavigationLinkTo()));
				setSubNavigationItems(resource, navModel);
				navigationItemsList.add(navModel);
			});
		}

		return navigationItemsList;

	}

	/**
	 * Sets the MegaNavigation Sub menu items list.
	 * 
	 * @param itemResource
	 * @param nav
	 */
	private void setSubNavigationItems(Resource itemResource, MegaNavigationItem nav) {
		if (itemResource.hasChildren()) {
			Resource subItemRes = itemResource.getChild(SUB_NAVIGATION_ITEMS);
			List<MegaSubNavigationItem> subItemList = new ArrayList<>();
			subItemRes.listChildren().forEachRemaining(resource -> {
				MegaSubNavigationItem subNavModel = resource.adaptTo(MegaSubNavigationItem.class);
				subNavModel.setSubNavLinkTo(appendHtmlExtensionToPage(subNavModel.getSubNavLinkTo()));
				subItemList.add(subNavModel);
			});
			nav.setSubNavigationList(subItemList);
		}

	}

	/**
	 * Appends the HTML extension to page
	 * 
	 * @param path
	 * @return
	 */
	private String appendHtmlExtensionToPage(String path) {
		if (StringUtils.isNotEmpty(path) && !(path.contains(PageConstants.HTTP) || path.contains(PageConstants.HTTPS))
				&& (path.startsWith(PageConstants.CONTENT)
						&& !StringUtils.contains(path, PageConstants.HTML_EXTENSION))) {
			return path + PageConstants.HTML_EXTENSION;
		}
		return path;
	}

	@Override
	public List<MegaNavigationItem> getMegaNavigationItems() {
		return Collections.unmodifiableList(getNavigationItems(NAVIGATION_ITEMS));
	}

	@Override
	public String getImagePath() {
		return fileReference;
	}

	@Override
	public List<MegaNavigationItem> getUtilityNavItems() {
		return Collections.unmodifiableList(getNavigationItems(ADDITIONAL_LINKS));
	}

	@Override
	public String getLogoMenuLink() {		
		return appendHtmlExtensionToPage(logoLink);
	}
}
