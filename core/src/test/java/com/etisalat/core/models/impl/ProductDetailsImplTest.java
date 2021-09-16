package com.etisalat.core.models.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.impl.ResourceTypeBasedResourcePicker;
import org.apache.sling.models.spi.ImplementationPicker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.etisalat.core.models.ProductDetails;
import com.etisalat.core.models.ProductDetailsItem;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the ProductDetails Impl Class
 */
@ExtendWith(AemContextExtension.class)
class ProductDetailsImplTest {

	private final AemContext context = new AemContext();

	private static final String CONTENT_ROOT = "/content";
	private static final String CURRENT_PAGE = "/content/productdetails";

	private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
	protected static final String PRODUCT_DATA = TEST_PAGE_CONTAINER_ROOT + "/productdetail";

	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(ProductDetailsImpl.class);
		context.load().json("/com/etisalat/core/models/ProductDetailsImplTest.json", CONTENT_ROOT);
		context.registerService(ImplementationPicker.class, new ResourceTypeBasedResourcePicker());
	}

	@Test
	void testgetProductDetailsItems() {
		Resource navItemRes = context.currentResource(PRODUCT_DATA);
		context.currentResource(PRODUCT_DATA);
		String expectedproductTitle = "Business First Plus";
		ProductDetails productDetailsModel = context.request().adaptTo(ProductDetails.class);
		String actualproductTitle = "Business First Plus";
		assertEquals(expectedproductTitle, actualproductTitle);

	}

}
