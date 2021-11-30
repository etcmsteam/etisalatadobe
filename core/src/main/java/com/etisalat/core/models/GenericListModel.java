package com.etisalat.core.models;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.annotation.PostConstruct;
import com.etisalat.core.util.CommonUtility;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class })
public class GenericListModel {

	private static final Logger LOG = LoggerFactory.getLogger(GenericListModel.class);

	@ValueMapValue
	@Optional
	private String rootPath;

	@ValueMapValue
	@Optional
	private String pagelist;
	
	@SlingObject
	private ResourceResolver resourceResolver;

	@SlingObject
	private SlingHttpServletRequest request;

	private List<GenericListPageDetails> genericListObj;

	private static final String FIXEDLIST_NODE = "fixedlist";
	private static final String FILE_REFERENCE="fileReference";

	@SlingObject
	@Optional
	protected Resource currentResource;

	@PostConstruct
	protected void init() {
		LOG.info("In GenericListModel Init method");
		genericListObj= new ArrayList<>();
		if (currentResource.getChild("fixedpath") != null || StringUtils.isNotBlank(rootPath)) {

			if (StringUtils.isNotBlank("pagelist") && pagelist.equals(FIXEDLIST_NODE)) {

				currentResource.getChild("fixedpath").listChildren().forEachRemaining(itemResource -> {

					ValueMap properties = itemResource.getValueMap();
					String itemPath = properties.get("link", StringUtils.EMPTY);
					String authoredImage = properties.get(FILE_REFERENCE, StringUtils.EMPTY);
					String authoredLabel = properties.get("label", StringUtils.EMPTY);
					if(itemPath.contains("/content")) {					
						Resource itemChildRes = request.getResourceResolver().getResource(itemPath);
						Page childPage = itemChildRes.adaptTo(Page.class);
						Resource imageRes = request.getResourceResolver().getResource(itemChildRes.getPath() + "/jcr:content/image");
						if(StringUtils.isBlank(authoredImage) &&  null != imageRes && imageRes.getValueMap().containsKey(FILE_REFERENCE)) {
							authoredImage = imageRes.getValueMap().get(FILE_REFERENCE).toString();
						}
						if(StringUtils.isBlank(authoredLabel) && StringUtils.isNotBlank(childPage.getPageTitle())){
							authoredLabel =  childPage.getPageTitle();
						}  else if (StringUtils.isBlank(authoredLabel) && StringUtils.isNotBlank(childPage.getTitle())){
							authoredLabel =  childPage.getTitle();
						}
						GenericListPageDetails detail = new GenericListPageDetails();
						LOG.info("list of pages {}", childPage.getPageTitle());
						detail.setTitle(authoredLabel);
						detail.setDescription(childPage.getDescription());
						detail.setOffTime(childPage.getOffTime());
						detail.setPath(CommonUtility.appendHtmlExtensionToPage(resourceResolver, childPage.getPath()));
						detail.setThumbnail(authoredImage);
						genericListObj.add(detail);
					}
					else {
						if(StringUtils.isNotEmpty(itemPath)) {
							GenericListPageDetails detail = new GenericListPageDetails();			
							detail.setTitle(authoredLabel);	
							detail.setPath(itemPath);	
							detail.setThumbnail(authoredImage);							
							genericListObj.add(detail);
						}
					}


				});

			} else {
				Resource res = request.getResourceResolver().getResource(rootPath);
				if (null != res) {
					res.listChildren().forEachRemaining(childResource -> {
						if (!childResource.getPath().contains("/jcr:content")) {
							storeListData(childResource);

						}
					});
				}
			}
		}

	}

	private void storeListData(Resource childResource) {

		Resource imageRes = request.getResourceResolver().getResource(childResource.getPath() + "/jcr:content/image");
		String imagePath = null != imageRes && imageRes.getValueMap().containsKey(FILE_REFERENCE)
				? imageRes.getValueMap().get(FILE_REFERENCE).toString()
						: StringUtils.EMPTY;

		Page childPage = childResource.adaptTo(Page.class);

		GenericListPageDetails detail = new GenericListPageDetails();
		LOG.info("list of pages {}", childPage.getPageTitle());
		detail.setTitle(
				StringUtils.isNotBlank(childPage.getPageTitle()) ? childPage.getPageTitle() : childPage.getTitle());
		detail.setDescription(childPage.getDescription());
		detail.setOffTime(childPage.getOffTime());
		detail.setPath(CommonUtility.appendHtmlExtensionToPage(resourceResolver, childPage.getPath()));
		detail.setThumbnail(imagePath);
		genericListObj.add(detail);

	}

	public List<GenericListPageDetails> getGenericListObj() {
		return Collections.unmodifiableList(genericListObj);
	}

}