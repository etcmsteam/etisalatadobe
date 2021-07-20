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
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.apache.sling.models.impl.ResourceTypeBasedResourcePicker;
import org.apache.sling.models.spi.ImplementationPicker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the FixedNavigationModel
 */
@ExtendWith(AemContextExtension.class)
class FixedNavigationModelTest {

	private final AemContext context = new AemContext();

	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(FixedNavigationModel.class);
		context.load().json("/com/etisalat/core/models/FixedNavigationTest.json", "/content");
		context.registerService(ImplementationPicker.class, new ResourceTypeBasedResourcePicker());

	}

	@Test
	public void testNavigationLinks() {
		final int expectedSize = 2;
		context.currentResource("/content/fixednavigation");
		FixedNavigationModel fixedNav = context.request().adaptTo(FixedNavigationModel.class);
		int actual = fixedNav.getFixedNav().size();
		assertEquals(expectedSize, actual);
		assertEquals("#personal", fixedNav.getFixedNav().get(1).getNavigationLink());
		assertEquals("Personal", fixedNav.getFixedNav().get(1).getNavigationTitle());
	}

	@Test
	public void testEmptyLinks() {
		context.currentResource("/content/empty");
		FixedNavigationModel fixedNav = context.request().adaptTo(FixedNavigationModel.class);
		assertTrue(fixedNav.getFixedNav().isEmpty());
	}

	@Test
	public void testHtmlExtension() {
		final String expected = "/content/etisalat/ae/en.html";
		context.currentResource("/content/with-extension");
		FixedNavigationModel fixedNav = context.request().adaptTo(FixedNavigationModel.class);
		String actual = fixedNav.getFixedNav().get(1).getNavigationLink();
		assertEquals(expected, actual);
	}

}
