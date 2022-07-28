package com.etisalat.core.models;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import com.etisalat.core.constants.AEConstants;

/**
 * The Class ImageWithIconTabModel is used to get the values of the image with
 * icons authored in Tabs component.
 */
@Model(adaptables = { Resource.class,
		SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ImageWithIconTabModel {

	/** The res. */
	@SlingObject
	private Resource res;

	/**
	 * Gets the container list.
	 *
	 * @return the container list
	 */
	public List<Resource> getContainerList() {
		List<Resource> tabContainerList = new ArrayList<>();
		res.listChildren().forEachRemaining(childResource -> {
			if (childResource.getResourceType().equals(AEConstants.CONTAINER_RESOURCE)) {
				tabContainerList.add(childResource);
			}
		});
		return tabContainerList;
	}

	/**
	 * Gets the tab image view port items.
	 *
	 * @return the tab image view port items
	 */
	public List<LinkModel> getTabImageViewPortItems() {
		return getComponentDataList(AEConstants.IMAGE_VIEWPORT_RESOURCE);
	}

	/**
	 * Gets the component data list.
	 *
	 * @param resourceType the resource type
	 * @return the component data list
	 */
	private List<LinkModel> getComponentDataList(String resourceType) {
		List<LinkModel> tabDataItemList = new ArrayList<>();
		for (Resource resource : getContainerList()) {
			resource.listChildren().forEachRemaining(actualResource -> {
				if (actualResource.getResourceType().equals(resourceType)) {
					tabDataItemList.add(actualResource.adaptTo(LinkModel.class));
				}
			});
		}
		return Collections.unmodifiableList(tabDataItemList);
	}

	/**
	 * Gets the teaser enterprise items.
	 *
	 * @return the teaser enterprise items
	 */
	public List<LinkModel> getTeaserEnterpriseItems() {
		return getComponentDataList(AEConstants.TEASER_ETISALAT_RESOURCE);
	}

}
