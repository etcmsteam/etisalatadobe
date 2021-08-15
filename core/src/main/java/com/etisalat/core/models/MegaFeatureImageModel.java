package com.etisalat.core.models;

import java.util.Collections;
import java.util.List;

public class MegaFeatureImageModel {

	private String title;
	
	private List<MegaTeaserModel> featureImageList = Collections.emptyList();

	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @return the featureImageList
	 */
	public List<MegaTeaserModel> getFeatureImageList() {
		return Collections.unmodifiableList(featureImageList);
	}

	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @param featureImageList the featureImageList to set
	 */
	public void setFeatureImageList(List<MegaTeaserModel> featureImageList) {
		this.featureImageList = Collections.unmodifiableList(featureImageList);
	}
}
