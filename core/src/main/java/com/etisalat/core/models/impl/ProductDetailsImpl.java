package com.etisalat.core.models.impl;

import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.wcm.core.components.models.Carousel;
import com.adobe.cq.wcm.core.components.models.ListItem;
import com.etisalat.core.models.ProductDetails;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
		ProductDetails.class }, resourceType = { ProductDetailsImpl.RESOURCE_TYPE })
public class ProductDetailsImpl implements ProductDetails {
	/**
	 * The resource type.
	 */
	protected static final String RESOURCE_TYPE = "etisalat/components/productdetail";

	@SlingObject
	@Optional
	private Resource res;

	@Self
	@Optional
	private SlingHttpServletRequest request;
	
	@Self
	@Optional
    private Carousel carousel;

	@Override
	public List<ListItem> getItems() {
        return carousel.getItems();
    }

}
