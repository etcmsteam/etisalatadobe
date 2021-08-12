package com.etisalat.core.models.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.etisalat.core.models.ProductDetails;
import com.etisalat.core.models.ProductDetailsItem;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
		ProductDetails.class }, resourceType = { ProductDetailsImpl.RESOURCE_TYPE })
public class ProductDetailsImpl implements ProductDetails {
	private static final Logger LOG = LoggerFactory.getLogger(ProductDetailsImpl.class);
	/**
	 * The resource type.
	 */
	protected static final String RESOURCE_TYPE = "etisalat/components/productdetail";

	private static final String NAVIGATION_ITEMS = "productItems";

	@SlingObject
	@Optional
	private Resource res;

	@Self
	@Optional
	private SlingHttpServletRequest request;

	/**
	 * Returns the product data items list.
	 * 
	 * @param childItem
	 * @return
	 */
	private List<ProductDetailsItem> getProductDetailsItems(String childItem) {
		Resource navItemRes = res.getChild(childItem);
		List<ProductDetailsItem> productItemsList = new ArrayList<>();
		LOG.info("current resource is {}", navItemRes.getPath());
		if (null != navItemRes) {
			navItemRes.listChildren().forEachRemaining(resource -> {
				ProductDetailsItem navModel = resource.adaptTo(ProductDetailsItem.class);

				LOG.info("navModel resource is {}", navModel);
				productItemsList.add(navModel);
			});
		}

		return productItemsList;

	}

	@Override
	public List<ProductDetailsItem> getProductDetailsItems() {
		return Collections.unmodifiableList(getProductDetailsItems(NAVIGATION_ITEMS));
	}

}
