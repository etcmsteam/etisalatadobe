package com.etisalat.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class)
public class TabImageItem {

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String tabImageName;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String tabImagePath;

	
	/**
	 * @return the tabImageName
	 */
	public String getTabImageName() {
		return tabImageName;
	}

	/**
	 * @return the tabImagePath
	 */
	public String getTabImagePath() {
		return tabImagePath;
	}

	/**
	 * @param tabImageName the tabImageName to set
	 */
	public void setTabImageName(String tabImageName) {
		this.tabImageName = tabImageName;
	}

	/**
	 * @param tabImagePath the tabImagePath to set
	 */
	public void setTabImagePath(String tabImagePath) {
		this.tabImagePath = tabImagePath;
	}
}
