package com.etisalat.core.models;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

/**
 * The Class AttributeModel is used to fetch the content authored in multifield and return a map..
 */
@Model(adaptables = { Resource.class,
		SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class AttributeModel {

	/** The attribute data list. */
	@ChildResource(name = "attributeData")
	private List<AttributeDataModel> attributeDataList;

	/**
	 * Gets the attribute data map by getting the attribute key and value from the list.
	 *
	 * @return the attribute data map
	 */
	public Map<String, String> getAttributeDataMap() {
		Map<String, String> attributeMap = new HashMap<>();
		if (CollectionUtils.isNotEmpty(attributeDataList)) {
			for (AttributeDataModel attributeData : attributeDataList) {
				attributeMap.put(attributeData.getAttributeKey(), attributeData.getAttributeValue());
			}
			return attributeMap;
		}
		return Collections.emptyMap();
	}

}
