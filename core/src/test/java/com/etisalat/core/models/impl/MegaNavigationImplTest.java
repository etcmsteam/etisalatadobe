package com.etisalat.core.models.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.apache.sling.models.impl.ResourceTypeBasedResourcePicker;
import org.apache.sling.models.spi.ImplementationPicker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.etisalat.core.models.MegaNavigation;
import com.etisalat.core.models.MegaNavigationItem;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the MegaNavigation
 */
@ExtendWith(AemContextExtension.class)
class MegaNavigationImplTest {

	private final AemContext context = new AemContext();

	private static final String CONTENT_ROOT = "/content";
	private static final String CURRENT_PAGE = "/content/meganavigation";

	private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
	protected static final String MEGA_NAV_1 = TEST_PAGE_CONTAINER_ROOT + "/megaNavigationList";
	protected static final String MEGA_NAV_2 = TEST_PAGE_CONTAINER_ROOT + "/megaNavigationSubList";
	protected static final String MEGA_NAV_3 = TEST_PAGE_CONTAINER_ROOT + "/utilityNavigationList";
	protected static final String MEGA_NAV_4 = TEST_PAGE_CONTAINER_ROOT + "/empty";
	protected static final String MEGA_NAV_5 = TEST_PAGE_CONTAINER_ROOT + "/topnav";
	

	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(MegaNavigationImpl.class);
		context.load().json("/com/etisalat/core/models/MegaNavigationImplTest.json", CONTENT_ROOT);
		context.registerService(ImplementationPicker.class, new ResourceTypeBasedResourcePicker());
	}

	@Test
	void testMegaNavMenuItems() {
		final int expectedSize = 2;
		final String expectedMenuLabel = "MainMenu1";
		final String expectedLogo = "/content/dam/ewallet/logo.jpeg";
		context.currentResource(MEGA_NAV_1);

		MegaNavigation megaNavigationModel = context.request().adaptTo(MegaNavigation.class);
		MegaNavigationItem navigationItem = megaNavigationModel.getMegaNavigationItems().get(0);
		String actualMenuLabel = navigationItem.getNavigationLabel();

		int actual = megaNavigationModel.getMegaNavigationItems().size();
		String actualImage = megaNavigationModel.getImagePath();
		assertEquals(expectedSize, actual);
		assertEquals(expectedMenuLabel, actualMenuLabel);
		assertEquals(expectedLogo, actualImage);
	}

	@Test
	void testMegaNavSubMenuItems() {
		final String expectedMenuLabel = "Submenulabel1";
		context.currentResource(MEGA_NAV_2);

		MegaNavigation megaNavigationModel = context.request().adaptTo(MegaNavigation.class);
		MegaNavigationItem navigationItem = megaNavigationModel.getMegaNavigationItems().get(0);
		String actualMenuLabel = navigationItem.getSubNavigationList().get(0).getSubNavLabel();

		assertEquals(expectedMenuLabel, actualMenuLabel);
	}

	@Test
	void testUtilityNavItems() {
		final String expectedLinkSubLabel = "SubLinkLabel1";
		final String expectedLinkMenuLabel = "LinkMenu1";
		context.currentResource(MEGA_NAV_3);

		MegaNavigation megaNavigationModel = context.request().adaptTo(MegaNavigation.class);
		MegaNavigationItem utilityItem = megaNavigationModel.getUtilityNavItems().get(0);
		String actualLinkLabel = utilityItem.getNavigationLabel();
		String actualSubLinkLabel = utilityItem.getSubNavigationList().get(0).getSubNavLabel();

		assertEquals(expectedLinkSubLabel, actualSubLinkLabel);
		assertEquals(expectedLinkMenuLabel, actualLinkLabel);
	}

	@Test
	void testEmptyNavList() {
		context.currentResource(MEGA_NAV_4);
		MegaNavigation genericListModel = context.request().adaptTo(MegaNavigation.class);
		assertTrue(genericListModel.getMegaNavigationItems().isEmpty());
		assertTrue(genericListModel.getUtilityNavItems().isEmpty());
	}
	
	@Test
	 void testNavLinkHtmlExtension() {
		final String expected = "/content/etisalat/ae/en.html";
		context.currentResource(MEGA_NAV_1);
		MegaNavigation megaNavigationModel = context.request().adaptTo(MegaNavigation.class);
		MegaNavigationItem navigationItem = megaNavigationModel.getMegaNavigationItems().get(0);
		String actual = navigationItem.getNavigationLinkTo();
		assertEquals(expected, actual);
	}
	
	@Test
	 void testNavigationLogoLink() {
		final String expectedLink = "/content/etisalat/ae/en/index.html";
		context.currentResource(MEGA_NAV_1);
		MegaNavigation megaNavigationModel = context.request().adaptTo(MegaNavigation.class);
		
		String actual = megaNavigationModel.getLogoMenuLink();
		assertEquals(expectedLink, actual);
	}
	
	@Test
	void testTopNavigationPath() {
		final String expectedPath = MEGA_NAV_5;
		context.currentResource(MEGA_NAV_1);
		MegaNavigation megaNavigationModel = context.request().adaptTo(MegaNavigation.class);
		
		String actual = megaNavigationModel.getTopNavigationResource().getPath();
		assertEquals(expectedPath, actual);
	}
	
	
}
