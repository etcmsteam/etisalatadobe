package com.etisalat.core.services;

public interface GoogleMapsService {

	/**
	 * Returns a google map url.
	 * @return
	 */
	public String getGoogleUrl();

	/**
	 * Returns a google site map key.
	 * @return
	 */
	public String getGoogleKey();

	/**
	 * Returns a google contact us url.
	 * 
	 * @return
	 */
	String getGoogleContactUsUrl();
}