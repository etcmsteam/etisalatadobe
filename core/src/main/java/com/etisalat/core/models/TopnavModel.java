package com.etisalat.core.models;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class })
public class TopnavModel {

	private static final Logger LOG = LoggerFactory.getLogger(TopnavModel.class);

	@SlingObject
	@Optional
	protected Resource currentResource;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String navigationRoot;

	@ScriptVariable
	private ResourceResolver resolver;

	@ScriptVariable
	protected Page currentPage;

	@SlingObject
	private SlingHttpServletRequest request;

	ArrayList<String> localeAdding = new ArrayList<>();

	public static final String slash = "/";

	@PostConstruct
	protected void init() {

		Resource res = request.getResourceResolver().getResource(navigationRoot);
		LOG.info("resource{}", res.getPath());

		Page page = res.adaptTo(Page.class);
		if (page != null) {
			Iterator<Page> chilPage = page.listChildren();

			while (chilPage.hasNext()) {
				Page childPages = chilPage.next();
				Iterator<Page> grandChild = childPages.listChildren();
				while (grandChild.hasNext()) {
					Page grandChildPages = grandChild.next();
					extracted( grandChildPages.getLanguage().toString());
				}
			}
		}
	}

	private void extracted(String languageCode) {
		Resource currentPageRes = currentPage.adaptTo(Resource.class);
		Page currPage = currentPageRes.adaptTo(Page.class);
		String currrentPath = currPage.getPath();
		String newPagePath = currrentPath.replace(slash + currPage.getLanguage().toString() + slash,
				slash + languageCode + slash);
		LOG.info("new page path{}", newPagePath);

		Resource childRes = resolver.getResource(newPagePath);
		LOG.info("childRes {}", childRes);
		if (childRes != null) {
			localeAdding.add(newPagePath);
		}
	}

	public String getNavigationRoot() {
		return navigationRoot;
	}

	public void setNavigationRoot(String navigationRoot) {
		this.navigationRoot = navigationRoot;
	}
	
	

	public List<String> getLocaleAdding() {
		return Collections.unmodifiableList(localeAdding);
	}

	
	
	
	
	


}
