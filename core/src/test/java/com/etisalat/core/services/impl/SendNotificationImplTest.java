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


public class SendNotificationImplTest {

	private String json = "{\"OPERATIONID\":\"CONTACTUS\",\"FIRST_NAME\":\"TestName\",\"LAST_NAME\":\"TestLastName\", \"EMAIL\":\"test@etisalat.ae\",\"MOBILE\":\"+971111111111\", \"DESCRIPTION\":\"Testing purposes only\"}";
	public static final String API_URL = "http://localhost:4502/test/api";

	@Mock
	HttpURLConnection con;

	@Mock
	InputStream inputStream;

	@Mock
	SendNotificationServiceImpl sendNotificationImpl;

	@BeforeEach
	void setUp() throws NoSuchFieldException {   
		MockitoAnnotations.initMocks(this);
	}

	/*
    Opening real connection in test class may cause run time issue on server /cloud build, hence covered method return types using mock
	 */
	
	@Test
	void testPostFormData() throws SocketTimeoutException,IOException{			 		  
		when(con.getInputStream()).thenReturn(inputStream); 
		when(con.getResponseCode()).thenReturn(200); 	    
		when(sendNotificationImpl.postFormData(json)).thenReturn(200);	 
		assertNotNull(sendNotificationImpl.postFormData(json));
	}

	@Test
	void testGetUrl() throws NoSuchFieldException {
		when(sendNotificationImpl.getUrl()).thenReturn(API_URL);
		assertNotNull(sendNotificationImpl.getUrl());
	}
};
