package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.factory.ModelFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.jcr.JcrConstants;
import com.etisalat.core.constants.PageConstants;
import com.etisalat.core.models.FixedNavigtaionMultifieldModel;
import com.etisalat.core.models.LinkModel;
import com.etisalat.core.models.MegaFixedNavigationItem;
import com.etisalat.core.models.MegaNavigation;
import com.etisalat.core.models.MegaNavigationItem;
import com.etisalat.core.models.MegaSubNavigationItem;
import com.etisalat.core.models.MegaTeaserModel;
import com.etisalat.core.models.TopnavModel;
import com.etisalat.core.util.CommonUtility;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
		MegaNavigation.class }, resourceType = { MegaNavigationImpl.RESOURCE_TYPE })
public class MegaNavigationImpl implements MegaNavigation {
	
	private static final Logger LOG = LoggerFactory.getLogger(MegaNavigationImpl.class);

	/**
	 * The resource type.
	 */
	protected static final String RESOURCE_TYPE = "etisalat/components/global/meganavigation";
	
	private static final String TOP_NAVIGATION_RESOURCE_TYPE = "etisalat/components/global/topnav";
	
	private static final String FIXED_NAVIGATION_RESOURCE_TYPE = "etisalat/components/fixednavigation";
	
	private static final String TEASER_RESOURCE_TYPE = "etisalat/components/teaser";
	
	private static final String TITLE_RESOURCE_TYPE = "etisalat/components/title";

	private static final String NAVIGATION_ITEMS = "navigationItems";
	
	private static final String CONTAINER_ITEMS = "containerItems";

	private static final String ADDITIONAL_LINKS = "addLinks";

	private static final String SUB_NAVIGATION_ITEMS = "subNavItems";
	
	private static final String MYACCOUNT_LINKS = "accountLinks";
	
	private static final String CQ_RESPONSIVE_NODE = "cq:responsive";
	
	private static final String PROPERTY_LINK = "link";
	
	private static final String STYLE_ID = "cq:styleIds";
	
	private static final String ACTIVE = "active";
	
	private static final String JCR_CONTENT_ROOT = "jcr:content/root";
	
	private static final String TOP_NAVIGATION_LINKS = "topnavlinks";
	
	private static final String  LINKS_WITH_ICONS = "linkswithicons";

	@SlingObject
	@Optional
	private Resource currentRes;
	
	 @Self
	 @Optional
	 private SlingHttpServletRequest request;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String fileReference;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String logoLink;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String menuLayout;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String topNavMenuPath;
	
	private Resource topNavResource;
	
	/**
     * The model factory service.
     */
    @OSGiService
    private ModelFactory modelFactory;
	
	

	/**
	 * Returns the  experience fragment menu items list.
	 * 
	 * @param childItem
	 * @return
	 */
	private List<MegaNavigationItem> getXFContainerMenuListItems(String childItem) {
		List<MegaNavigationItem> containerXFMenuList = new ArrayList<>();
		if (StringUtils.isNotBlank(menuLayout) && menuLayout.equals("xfragment")) {
			Resource navItemRes = currentRes.getChild(childItem);
			if (null != navItemRes) {
				navItemRes.listChildren().forEachRemaining(resource -> {
					MegaNavigationItem navModel = resource.adaptTo(MegaNavigationItem.class);
					String variationPath = navModel.getXfVariationPath();
					setXFContainerMenuListItems(resource, variationPath, navModel);
					containerXFMenuList.add(navModel);
				});
			}

		}
		return containerXFMenuList;
	}
	
	
	/**
	 * Returns the MegaNavigation menu items list.
	 * 
	 * @param childItem
	 * @return
	 */
	private List<MegaNavigationItem> getNavigationItems(String childItem) {
		Resource navItemRes = currentRes.getChild(childItem);
		List<MegaNavigationItem> navigationItemsList = new ArrayList<>();
		if (null != navItemRes) {
			navItemRes.listChildren().forEachRemaining(resource -> {
				MegaNavigationItem navModel = resource.adaptTo(MegaNavigationItem.class);
				navModel.setNavigationLinkTo(CommonUtility.appendHtmlExtensionToPage(navModel.getNavigationLinkTo()));
				if (StringUtils.isBlank(navModel.getUtilityMenuLayout())
						|| navModel.getUtilityMenuLayout().equals("fixedmenulist")) {
					setSubNavigationItems(resource, navModel);
				} else {
					String variationPath = navModel.getXfVariationPath();
					setXFContainerMenuListItems(resource, variationPath, navModel);
				}
				navigationItemsList.add(navModel);
			});
		}

		return navigationItemsList;

	}

