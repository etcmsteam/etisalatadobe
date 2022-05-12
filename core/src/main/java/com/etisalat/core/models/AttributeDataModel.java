package com.etisalat.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

/**
 * The Class AttributeDataModel holds the data authored in the multifield.
 */
@Model(adaptables = { Resource.class,
		SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class AttributeDataModel {

	/** The attribute key. */
	@ValueMapValue
	private String attributeKey;

	/** The attribute value. */
	@ValueMapValue
	private String attributeValue;

	/**
	 * Gets the attribute key.
	 *
	 * @return the attribute key
	 */
	public String getAttributeKey() {
		return attributeKey;
	}

	/**
	 * Gets the attribute value.
	 *
	 * @return the attribute value
	 */
	public String getAttributeValue() {
		return attributeValue;
	}
}
