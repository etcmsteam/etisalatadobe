package com.etisalat.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = { Resource.class,
		SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class FixedNavigationModel {

	private static final Logger LOG = LoggerFactory.getLogger(FixedNavigationModel.class);

	@SlingObject
	private SlingHttpServletRequest request;

	public static final String HTML_EXTENSION = ".html";

	private static final String MULTIFIELD_NODE = "fixedItems";

	@SlingObject
	@Optional
	protected Resource currentResource;

	private List<FixedNavigtaionMultifieldModel> fixedNav; // multifield node with navigationTitle and navigationLink

	@PostConstruct
	protected void init() {

		fixedNav = new ArrayList<>();

		if (null != currentResource) {
			LOG.info("current resource is {}", currentResource.getPath());

			if (currentResource.hasChildren()) {
				Resource multifieldChild = currentResource.getChild(MULTIFIELD_NODE);

				Iterator<Resource> multiItr = multifieldChild.listChildren();

				while (multiItr.hasNext()) {
					Resource res = multiItr.next();

					FixedNavigtaionMultifieldModel modelObj = res.adaptTo(FixedNavigtaionMultifieldModel.class);
					setExtensionToLink(modelObj);
					fixedNav.add(modelObj);
				}

			}
		}

	}

	public List<FixedNavigtaionMultifieldModel> getFixedNav() {
		return fixedNav;
	}

	private void setExtensionToLink(FixedNavigtaionMultifieldModel modelObj) {
		String cardLink = StringUtils.isNotBlank(modelObj.getNavigationLink()) ? modelObj.getNavigationLink()
				: StringUtils.EMPTY;
		if (cardLink.startsWith("/content/") && !StringUtils.contains(cardLink, HTML_EXTENSION)) {
			modelObj.setNavigationLink(cardLink + HTML_EXTENSION);
		}

	}
}
