package com.etisalat.core.models.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.models.impl.ResourceTypeBasedResourcePicker;
import org.apache.sling.models.spi.ImplementationPicker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import com.etisalat.core.models.BlogpostSearch;
import com.etisalat.core.models.GenericListPageDetails;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the BlogpostSearch
 */
@ExtendWith({AemContextExtension.class,MockitoExtension.class})
 class BlogpostSearchImplTest {
	
	private final AemContext context = new AemContext();

	private static final String CONTENT_ROOT = "/content";
	private static final String CURRENT_PAGE = "/content/blogpost";

	private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
	protected static final String BLOG_SEARCH_1 = TEST_PAGE_CONTAINER_ROOT + "/blogsearch";
	
	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(BlogpostSearchImpl.class);
		context.load().json("/com/etisalat/core/models/BlogpostSearchImplTest.json", CONTENT_ROOT);
		context.registerService(ImplementationPicker.class, new ResourceTypeBasedResourcePicker());
	}

	@Test
	void testBlogSearchItems() {
		final int expectedSize = 4;
		final String expectedTitle = "Online Learning landscape";
		
		context.currentResource(BLOG_SEARCH_1);

		BlogpostSearch blogPostSearchModel = context.request().adaptTo(BlogpostSearch.class);
		GenericListPageDetails pageDetails = blogPostSearchModel.getPageItems().get(0);
		int actual = blogPostSearchModel.getPageItems().size();	
		String actualTitle = pageDetails.getTitle();
		assertEquals(expectedSize, actual);
		assertEquals(expectedTitle, actualTitle);
		
	}
	
	@Test
	void testBlogComponentID() {
		final String expected = "775607242";
		context.currentResource(BLOG_SEARCH_1);

		BlogpostSearch blogPostSearchModel = context.request().adaptTo(BlogpostSearch.class);

		String actual = blogPostSearchModel.getId();
		assertEquals(expected, actual);
	}
	
	@Test
	void testCategory() {
		final String expected = "etisalat:business/smb/category/business-advice-ideas";
		context.currentResource(BLOG_SEARCH_1);
		BlogpostSearch blogPostSearchModel = context.request().adaptTo(BlogpostSearch.class);

		String actual = blogPostSearchModel.getBusinessCategoryTag();
		assertEquals(expected, actual);
	}

}
