package com.etisalat.core.services.impl;

import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.oak.commons.PropertiesUtil;
import org.osgi.service.cm.ConfigurationAdmin;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;

import com.etisalat.core.services.GoogleMapsService;
import com.etisalat.core.services.GoogleMapsConfiguration;

@Component(service = GoogleMapsService.class, immediate = true)
@Designate(ocd = GoogleMapsConfiguration.class)

public class GoogleMapsServiceImpl implements GoogleMapsService {

	@Reference
	private ConfigurationAdmin configAdmin;

	private String url;
	private String key;
	private String contactMap;
	
	private String captchaV2;
	private String captchaV3;
	private String captchaInvisible;

	private static final String NO_CONFIG_FOUND = "No config found";


	@Activate
	@Modified
	protected void activate(final GoogleMapsConfiguration config) {
		this.url = PropertiesUtil.toString(config.getGoogleUrl(), NO_CONFIG_FOUND);
		this.key = PropertiesUtil.toString(config.getGoogleKey(), NO_CONFIG_FOUND);
		this.contactMap = PropertiesUtil.toString(config.getGoogleContactUsUrl(), NO_CONFIG_FOUND);
		this.captchaV2 = PropertiesUtil.toString(config.getGoogleCaptchaV2(), StringUtils.EMPTY);
		this.captchaV3 = PropertiesUtil.toString(config.getGoogleCaptchaV3(), StringUtils.EMPTY);
		this.captchaInvisible = PropertiesUtil.toString(config.getGoogleCaptchaInvisible(), StringUtils.EMPTY);
	}
	

	@Override
	public String getGoogleUrl() {
		return this.url;
	}

	@Override
	public String getGoogleKey() {
		return this.key;
	}
	
	@Override
	public String getGoogleContactUsUrl() {
		return this.contactMap;
	}

	@Override
	public String getCaptchaV2SiteKey() {		
		return captchaV2;
	}

	@Override
	public String getCaptchaV3SiteKey() {		
		return captchaV3;
	}

	@Override
	public String getCaptchaInvisibleSiteKey() {		
		return captchaInvisible;
	}

}
