package com.etisalat.core.models.impl;

import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import java.util.Comparator;
import java.util.HashMap;

import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.Page;
import com.etisalat.core.constants.PageConstants;
import com.etisalat.core.models.ArticleSearch;
import com.etisalat.core.models.GenericListPageDetails;
import com.etisalat.core.util.CommonUtility;
import com.day.cq.wcm.api.NameConstants;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
		ArticleSearch.class }, resourceType = { ArticleSearchImpl.RESOURCE_TYPE })
public class ArticleSearchImpl implements ArticleSearch {

	/**
	 * The resource type.
	 */
	protected static final String RESOURCE_TYPE = "etisalat/components/articlelist";
	
	private static final String PN_BUSINESS_BLOG_TAG = "businessBlogTag";

	private static final String PN_ARTICLE_DATE = "articleDate";

	private static final String PN_BLOG_SIZE = "blogsize";
	
	private static final String PN_YOUTUBE_URL = "youTubeUrl";
	
	private static final String PN_PLAYICON_TEXT = "playIconText";
	
	private static final String PN_BLOGPOST = "blogpost";
	
	private static final String PN_NEWSROOM = "newsroom";
	
	private static final String PN_ARTICLE_TYPE = "articleType";
	
	private static final String IMAGE = "image";
	
	private static final String  PN_BACK_TO_HOMELINK = "backToBusinessLink";

	private static final String BUSINESS_BLOG_TEMPLATE = "/conf/etisalat/settings/wcm/templates/etisalat-article-page-template";
	
	private static final String PARENT_PAGE = "parentPage";
	

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

	@SlingObject
	private ResourceResolver resourceResolver;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String parentPath;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String articleListFrom;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String[] pages;
	
	private Map<String, Long> categoryMap;

	
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
	 * Sets the article page details list.
	 * @param res
	 * @param pageDetailsList
	 * @param articlePageType
	 */
	private void setArticlePages(Resource res, List<GenericListPageDetails> pageDetailsList, String articlePageType) {
		Page page = res.adaptTo(Page.class);
		if (null != page && page.getProperties().get(NameConstants.PN_TEMPLATE, StringUtils.EMPTY)
				.equals(BUSINESS_BLOG_TEMPLATE)) {
			setChildPageDetails(res, page, pageDetailsList, articlePageType);
		}

		if (null != page && res.hasChildren()) {
			res.listChildren().forEachRemaining(resource -> setArticlePages(resource, pageDetailsList, articlePageType));
		}
	}
	
	/**
	 * Sets the article child page details
	 * @param res
	 * @param page
	 * @param pageDetailsList
	 * @param articlePageType
	 */
	private void setChildPageDetails(Resource res, Page page, List<GenericListPageDetails> pageDetailsList, String articlePageType) {
		if(!page.isHideInNav() && page.getProperties().get(PN_ARTICLE_TYPE, StringUtils.EMPTY)
				.equals(articlePageType)) {
			GenericListPageDetails pageDetails = new GenericListPageDetails();
			pageDetails.setThumbnailResource(res.getChild(PageConstants.JCR_CONTENT_IMAGE));
			pageDetails.setTitle(page.getPageTitle());
			pageDetails.setDescription(page.getDescription());
			pageDetails.setPath(CommonUtility.appendHtmlExtensionToPage(resourceResolver, page.getPath()));
			pageDetails.setTileSize(page.getProperties().get(PN_BLOG_SIZE, "3"));
			pageDetails.setYouTubeUrl(page.getProperties().get(PN_YOUTUBE_URL, String.class));
			pageDetails.setPlayIconText(page.getProperties().get(PN_PLAYICON_TEXT, String.class));
			setBusinessCategory(page, res, pageDetails);
			setBlogArticleDate(page, pageDetails);
			setBlogTileVideoID(res, pageDetails);

			pageDetailsList.add(pageDetails);
		}		
	}
	
	
	/**
	 * Sets Blog tile video id.
	 * @param res
	 * @param pageDetails
	 */
	private void setBlogTileVideoID(Resource res,GenericListPageDetails pageDetails) {
		if (pageDetails.getTileSize().equals("video")) {
			pageDetails.setBlogVideoID(getUniqueID(res));
		}
	}
	