   /**
    * Sets the MegaNavigation Sub menu items list.
    * @param itemResource
    * @param navModel
    * 
    */
	private void setSubNavigationItems(Resource itemResource, MegaNavigationItem navModel) {
		if (itemResource.hasChildren()) {
			Resource subItemRes = itemResource.getChild(SUB_NAVIGATION_ITEMS);
			List<MegaSubNavigationItem> subItemList = new ArrayList<>();
			subItemRes.listChildren().forEachRemaining(resource -> {
				MegaSubNavigationItem subNavModel = resource.adaptTo(MegaSubNavigationItem.class);
				setNavMenuActive(resource, subNavModel.getSubNavLinkTo(), navModel);
				subNavModel.setSubNavLinkTo(CommonUtility.appendHtmlExtensionToPage(subNavModel.getSubNavLinkTo()));
				subItemList.add(subNavModel);
			});
			navModel.setSubNavigationList(subItemList);			
		}
	}
	
	/**
	 * Sets menu active item if current page name equals to sub navigation link else empty.
	 * @param resource
	 * @param path
	 * @param nav
	 */
	private void setNavMenuActive(Resource resource, String path, MegaNavigationItem nav) {
		if (StringUtils.isNotEmpty(path) && !path.contains(PageConstants.HTTPS)
				&& (path.startsWith(PageConstants.CONTENT)
						&& !StringUtils.contains(path, PageConstants.HTML_EXTENSION))) {
			Resource subNavResource = resource.getResourceResolver().getResource(path);
			if (null != subNavResource && StringUtils.isBlank(nav.getActive()))
				nav.setActive(request.getPathInfo().contains(subNavResource.getName()) ? ACTIVE : StringUtils.EMPTY);

		}
	}
	
	
	/**
	 * Sets experience fragment container menu items list.
	 * @param resource
	 * @param variationPath
	 * @param navModel
	 */
	private void setXFContainerMenuListItems(Resource resource, String variationPath, MegaNavigationItem navModel) {
		if (StringUtils.isNotBlank(variationPath)
				&& null != resource.getResourceResolver().getResource(variationPath)) {
			Resource variationRes = resource.getResourceResolver().getResource(variationPath);
			Resource rootRes = variationRes.getChild(JCR_CONTENT_ROOT);
			setMenuItems(rootRes, navModel);								
		} else {
			LOG.warn("Invalid experience fragment variation path");
		}
	}
	
	/**
	 * Sets MegaMenu Experience fragment container components
	 * @param rootRes
	 * @param navModel
	 */
	private void setMenuItems(Resource rootRes, MegaNavigationItem navModel) {
		if (null != rootRes) {
			rootRes.listChildren().forEachRemaining(resource -> {
				String styleID = getContainerStyleID(resource);
				switch (styleID) {
				case "1626427188774": {
					List<MegaFixedNavigationItem> subMenuList = new ArrayList<>();
					setContainerSubMenuList(subMenuList, resource, FIXED_NAVIGATION_RESOURCE_TYPE);
					navModel.setContainerSubMenuList(subMenuList);
					break;
				}
				case "1626427211199": {
					List<MegaFixedNavigationItem> footerMenuList = new ArrayList<>();
					setContainerSubMenuList(footerMenuList, resource, FIXED_NAVIGATION_RESOURCE_TYPE);
					navModel.setContainerFooterMenuList(footerMenuList);
					break;
				}
				case "1626428057855": {
					List<MegaTeaserModel> tilesList = new ArrayList<>();
					setContainerTilesItemList(tilesList, resource, TEASER_RESOURCE_TYPE);
					navModel.setContainerPromotionList(tilesList);
					break;
				}
				default:

				}

			});
		}
	}

