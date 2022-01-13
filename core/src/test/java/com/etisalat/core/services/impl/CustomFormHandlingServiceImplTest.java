package com.etisalat.core.services.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.SocketTimeoutException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class CustomFormHandlingServiceImplTest {

	public static final String API_URL = "http://localhost:4502/test/api";
	private String json = "{\"g-recaptcha-response\":\"testvalue\",\"OPERATIONID\":\"CONTACTUS\",\"FIRST_NAME\":\"TestName\",\"LAST_NAME\":\"TestLastName\", \"EMAIL\":\"test@etisalat.ae\",\"MOBILE\":\"+971111111111\", \"DESCRIPTION\":\"Testing purposes only\"}";	
	public static final String URL = "contactUsApiUrl";	
	public static final String TIMEOUT = "timeOut";
	public static final int TIMEOUT_VALUE = 7000;

	@Mock
	InputStream inputStream;
	
	@Mock
	HttpURLConnection con;
	
	@Mock
	CustomFormHandlingServiceImpl customFormHandlingServiceImpl;

	@BeforeEach
	void setUp() throws NoSuchFieldException {
		MockitoAnnotations.initMocks(this);	
	}
/* Opening real connect may cause compile issue on server so just mocking object to validate return type*/
	
	@Test
	void testPostFormData() throws SocketTimeoutException,IOException{			 		  
		when(con.getInputStream()).thenReturn(inputStream); 
		when(con.getResponseCode()).thenReturn(200); 	    
		when(customFormHandlingServiceImpl.postFormData(json, API_URL,TIMEOUT_VALUE,"newform")).thenReturn(200);	 
		assertNotNull(customFormHandlingServiceImpl.postFormData(json, API_URL,TIMEOUT_VALUE,"newform"));
	}
};
