/*
 *  Copyright 2015 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.apache.sling.models.impl.ResourceTypeBasedResourcePicker;
import org.apache.sling.models.spi.ImplementationPicker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the OfferListModel
 */
@ExtendWith(AemContextExtension.class)
class OfferListModelTest {

	private final AemContext context = new AemContext();

	private static final String CONTENT_ROOT = "/content";
	private static final String CURRENT_PAGE = "/content/offer";

	private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
	protected static final String OFFER_1 = TEST_PAGE_CONTAINER_ROOT + "/singleofferlist";
	protected static final String OFFER_2 = TEST_PAGE_CONTAINER_ROOT + "/multipleofferlist";
	protected static final String OFFER_3 = TEST_PAGE_CONTAINER_ROOT + "/empty";
	protected static final String OFFER_4 = TEST_PAGE_CONTAINER_ROOT + "/offerinvalidpage";

	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(OfferListModel.class);
		context.load().json("/com/etisalat/core/models/OfferListModelTest.json", CONTENT_ROOT);
		context.registerService(ImplementationPicker.class, new ResourceTypeBasedResourcePicker());
	}

	@Test
	void testOfferListWithSingleChildPage() {
		final int expectedSize = 1;
		context.currentResource(OFFER_1);

		OfferListModel offerListModel = context.request().adaptTo(OfferListModel.class);
		int actual = offerListModel.getOfferListObj().size();
		assertEquals(expectedSize, actual);
	}

	@Test
	void testOfferListWithMultipleChildPages() {
		final int expectedSize = 3;
		context.currentResource(OFFER_2);

		OfferListModel offerListModel = context.request().adaptTo(OfferListModel.class);
		int actual = offerListModel.getOfferListObj().size();
		assertEquals(expectedSize, actual);
	}

	@Test
	void testEmptyOffers() {
		context.currentResource(OFFER_3);
		OfferListModel offerListModel = context.request().adaptTo(OfferListModel.class);
		assertNull(offerListModel);
	}
	
	@Test
	void testInvalidOfferRootPath() {
		context.currentResource(OFFER_4);
		OfferListModel offerListModel = context.request().adaptTo(OfferListModel.class);
		assertTrue(offerListModel.getOfferListObj().isEmpty());
	}

	@Test
	void testOfferDetails() {
		final String imageExpected = "/content/dam/etisalat/sample.png";
		final String offTimeExpected = "2021-07-22";
		final String titleExpected = "Page 1_1";
		final String descExpected = "Page 1_1 description";
		context.currentResource(OFFER_1);

		OfferListModel offerListModel = context.request().adaptTo(OfferListModel.class);
		OfferListPageDetails offerPageDetails = offerListModel.getOfferListObj().get(0);
		String actualImage = offerPageDetails.getThumbnail();
		Calendar offDate = offerPageDetails.getOffTime();
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
		String actualOffDate = format1.format(offDate.getTime());
		String actualTitle = offerPageDetails.getTitle();
		String actualDescription = offerPageDetails.getDescription();

		assertEquals(imageExpected, actualImage);
		assertEquals(offTimeExpected, actualOffDate);
		assertEquals(titleExpected, actualTitle);
		assertEquals(descExpected, actualDescription);
	}

}
