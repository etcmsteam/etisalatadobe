package com.etisalat.core.models;

import org.apache.commons.lang3.StringUtils;

import org.apache.sling.api.resource.Resource;

import org.junit.jupiter.api.BeforeEach;

import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.extension.ExtendWith;

import com.day.cq.wcm.api.Page;

import io.wcm.testing.mock.aem.junit5.AemContext;

import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import junitx.framework.Assert;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(AemContextExtension.class)

class FixedNavigationMultifieldModelTest {

	private FixedNavigtaionMultifieldModel fixedNavigationMultifieldModel;

	private Page page;

	private Resource resource;

	@BeforeEach

	public void setup(AemContext context) throws Exception {
		page = context.create().page("/content/testPage");
		resource = context.create().resource(page, "fixedNavigationMultifieldModel", "sling:resourceType",
				"/etisalat/components/fixednavigation");
		fixedNavigationMultifieldModel = resource.adaptTo(FixedNavigtaionMultifieldModel.class);
	}
	@Test
	public void testGetNavigationTitle() {
		Assert.assertNull(fixedNavigationMultifieldModel.getNavigationTitle());
	}

	@Test
	public void testGetNavigationLnk() {
		Assert.assertNull(fixedNavigationMultifieldModel.getNavigationLink());
	}

}
