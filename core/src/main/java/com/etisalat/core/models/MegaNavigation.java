package com.etisalat.core.models;

import java.util.List;

import org.apache.sling.api.resource.Resource;

public interface MegaNavigation {

	/**
	 * 
	 * @return a collection of objects representing the mega navigation items that compose the list.
	 */
	List<MegaNavigationItem> getMegaNavigationItems();
	
	/**
	 * 
	 * @return a collection of objects representing the navigation utility items that compose the list.
	 */
	List<MegaNavigationItem> getUtilityNavItems();
	
	/**
	 * Returns the Logo Image File reference.
	 * 
	 * @return
	 */
	String getImagePath();
	
	/**
	 * Returns the Logo Link.
	 * 
	 * @return
	 */
	String getLogoMenuLink();
	
	
	/**
	 * 
	 * @return a top navigation path resource.
	 */
	Resource getTopNavigationResource();
	
}
