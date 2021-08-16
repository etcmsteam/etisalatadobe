package com.etisalat.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.etisalat.core.util.CommonUtility;

@Model(adaptables = { Resource.class,
		SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class FixedNavigtaionMultifieldModel {

	@ValueMapValue
	private String navigationTitle;

	@ValueMapValue
	private String navigationLink;

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

}
