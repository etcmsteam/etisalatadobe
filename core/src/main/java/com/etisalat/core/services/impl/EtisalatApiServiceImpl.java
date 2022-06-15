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
	
	/** The auto search url. */
	private String autoSearchUrl;
	
	/** The search endpoint url. */
	private String searchEndpointUrl;

	/** The search endpoint url. */
	private String gaApiKey;

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
		this.autoSearchUrl = PropertiesUtil.toString(config.getAutoSuggestEndpointUrl(), AEConstants.NO_CONFIG_FOUND);
    	this.searchEndpointUrl = PropertiesUtil.toString(config.getSearchEndpointUrl(), AEConstants.NO_CONFIG_FOUND);
		this.gaApiKey = PropertiesUtil.toString(config.getGaApiKey(), AEConstants.NO_CONFIG_FOUND);
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

  /**
   * Gets the auto suggest endpoint url.
   *
   * @return the auto suggest endpoint url
   */
  @Override
  public String getAutoSuggestEndpointUrl() {   
    return this.autoSearchUrl;
  }

  /**
   * Gets the search endpoint url.
   *
   * @return the search endpoint url
   */
  @Override
  public String getSearchEndpointUrl() {    
    return this.searchEndpointUrl;
  }

  /**
   * Gets the Google Analytics API Key.
   *
   * @return the Google Analytics API Key
   */
  @Override
  public String getGaApiKey() {
	  return this.gaApiKey;
  }

}
