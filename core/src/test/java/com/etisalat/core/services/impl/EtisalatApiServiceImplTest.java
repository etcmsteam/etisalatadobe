package com.etisalat.core.services.impl;

import junitx.util.PrivateAccessor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class EtisalatApiServiceImplTest {

	public static final String API_URL = "http://localhost:4502/test/api";
	public static final String URL = "contactUsApiUrl";	
	public static final String TIMEOUT = "timeOut";
	public static final int TIMEOUT_VALUE = 7000;
	public static final String SEARCH_AUTO_SUGGEST_URL = "/test/autoSuggest";
	public static final String SEARCH_ENDPOINT_URL = "/test/guidedSearchRequest";
	public static final String HOSTNAME = "etisalat.ae";

	
	EtisalatApiServiceImpl etisalatApiServiceImpl = new EtisalatApiServiceImpl();

	@BeforeEach
	void setUp() throws NoSuchFieldException {
	PrivateAccessor.setField(etisalatApiServiceImpl, URL, API_URL);
	PrivateAccessor.setField(etisalatApiServiceImpl, TIMEOUT, TIMEOUT_VALUE);
	PrivateAccessor.setField(etisalatApiServiceImpl, "autoSearchUrl", SEARCH_AUTO_SUGGEST_URL);
  PrivateAccessor.setField(etisalatApiServiceImpl, "searchEndpointUrl", SEARCH_ENDPOINT_URL);
  PrivateAccessor.setField(etisalatApiServiceImpl, "apiHostname", HOSTNAME);
	}

	@Test
	void testGetUrl() throws NoSuchFieldException {
		String getUrl = etisalatApiServiceImpl.getContactUsApiUrl();
		assertEquals(API_URL, getUrl);
	}	
	
	@Test
	void testGetTimeOut() throws NoSuchFieldException {
		int getTimeOut = etisalatApiServiceImpl.getTimeOut();
		assertEquals(TIMEOUT_VALUE, getTimeOut);
	}
	
	@Test
  void testSearchAutoSuggestUrl() throws NoSuchFieldException {
    String autoSuggestUrl = etisalatApiServiceImpl.getAutoSuggestEndpointUrl();
    assertEquals(SEARCH_AUTO_SUGGEST_URL, autoSuggestUrl);
  }
	
	@Test
  void testSearchEndpointUrl() throws NoSuchFieldException {
    String searchUrl = etisalatApiServiceImpl.getSearchEndpointUrl();
    assertEquals(SEARCH_ENDPOINT_URL, searchUrl);
  }
	
	@Test
  void testHostname() throws NoSuchFieldException {
    String hostname = etisalatApiServiceImpl.getApiHostname();
    assertEquals(HOSTNAME, hostname);
  }
}
