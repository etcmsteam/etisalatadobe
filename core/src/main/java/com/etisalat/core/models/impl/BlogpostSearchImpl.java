package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.Page;
import com.etisalat.core.constants.PageConstants;
import com.etisalat.core.models.BlogpostSearch;
import com.etisalat.core.models.GenericListPageDetails;
import com.etisalat.core.util.CommonUtility;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
		BlogpostSearch.class }, resourceType = { BlogpostSearchImpl.RESOURCE_TYPE })
public class BlogpostSearchImpl implements BlogpostSearch {

	/**
	 * The resource type.
	 */
	protected static final String RESOURCE_TYPE = "etisalat/components/blogsearch";
	
	private static final String PN_BUSINESS_BLOG_TAG = "businessBlogTag";

	private static final String PN_ARTICLE_DATE = "articleDate";

	private static final String PN_BLOG_SIZE = "blogsize";
	
	private static final String PN_YOUTUBE_URL = "youTubeUrl";
	
	private static final String PN_PLAYICON_TEXT = "playIconText";

	private static final String BUSINESS_BLOG_TEMPLATE = "/conf/etisalat/settings/wcm/templates/etisalat-business-blog-template";
	

	/**
	 * The current request.
	 */
	@Self
	protected SlingHttpServletRequest request;

	/**
	 * The current page.
	 */
	@ScriptVariable(injectionStrategy = InjectionStrategy.OPTIONAL)
	private Page currentPage;

	/**
	 * The current currentRes.
	 */
	@SlingObject
	protected Resource currentRes;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String parentPath;
	
	/**
	 * The ID for this component.
	 */
	private String uniqueId;

	@Override
	public String getId() {
		if (uniqueId == null) {			
			this.uniqueId = getUniqueID(currentRes);
		}
		return uniqueId;
	}
	
	/**
	 * Returns component unique id.
	 * @param res
	 * @return
	 */
	private String getUniqueID(Resource res) {
		int nodeHashCode = res.getName().hashCode();
		if (nodeHashCode < 0) {
			nodeHashCode *= -1;
		}
		return String.valueOf(nodeHashCode);
	}

	/**
	 * Sets the Blog post page details list.
	 * @param resource
	 * @param pageDetailsList
	 */
	private void setBlogPages(Resource resource, List<GenericListPageDetails> pageDetailsList) {
		Page page = resource.adaptTo(Page.class);
		if (null != page && page.getProperties().get(PageConstants.CQ_TEMPLATE, StringUtils.EMPTY)
				.equals(BUSINESS_BLOG_TEMPLATE)) {
			GenericListPageDetails pageDetails = new GenericListPageDetails();
			pageDetails.setThumbnailResource(resource.getChild(PageConstants.JCR_CONTENT_IMAGE));
			pageDetails.setTitle(page.getPageTitle());
			pageDetails.setDescription(page.getDescription());
			pageDetails.setPath(page.getPath());
			pageDetails.setTileSize(page.getProperties().get(PN_BLOG_SIZE, "3"));
			pageDetails.setYouTubeUrl(page.getProperties().get(PN_YOUTUBE_URL, String.class));
			pageDetails.setPlayIconText(page.getProperties().get(PN_PLAYICON_TEXT, String.class));
			setBusinessCategory(page, resource, pageDetails);
			setBlogArticleDate(page, resource, pageDetails);
			
			if(pageDetails.getTileSize().equals("video")) {
				pageDetails.setBlogVideoID(getUniqueID(resource));
			}
			
			pageDetailsList.add(pageDetails);
		}
	}
	
	/**
	 * Sets the blog article date.
	 * @param page
	 * @param resource
	 * @param pageDetails
	 */
	private void setBlogArticleDate(Page page, Resource resource, GenericListPageDetails pageDetails) {
		if (page.getProperties().containsKey(PN_ARTICLE_DATE) &&
				null != page.getProperties().get(PN_ARTICLE_DATE, Calendar.class)) {
			pageDetails.setArticleDate(page.getProperties().get(PN_ARTICLE_DATE, Calendar.class));
		}
	}

	/**
	 * Sets the business category tag title
	 * @param page
	 * @param resource
	 * @param pageDetails
	 */
	private void setBusinessCategory(Page page, Resource resource, GenericListPageDetails pageDetails) {
		final TagManager tagManager = resource.getResourceResolver().adaptTo(TagManager.class);
		String businessCatg = page.getProperties().get(PN_BUSINESS_BLOG_TAG, String.class);
		if (StringUtils.isNotBlank(businessCatg)) {
			final Tag tag = tagManager.resolve(businessCatg);
			if (null != tag) {
				pageDetails.setCategory(tag.getTitle());
			}
		}
	}

	@Override
	public List<GenericListPageDetails> getPageItems() {
		List<GenericListPageDetails> pageDetailsList = new ArrayList<>();
		if (StringUtils.isNotBlank(parentPath)) {
			Resource res = request.getResourceResolver().getResource(parentPath);
			if (null != res && res.hasChildren()) {
				res.listChildren().forEachRemaining(resource -> {
					setBlogPages(resource, pageDetailsList);
				});
			}
		}

		if (!pageDetailsList.isEmpty() && pageDetailsList.size() > 1) {
			pageDetailsList.sort(Comparator
					.comparing(GenericListPageDetails::getArticleDate, Comparator.nullsFirst(Comparator.naturalOrder()))
					.reversed());
		}

		return Collections.unmodifiableList(pageDetailsList);
	}

	@Override
	public String getBusinessCategoryTag() {
		String category = currentPage.getProperties().get(PN_BUSINESS_BLOG_TAG, StringUtils.EMPTY);
		final TagManager tagManager = request.getResourceResolver().adaptTo(TagManager.class);
		if (StringUtils.isNotBlank(category) && null != tagManager) {
			final Tag tag = tagManager.resolve(category);
			if (null != tag) {
				category = tag.getTitle();
			}
		}
		return category;
	}
	
	@Override
	public String getBackToHomeLink() {
		String backToLink = currentPage.getProperties().get("backToBusinessLink",
				currentPage.getAbsoluteParent(3).getPath());

		return CommonUtility.appendHtmlExtensionToPage(backToLink);
	}

}
