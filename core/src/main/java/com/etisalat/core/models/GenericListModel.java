package com.etisalat.core.models;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class })
public class GenericListModel {

	private static final Logger LOG = LoggerFactory.getLogger(GenericListModel.class);

	@ValueMapValue
	private String rootPath;

	@SlingObject
	private SlingHttpServletRequest request;

	private List<GenericListPageDetails> genericListObj;

	String thumbnailPath;

	@PostConstruct
	protected void init() {
		LOG.info("In GenericListModel Init method");
		
		genericListObj = new ArrayList<>();
		Resource res = request.getResourceResolver().getResource(rootPath);
		if (null != res && res.hasChildren()) {
			res.listChildren().forEachRemaining((childResource) -> {
				if (!childResource.getPath().contains("/jcr:content")) {
					Resource imageRes = request.getResourceResolver()
							.getResource(childResource.getPath() + "/jcr:content/image");
					String imagePath = null != imageRes && imageRes.getValueMap().containsKey("fileReference")
							? imageRes.getValueMap().get("fileReference").toString()
							: StringUtils.EMPTY;

					Page childPage = childResource.adaptTo(Page.class);

					GenericListPageDetails detail = new GenericListPageDetails();
					LOG.info("list of pages {}", childPage.getPageTitle());
					detail.setTitle(StringUtils.isNotBlank(childPage.getPageTitle()) ? childPage.getPageTitle()
							: childPage.getTitle());
					detail.setDescription(childPage.getDescription());
					detail.setOffTime(childPage.getOffTime());
					detail.setPath(childPage.getPath());
					detail.setThumbnail(imagePath);

					genericListObj.add(detail);
				}
			});
		}
	}

	public List<GenericListPageDetails> getGenericListObj() {
		return Collections.unmodifiableList(genericListObj);
	}
	
}