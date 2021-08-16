package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.apache.sling.models.impl.ResourceTypeBasedResourcePicker;
import org.apache.sling.models.spi.ImplementationPicker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the TilesModel
 */

@ExtendWith(AemContextExtension.class)
class TilesModelTest {

	private static final String  TEST_PAGE_URL = "/content/etisalat/language-master/en/carrier-and-wholesale.html";
	private final AemContext context = new AemContext();

	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(TilesModelItem.class);
		context.load().json("/com/etisalat/core/models/TilesModel.json", "/content");
		context.registerService(ImplementationPicker.class, new ResourceTypeBasedResourcePicker());
	}

	@Test
	void testTilesLinks() {
		final int expectedSize = 1;
		context.currentResource("/content/tile");
		TilesModelItem tileList = context.request().adaptTo(TilesModelItem.class);
		int actual = tileList.getTileList().size();
		assertEquals(expectedSize, actual);
		assertEquals("/content/dam/etisalat/13.3.jpg", tileList.getTileList().get(0).getFileReference());
		assertEquals("Sample Title", tileList.getTitle());
		assertEquals("Easy Insurance", tileList.getTileList().get(0).getTiletitle());
		assertEquals("Health Insurance", tileList.getTileList().get(0).getText());
		assertEquals("Learn More", tileList.getTileList().get(0).getCtatext());
		assertEquals(TEST_PAGE_URL,tileList.getTileList().get(0).getLink());
	}
	
	@Test
	void testEmptyLinks() {
		context.currentResource("/content/empty");
		TilesModelItem tileList = context.request().adaptTo(TilesModelItem.class);
		assertTrue(tileList.getTileList().isEmpty());
	}

	@Test
	void testHtmlExtension() {
		final String expected = "/content/etisalat/language-master/en/carrier-and-wholesale/index.html";
		context.currentResource("/content/with-extension");
		TilesModelItem tileList = context.request().adaptTo(TilesModelItem.class);
		String actual = tileList.getTileList().get(0).getLink();
		assertEquals(expected, actual);
	}

}
