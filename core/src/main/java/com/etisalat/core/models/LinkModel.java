package com.etisalat.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class)
public class LinkModel {

  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String linkText;

  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String linkUrl;

  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String linkUrlActive;

  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String altText;

  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String title;

  @ValueMapValue(name = "fileReference" ,injectionStrategy = InjectionStrategy.OPTIONAL)
  private String imgUrl;

	public String getLinkText() {
		return linkText;
	}

	public void setLinkText(String linkText) {
		this.linkText = linkText;
	}

	public String getLinkUrl() {
		return linkUrl;
	}

	public String getLinkUrlActive() {
		return linkUrlActive;
	}

	public void setLinkUrl(String linkUrl) {
		this.linkUrl = linkUrl;
	}
	
	
	public void setLinkUrlActive(String linkUrlActive) {
		this.linkUrlActive = linkUrlActive;
	}

	public String getAltText() {
		return altText;
	}

	public void setAltText(String altText) {
		this.altText = altText;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
}