	/**
	 * Sets Container sub menu and footer menu items to list.
	 * 
	 * @param subMenuList
	 * @param item
	 * @param resourceType
	 */
	private void setContainerSubMenuList(List<MegaFixedNavigationItem> subMenuList, Resource item, String resourceType) {
		for (Resource childRes : item.getChildren()) {			
			String styleID = getContainerStyleID(childRes);
			if (childRes.getResourceType().equals(resourceType)) {
				MegaFixedNavigationItem fixedNavModel = childRes.adaptTo(MegaFixedNavigationItem.class);
				if (null != fixedNavModel) {					
					subMenuList.add(fixedNavModel);
				}
			} else if (childRes.getResourceType().equals("etisalat/components/container")
					&& StringUtils.isNotBlank(styleID) && styleID.equals("1628780873955")) {
				MegaFixedNavigationItem fixedNavModel = childRes.adaptTo(MegaFixedNavigationItem.class);
				fixedNavModel.setFeatureItemExist(true);
				setContainerBrandMenuList(childRes, fixedNavModel, subMenuList);
			}
		}

	}
	
	private void setContainerBrandMenuList(Resource itemResource, MegaFixedNavigationItem fixedNavModel, List<MegaFixedNavigationItem> subMenuList) {
		List<MegaTeaserModel> brandMenuList = new ArrayList<>();		
		for (Resource childRes : itemResource.getChildren()) {			
			if (childRes.getResourceType().equals(TITLE_RESOURCE_TYPE)) {
				fixedNavModel.setTitle(childRes.getValueMap().get(JcrConstants.JCR_TITLE, StringUtils.EMPTY));
			} else if (childRes.getResourceType().equals(TEASER_RESOURCE_TYPE)) {
				MegaTeaserModel teaserModel = childRes.adaptTo(MegaTeaserModel.class);
				if (null != teaserModel && StringUtils.isNotBlank(teaserModel.getFileReference())) {
					brandMenuList.add(teaserModel);
				}
			}
		}
		fixedNavModel.setFeatureImageList(brandMenuList);		
		subMenuList.add(fixedNavModel);
	}
	
	/**
	 * Sets container promotional and cover tiles items to list.
	 * 
	 * @param tilesList
	 * @param childresource
	 * @param resourceType
	 */
	private void setContainerTilesItemList(List<MegaTeaserModel> tilesList, Resource childresource,
			String resourceType) {
		childresource.listChildren().forEachRemaining(resource -> {
			if (!resource.getName().equals(CQ_RESPONSIVE_NODE) && resource.getResourceType().equals(resourceType)) {
				MegaTeaserModel teaserModel = resource.adaptTo(MegaTeaserModel.class);
				if (null != teaserModel && StringUtils.isNotBlank(teaserModel.getFileReference())) {
					setTeaserCTADetails(teaserModel, resource);
					tilesList.add(teaserModel);
				}
			}
		});
	}
	
	/**
	 * Sets teaser cta link and text details.
	 * 
	 * @param teaserModel
	 * @param actionResource
	 */
	private void setTeaserCTADetails(MegaTeaserModel teaserModel, Resource actionResource) {
		if (StringUtils.isNotBlank(teaserModel.getActionsEnabled()) && teaserModel.getActionsEnabled().equals("true")) {
			Resource item = actionResource.getChild("actions");
			if (null != item) {
				for (Resource itemRes : item.getChildren()) {
					ValueMap vm = itemRes.getValueMap();
					teaserModel.setLink(vm.containsKey(PROPERTY_LINK)
							? CommonUtility.appendHtmlExtensionToPage(vm.get(PROPERTY_LINK, String.class))
							: StringUtils.EMPTY);
					teaserModel.setText(vm.get("text", String.class));
				}

			}
		}
	}

