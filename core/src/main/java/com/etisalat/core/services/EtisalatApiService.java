package com.etisalat.core.services;


/**
 * The Interface EtisalatApiService.
 */
public interface EtisalatApiService {

    /**
     * Returns a send notification service url.
     *
     * @return the contact us api url
     */
    String getContactUsApiUrl();
    
    /**
     * Returns a Proxy Api url.
     *
     * @return the proxy api url
     */
    String getProxyApiUrl();

    /**
     * Gets the time out.
     *
     * @return the time out
     */
    int getTimeOut();
    
    /**
     * Gets the api hostname.
     *
     * @return the api hostname
     */
    String getApiHostname();
    
    
    /**
     * Gets the auto suggest endpoint url.
     *
     * @return the auto suggest endpoint url
     */
    String getAutoSuggestEndpointUrl();
    
    /**
     * Gets the search endpoint url.
     *
     * @return the search endpoint url
     */
    String getSearchEndpointUrl();

    /**
     * Gets the Google Analytics API Key.
     *
     * @return the Google Analytics API Key
     */
    String getGaApiKey();


}