	/**
	 * Sets the blog article date.
	 * @param page
	 * @param resource
	 * @param pageDetails
	 */
	private void setBlogArticleDate(Page page, GenericListPageDetails pageDetails) {
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
		String businessCatg = page.getProperties().get(PN_BUSINESS_BLOG_TAG, StringUtils.EMPTY);
		if (StringUtils.isNotBlank(businessCatg)) {
			final Tag tag = tagManager.resolve(businessCatg);
			if (null != tag) {
				pageDetails.setCategory(tag.getTitle());
			}
		}
	}

	/**
	 * Sort the article pages by date descending order.
	 * 
	 * @param pageDetailsList
	 */
	private void sortArticlePages(List<GenericListPageDetails> pageDetailsList) {
		if (!pageDetailsList.isEmpty() && pageDetailsList.size() > 1) {
			pageDetailsList.sort(Comparator
					.comparing(GenericListPageDetails::getArticleDate, Comparator.nullsFirst(Comparator.naturalOrder()))
					.reversed());
		}
	}
	
	/**
	 * Returns the article page list.
	 * 
	 * @param articlePageType
	 * @return
	 */
	private List<GenericListPageDetails> getItems(String articlePageType) {
		List<GenericListPageDetails> pageDetailsList = new LinkedList<>();
		if (StringUtils.isNotBlank(articleListFrom)) {
			if (articleListFrom.equals(PARENT_PAGE)) {
				getRootPageItems(pageDetailsList, articlePageType);
			} else {
				getStaticPageItems(pageDetailsList, articlePageType);
			}
		}

		sortArticlePages(pageDetailsList);
		return pageDetailsList;
	}
	
	/**
	 * Returns root page child article details list.
	 * 
	 * @param pageDetailsList
	 * @param articlePageType
	 */
	private void getRootPageItems(List<GenericListPageDetails> pageDetailsList, String articlePageType) {
		if (StringUtils.isNotBlank(parentPath)) {
			Resource res = request.getResourceResolver().getResource(parentPath);
			if (null != res && res.hasChildren()) {
				res.listChildren()
						.forEachRemaining(resource -> setArticlePages(resource, pageDetailsList, articlePageType));
			}
		}
	}
	
	/**
	 * Returns static page article list.
	 * 
	 * @param pageDetailsList
	 * @param articlePageType
	 */
	private void getStaticPageItems(List<GenericListPageDetails> pageDetailsList, String articlePageType) {
		if (null != pages && pages.length > 0) {
			Arrays.asList(pages).forEach(path -> {
				Resource saticPageResource = resourceResolver.getResource(path);
				if (null != saticPageResource && resourceResolver.resolve(path).isResourceType(NameConstants.NT_PAGE)) {
					setArticlePages(saticPageResource, pageDetailsList, articlePageType);
				}
			});
		}
	}
	
	@Override
	public List<GenericListPageDetails> getBlogPageItems() {
		return Collections.unmodifiableList(getItems(PN_BLOGPOST));
	}
	
	@Override
	public List<GenericListPageDetails> getNewsPageItems() {
		List<GenericListPageDetails> newsPageList = getItems(PN_NEWSROOM);
		categoryMap = new HashMap<>();
		if (!newsPageList.isEmpty()) {
			categoryMap = newsPageList.stream().filter(p -> StringUtils.isNotBlank(p.getCategory()))
					.collect(Collectors.groupingBy(GenericListPageDetails::getCategory, Collectors.counting()));
		}

		return Collections.unmodifiableList(newsPageList);
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
		String backToLink = currentPage.getProperties().get(PN_BACK_TO_HOMELINK,
				currentPage.getAbsoluteParent(3).getPath());

		return CommonUtility.appendHtmlExtensionToPage(resourceResolver,backToLink);
	}
	
	@Override
	public Map<String, Long> getSearchCategories() {
		return Collections.unmodifiableMap(categoryMap);
	}
	
	@Override
	public Resource getThumbnailPageResource() {
		Resource imageResource = currentRes.getChild(IMAGE);
		if (null != imageResource) {
			return imageResource;
		} else {
			return currentRes;
		}
	}

}