	/**
	 * This method returns the container style id.
	 * 
	 * @param resource
	 * @return
	 */
	private String getContainerStyleID(Resource resource) {
		if (resource.getValueMap().containsKey(STYLE_ID)) {
			String[] styleIds = resource.getValueMap().get(STYLE_ID, String[].class);
			if (null != styleIds && styleIds.length > 0)
				return styleIds[0];
		}
		return StringUtils.EMPTY;
	}
	
	/**
	 * Return a collection of objects representing the top navigation menu items.
	 * 
	 * @param childItem
	 * @return
	 */
	private List<FixedNavigtaionMultifieldModel> getTopNavigationItems(String childItem) {
		List<FixedNavigtaionMultifieldModel> topNavItemsList = new ArrayList<>();
		Resource rootRes = null;
		if (StringUtils.isNotBlank(topNavMenuPath) && currentRes.getPath().contains(topNavMenuPath)) {
			rootRes = currentRes.getParent();
		} else if (StringUtils.isNotBlank(topNavMenuPath)) {
			Resource topNavRes = currentRes.getResourceResolver().getResource(topNavMenuPath);
			if (null != topNavRes) {
				rootRes = topNavRes.getChild(JCR_CONTENT_ROOT);
			}
		}

		setTopNavigationMenuItems(topNavItemsList, rootRes, childItem);
		return topNavItemsList;
	}
	
	/**
	 * Sets top navigation menu item details.
	 * 
	 * @param topNavItemsList
	 * @param rootRes
	 * @param childItem
	 */
	private void setTopNavigationMenuItems(List<FixedNavigtaionMultifieldModel> topNavItemsList, Resource rootRes,
			String childItem) {
		if (null != rootRes) {
			for (Resource childRes : rootRes.getChildren()) {
				String resourceType = childRes.getResourceType();
				if (resourceType.equals(TOP_NAVIGATION_RESOURCE_TYPE) && null != childRes.getChild(childItem)) {
					childRes.getChild(childItem).listChildren().forEachRemaining(resource -> {
						FixedNavigtaionMultifieldModel navModel = resource
								.adaptTo(FixedNavigtaionMultifieldModel.class);
						navModel.setNavigationLink(
								CommonUtility.appendHtmlExtensionToPage(navModel.getNavigationLink()));
						topNavItemsList.add(navModel);
					});
					setTopNavResource(childRes);
					break;
				}
			}
		}
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
		return CommonUtility.appendHtmlExtensionToPage(logoLink);
	}


	@Override
	public List<MegaNavigationItem> getMegaContainerItems() {
		return Collections.unmodifiableList(getXFContainerMenuListItems(CONTAINER_ITEMS));
	}


	@Override
	public List<MegaNavigationItem> getAccountNavigationItems() {
		return Collections.unmodifiableList(getNavigationItems(MYACCOUNT_LINKS));
	}


	@Override
	public List<FixedNavigtaionMultifieldModel> getTopNavMenuItems() {		
		return Collections.unmodifiableList(getTopNavigationItems(TOP_NAVIGATION_LINKS));
	}


	@Override
	public List<FixedNavigtaionMultifieldModel> getTopNavIconMenuItems() {
		return Collections.unmodifiableList(getTopNavigationItems(LINKS_WITH_ICONS));
	}
	
	@Override
	public List<LinkModel> getLanguageItems() {
		List<LinkModel> langList = new ArrayList<>();
		if (null != getTopNavResource()) {
			TopnavModel topNavModel = this.modelFactory.getModelFromWrappedRequest(this.request, getTopNavResource(),
					TopnavModel.class);
			if (null != topNavModel) {
				langList = topNavModel.getLocaleList();
			}
		}
		return Collections.unmodifiableList(langList);
	}


	/**
	 * @return the topNavResource
	 */
	public Resource getTopNavResource() {
		return topNavResource;
	}


	/**
	 * @param topNavResource the topNavResource to set
	 */
	public void setTopNavResource(Resource topNavResource) {
		this.topNavResource = topNavResource;
	}

}
