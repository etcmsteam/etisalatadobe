package com.etisalat.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.etisalat.core.util.CommonUtility;

@Model(adaptables = { Resource.class,
		SlingHttpServletRequest.class })
public class FixedNavigtaionMultifieldModel {

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String navigationTitle;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String navigationLink;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String navigationDesc;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String navigationImage;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String active;
	
	public void setNavigationTitle(String navigationTitle) {
		this.navigationTitle = navigationTitle;
	}

	public void setNavigationLink(String navigationLink) {
		this.navigationLink = navigationLink;
	}

	public String getNavigationTitle() {
		return navigationTitle;
	}

	public String getNavigationLink() {
		return CommonUtility.appendHtmlExtensionToPage(navigationLink);
	}

	/**
	 * @return the navigationDesc
	 */
	public String getNavigationDesc() {
		return navigationDesc;
	}

	/**
	 * @param navigationDesc the navigationDesc to set
	 */
	public void setNavigationDesc(String navigationDesc) {
		this.navigationDesc = navigationDesc;
	}

	/**
	 * @return the active
	 */
	public String getActive() {
		return active;
	}

	/**
	 * @param active the active to set
	 */
	public void setActive(String active) {
		this.active = active;
	}

	/**
	 * @return the navigationImage
	 */
	public String getNavigationImage() {
		return navigationImage;
	}

	/**
	 * @param navigationImage the navigationImage to set
	 */
	public void setNavigationImage(String navigationImage) {
		this.navigationImage = navigationImage;
	}

}
