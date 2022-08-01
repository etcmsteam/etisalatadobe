package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.models.impl.ResourceTypeBasedResourcePicker;
import org.apache.sling.models.spi.ImplementationPicker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the TopnavModel
 */
@ExtendWith(AemContextExtension.class)
class TopnavModelTest {

	private final AemContext context = new AemContext();

	private static final String CONTENT_ROOT = "/content";
	private static final String CURRENT_PAGE = "/content/topnavmodel/ae/en/index";

	private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
	protected static final String TOP_NAV = TEST_PAGE_CONTAINER_ROOT + "/topnav";
	protected static final String TOP_NAV1 = TEST_PAGE_CONTAINER_ROOT + "/topnav1";

	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(TopnavModel.class);
		context.load().json("/com/etisalat/core/models/TopnavModelTest.json", CONTENT_ROOT);
		context.registerService(ImplementationPicker.class, new ResourceTypeBasedResourcePicker());
	}

	@Test
	void testTopMenuLanguage() {
		final int expectedSize = 1;
		final String expectedLangTitle = "Arabic";
		final String expetedLangURL = "/content/topnavmodel/ae/ar/index.html";

		context.currentResource(TOP_NAV);

		TopnavModel topNavModel = context.request().adaptTo(TopnavModel.class);
		int actualSize = topNavModel.getLanguageSize();
		LinkModel linkModel = topNavModel.getLocaleList().get(0);
		assertEquals(expectedSize, actualSize);
		assertEquals(expectedLangTitle, linkModel.getTitle());
		assertEquals(expetedLangURL, linkModel.getLinkUrl());
	}
	
	@Test
  void testTopNavIconLinks() {
    final int expectedSize = 4;
    context.currentResource(TOP_NAV1);

    TopnavModel topNavModel = context.request().adaptTo(TopnavModel.class);

    int actual = topNavModel.getTopNavIconsList().size();
    assertEquals(expectedSize, actual);
    assertEquals("#", topNavModel.getTopNavIconsList().get(1).getNavigationLink());
    assertEquals("Accessibility", topNavModel.getTopNavIconsList().get(1).getNavigationTitle());
  }
	
	@Test
  void testTopNavLeftLinks() {
    final int expectedSize = 3;
    context.currentResource(TOP_NAV1);

    TopnavModel topNavModel = context.request().adaptTo(TopnavModel.class);

    int actual = topNavModel.getTopLeftNavList().size();
    assertEquals(expectedSize, actual);
    assertEquals("/content/etisalat/ae/en/smb/index", topNavModel.getTopLeftNavList().get(1).getNavigationLink());
    assertEquals("Business", topNavModel.getTopLeftNavList().get(1).getNavigationTitle());
  }

	@Test
	void testLanguageTitle() {
	  context.currentResource(TOP_NAV);
    TopnavModel topNavModel = context.request().adaptTo(TopnavModel.class);    
    assertEquals("English", topNavModel.getCurrentPageLanguageTitle());
	}
}
