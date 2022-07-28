package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
class ImageWithIconTabModelTest {

	private final AemContext context = new AemContext();

	private ImageWithIconTabModel model;

	@BeforeEach
	void setUp() throws Exception {
		context.addModelsForClasses(ImageWithIconTabModel.class);
		context.load().json("/com/etisalat/core/models/ImageWithIconTabModelTest.json", "/content/eandenterprise");
	}

	@Test
	void testGetContainerList() {
		context.currentResource("/content/eandenterprise/en/jcr:content/root/container/tabs");
		model = context.request().adaptTo(ImageWithIconTabModel.class);
		assertEquals(3, model.getContainerList().size());
	}

	@Test
	void testGetTabImageViewPortItems() {
		testGetContainerList();
		model = context.request().adaptTo(ImageWithIconTabModel.class);
		assertEquals(3, model.getTabImageViewPortItems().size());
	}

	@Test
	void testGetTeaserEtisalatItems() {
		testGetContainerList();
		model = context.request().adaptTo(ImageWithIconTabModel.class);
		assertEquals(3, model.getTeaserEnterpriseItems().size());
	}

}
