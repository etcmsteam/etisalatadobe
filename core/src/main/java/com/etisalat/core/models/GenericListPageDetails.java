package com.etisalat.core.models;

import java.util.Calendar;

public class GenericListPageDetails{
	private String title;
	private String pageTitle;
	private String description;
	private String file;
	private Calendar offTime;
	private String path;

	private String thumbnail;

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	public Calendar getOffTime() {
		return offTime;
	}

	public void setOffTime(Calendar calendar) {
		this.offTime = calendar;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getFile() {
		return file;
	}

	public void setFile(String file) {
		this.file = file;
	}
	
	public String getPageTitle() {
		return pageTitle;
	}

	public void setPageTitle(String pageTitle) {
		this.pageTitle = pageTitle;
	}
	
	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

}
