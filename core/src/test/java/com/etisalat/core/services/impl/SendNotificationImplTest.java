package com.etisalat.core.services.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
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

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;


public class SendNotificationImplTest {

	private String json = "{\"g-recaptcha-response\":\"testvalue\",\"OPERATIONID\":\"CONTACTUS\",\"FIRST_NAME\":\"TestName\",\"LAST_NAME\":\"TestLastName\", \"EMAIL\":\"test@etisalat.ae\",\"MOBILE\":\"+971111111111\", \"DESCRIPTION\":\"Testing purposes only\"}";
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
	
	@Test
	void testCaptchaResponse() throws JsonSyntaxException, JsonParseException {
		String captchaValue = "No Captcha Value Found";
		if(null != json) {
			JsonObject jsonObject = new JsonParser().parse(json).getAsJsonObject();		
			JsonElement captchaElement = jsonObject.get("g-recaptcha-response");
			captchaValue = captchaElement.getAsString();
		}	
		when(sendNotificationImpl.getCaptchaResponse(json)).thenReturn(captchaValue);
		assertEquals(sendNotificationImpl.getCaptchaResponse(json),"testvalue");
		
	}
};
