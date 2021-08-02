package com.etisalat.core.models;

import java.util.List;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class)
public class QuickLinkModel {

  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String quickLinkTitle;

  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private List<LinkModel> links;

	public String getQuickLinkTitle() {
		return quickLinkTitle;
	}

	public void setQuickLinkTitle(String quickLinkTitle) {
		this.quickLinkTitle = quickLinkTitle;
	}

	public List<LinkModel> getLinks() {
		return links;
	}

	public void setLinks(List<LinkModel> links) {
		this.links = links;
	}
}
