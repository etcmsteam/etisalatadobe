package com.etisalat.core.services.impl;

import com.etisalat.core.constants.AEConstants;
import org.apache.jackrabbit.oak.commons.PropertiesUtil;
import org.osgi.service.cm.ConfigurationAdmin;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;

import com.etisalat.core.services.EtisalatApiConfiguration;
import com.etisalat.core.services.EtisalatApiService;

/**
 * The Class EtisalatApiServiceImpl.
 */
@Component(service = EtisalatApiService.class, immediate = true)
@Designate(ocd = EtisalatApiConfiguration.class)
public class EtisalatApiServiceImpl implements EtisalatApiService {

	/** The config admin. */
	@Reference
	private ConfigurationAdmin configAdmin;
	
	/** The contact us api url. */
	private String contactUsApiUrl;
	
	/** The proxy api url. */
	private String proxyApiUrl;
	
	/** The time out. */
	private int timeOut;
	
	/** The api hostname. */
	private String apiHostname;

	/**
	 * Activate.
	 *
	 * @param config the config
	 */
	@Activate
	@Modified
	protected void activate(final EtisalatApiConfiguration config) {
		this.contactUsApiUrl = PropertiesUtil.toString(config.getContactUsApiUrl(), AEConstants.NO_CONFIG_FOUND);
		this.proxyApiUrl = PropertiesUtil.toString(config.getProxyApiUrl(), AEConstants.NO_CONFIG_FOUND);
		this.timeOut = PropertiesUtil.toInteger(config.getSetTimeout(), 6000);
		this.apiHostname = PropertiesUtil.toString(config.getApiHostname(), AEConstants.NO_CONFIG_FOUND);
	}
	
	/**
	 * Gets the contact us api url.
	 *
	 * @return the contact us api url
	 */
	@Override
	public String getContactUsApiUrl() {
		return this.contactUsApiUrl;
	}
	
	/**
	 * Gets the proxy api url.
	 *
	 * @return the proxy api url
	 */
	@Override
	public String getProxyApiUrl() {
		return this.proxyApiUrl;
	}
	
	/**
	 * Gets the time out.
	 *
	 * @return the time out
	 */
	@Override
	public int getTimeOut() {
		return this.timeOut;
	}
	
	/**
	 * Gets the api hostname.
	 *
	 * @return the api hostname
	 */
	@Override
	public String getApiHostname() {
	  return this.apiHostname;
	}

}
