package com.etisalat.core.models;

import java.util.Collections;
import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class)
public class MegaFixedNavigationItem {

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String navTitle;
	
	@ChildResource(injectionStrategy = InjectionStrategy.OPTIONAL,name="fixedItems")
	private List<FixedNavigtaionMultifieldModel> fixedItems = Collections.emptyList();
	
	private boolean isFeatureItemExist;
	
	private MegaFeatureImageModel featureImageModel;

	/**
	 * @return the navTitle
	 */
	public String getNavTitle() {
		return navTitle;
	}

	/**
	 * @return the fixedItems
	 */
	public List<FixedNavigtaionMultifieldModel> getFixedItems() {
		return Collections.unmodifiableList(fixedItems);
	}

	/**
	 * @param navTitle the navTitle to set
	 */
	public void setNavTitle(String navTitle) {
		this.navTitle = navTitle;
	}

	/**
	 * @param fixedItems the fixedItems to set
	 */
	public void setFixedItems(List<FixedNavigtaionMultifieldModel> fixedItems) {
		this.fixedItems = Collections.unmodifiableList(fixedItems);
	}

	/**
	 * @return the isFeatureItemExist
	 */
	public boolean isFeatureItemExist() {
		return isFeatureItemExist;
	}

	/**
	 * @param isFeatureItemExist the isFeatureItemExist to set
	 */
	public void setFeatureItemExist(boolean isFeatureItemExist) {
		this.isFeatureItemExist = isFeatureItemExist;
	}

	/**
	 * @return the featureImageModel
	 */
	public MegaFeatureImageModel getFeatureImageModel() {
		return featureImageModel;
	}

	/**
	 * @param featureImageModel the featureImageModel to set
	 */
	public void setFeatureImageModel(MegaFeatureImageModel featureImageModel) {
		this.featureImageModel = featureImageModel;
	}
}
