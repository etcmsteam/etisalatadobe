package com.etisalat.core.models.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.etisalat.core.models.IconCardList;
import com.etisalat.core.models.IconCardListItem;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the IconcardListImpl Class
 */
@ExtendWith(AemContextExtension.class)
class IconCardListImplTest {

	private final AemContext context = new AemContext();

	private static final String CONTENT_ROOT = "/content";
	private static final String CURRENT_PAGE = "/content/iconcardlist";
	private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
	private static final String CARD_DATA = TEST_PAGE_CONTAINER_ROOT + "/iconcardlist";

	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(ProductDetailsImpl.class);
		context.load().json("/com/etisalat/core/models/IconCardListTest.json", CONTENT_ROOT);		
	}

	@Test
	void testGetIConCardListItems() {
		Resource navItemRes = context.currentResource(CARD_DATA);
		context.currentResource(CARD_DATA);
		String expectedCardTitle = "Card Title 1";
		int expectedCardSize = 2;
		IconCardList iconCardList = context.request().adaptTo(IconCardList.class);
		IconCardListItem iconCardListItem = iconCardList.getIconCardListItems().get(0);
		String actualCardTitle = iconCardListItem.getCardTitle();
		int actualCardSize = iconCardList.getIconCardSize();
		assertEquals(expectedCardTitle, actualCardTitle);
		assertEquals(expectedCardSize, actualCardSize);

	}		

}
