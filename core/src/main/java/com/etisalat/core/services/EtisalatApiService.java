package com.etisalat.core.services;


public interface EtisalatApiService {

	/**
	 * Returns a send notification service url.
	 *
	 * @return
	 */
	String getContactUsApiUrl();

	/**
	 * Returns a send notification service url.
	 *
	 * @return
	 */
	String getNewsLetterApiUrl();


	/**
	 * Returns a send notification service url.
	 *
	 * @return
	 */
	String getLeaderOrderApiUrl();

	/**
	 * Returns a set timeout value.
	 *
	 * @return
	 */
	int getTimeOut();


}
