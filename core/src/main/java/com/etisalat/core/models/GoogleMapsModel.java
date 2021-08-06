package com.etisalat.core.models;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.etisalat.core.services.GoogleMapsService;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class })

public class GoogleMapsModel {

	private static final Logger log = LoggerFactory.getLogger(GoogleMapsModel.class);

	String url;
	String key;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String mapViewTitle;

	@OSGiService
	GoogleMapsService googleService;

	@PostConstruct
	protected void init() {
		log.info("In GoogleMapsModel init method");

		url = googleService.getGoogleUrl();
		key = googleService.getGoogleKey();

	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

}
