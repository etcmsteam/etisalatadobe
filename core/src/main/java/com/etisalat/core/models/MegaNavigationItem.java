package com.etisalat.core.models;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


@Model(adaptables = Resource.class)
public class MegaNavigationItem {

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String navigationLabel;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String navigationLinkTo;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String navigationAltText;
	
	private List<MegaSubNavigationItem> subNavigationList;
	

	/**
	 * @return the navigationLabel
	 */
	public String getNavigationLabel() {
		return navigationLabel;
	}

	/**
	 * @return the navigationLinkTo
	 */
	public String getNavigationLinkTo() {
		return navigationLinkTo;
	}

	/**
	 * @return the subNavigationList
	 */
	public List<MegaSubNavigationItem> getSubNavigationList() {
		return subNavigationList;
	}

	/**
	 * @param navigationLabel the navigationLabel to set
	 */
	public void setNavigationLabel(String navigationLabel) {
		this.navigationLabel = navigationLabel;
	}

	/**
	 * @param navigationLinkTo the navigationLinkTo to set
	 */
	public void setNavigationLinkTo(String navigationLinkTo) {
		this.navigationLinkTo = navigationLinkTo;
	}

	/**
	 * @param subNavigationList the subNavigationList to set
	 */
	public void setSubNavigationList(List<MegaSubNavigationItem> subNavigationList) {
		this.subNavigationList = subNavigationList;
	}

	/**
	 * @return the navigationAltText
	 */
	public String getNavigationAltText() {
		return navigationAltText;
	}

	/**
	 * @param navigationAltText the navigationAltText to set
	 */
	public void setNavigationAltText(String navigationAltText) {
		this.navigationAltText = navigationAltText;
	}

	
}
