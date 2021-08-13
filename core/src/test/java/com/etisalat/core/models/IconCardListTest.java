package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the IconCardListItem Sling modal Class
 */
@ExtendWith(AemContextExtension.class)
class IconCardListTest {

	private final AemContext context = new AemContext();

	private static final String CONTENT_ROOT = "/content";
	private static final String CURRENT_PAGE = "/content/iconcardlist";

	private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
	protected static final String CARD_DATA = TEST_PAGE_CONTAINER_ROOT + "/iconcardlist/iconCardList/item0";

	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(IconCardListItem.class);
		context.load().json("/com/etisalat/core/models/IconcardListTest.json", CONTENT_ROOT);
	}

	@Test
	void testIconCardItem() {
		final String expectedCardTitle = "Card Title 1";
		final String expectedCardLink = "/content/etisalat/ae/en/carrier-and-wholesale/help";
		final String expectedCardIcon = "prepaid";
		Resource resource = context.resourceResolver().getResource(CARD_DATA);
		IconCardListItem item = resource.adaptTo(IconCardListItem.class);		
		assertEquals(expectedCardTitle, item.cardTitle());
		assertEquals(expectedCardLink, item.cardLink());
		assertEquals(expectedCardIcon, item.cardIcon());
	}

}
