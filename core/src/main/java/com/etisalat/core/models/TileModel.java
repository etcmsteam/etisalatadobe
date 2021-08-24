package com.etisalat.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.Date;

@Model(adaptables = { Resource.class,
		SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class TileModel {

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String tiletitle;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String link;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String ctatext;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String text;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String fileReference;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private Date tiledate;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String labeltext;

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getTiletitle() {
		return tiletitle;
	}

	public void setTiletitle(String tiletitle) {
		this.tiletitle = tiletitle;
	}

	public String getFileReference() {
		return fileReference;
	}

	public void setFileReference(String fileReference) {
		this.fileReference = fileReference;
	}

	public String getCtatext() {
		return ctatext;
	}

	public void setCtatext(String ctatext) {
		this.ctatext = ctatext;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}
	

	public String getLabeltext() {
		return labeltext;
	}

	public void setLabeltext(String labeltext) {
		this.labeltext = labeltext;
	}

	public Date getTiledate() {
		return tiledate;
	}

	public void setTiledate(Date tiledate) {
		this.tiledate = tiledate;
	}


}
