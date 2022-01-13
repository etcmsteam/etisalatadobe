package com.etisalat.core.services.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


import junitx.util.PrivateAccessor;


public class EtisalatApiServiceImplTest {

	public static final String API_URL = "http://localhost:4502/test/api";
	public static final String URL = "contactUsApiUrl";	
	public static final String TIMEOUT = "timeOut";
	public static final int TIMEOUT_VALUE = 7000;

	
	EtisalatApiServiceImpl etisalatApiServiceImpl = new EtisalatApiServiceImpl();

	@BeforeEach
	void setUp() throws NoSuchFieldException {
	PrivateAccessor.setField(etisalatApiServiceImpl, URL, API_URL);
	PrivateAccessor.setField(etisalatApiServiceImpl, TIMEOUT, TIMEOUT_VALUE);
	}

	@Test
	void testGetUrl() throws NoSuchFieldException {
		String getUrl = etisalatApiServiceImpl.getContactUsApiUrl();
		assertEquals(getUrl,API_URL);
	}	
	
	@Test
	void testGetTimeOut() throws NoSuchFieldException {
		int getTimeOut = etisalatApiServiceImpl.getTimeOut();
		assertEquals(getTimeOut,TIMEOUT_VALUE);
	}
};
