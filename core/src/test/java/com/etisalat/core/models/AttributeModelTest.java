package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
class AttributeModelTest {

	private final AemContext context = new AemContext();

	private AttributeModel model;

	@BeforeEach
	void setUp() throws Exception {
		context.addModelsForClasses(ElifeAddonsTileModel.class);
		context.load().json("/com/etisalat/core/models/AttributeModelTest.json", "/content/etisalat");
	}

	@Test
	void testGetAttributeDataMap() {
		context.currentResource("/content/etisalat/en/jcr:content/root/tilecontainer/tile");
		model = context.request().adaptTo(AttributeModel.class);
		Map<String, String> expectedMapData = new HashMap<>();
		expectedMapData.put("data-insurance-type", "10");
		expectedMapData.put("data-channel", "b2cPortal");

		assertEquals(expectedMapData, model.getAttributeDataMap());
	}

	@Test
	void testGetAttributeDataMapEmpty() {
		context.currentResource("/content/etisalat/en/jcr:content/root/tilecontainer/tile1");
		model = context.request().adaptTo(AttributeModel.class);

		assertEquals(Collections.emptyMap(), model.getAttributeDataMap());
	}
}
