package com.etisalat.core.services.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.io.IOException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;

import junitx.util.PrivateAccessor;

public class SendNotificationImplTest {

	private String json = "{\"OPERATIONID\":\"CONTACTUS\",\"FIRST_NAME\":\"TestName\",\"LAST_NAME\":\"TestLastName\", \"EMAIL\":\"test@etisalat.ae\",\"MOBILE\":\"+971111111111\", \"DESCRIPTION\":\"Testing purposes only\"}";
	public static final String API_URL = "http://localhost:4502/test/api"; 
	public static final String URL = "url";

	SendNotificationServiceImpl sendNotificationImpl = new SendNotificationServiceImpl();
	
	@BeforeEach
	void setUp() throws NoSuchFieldException {   
		PrivateAccessor.setField(sendNotificationImpl, URL, API_URL);
	}

	@Test
	void testPostFormData() throws IOException{			 
		int Status = sendNotificationImpl.postFormData(json);
		assertNotNull(Status);
	}
	
	@Test
	void testGetUrl() throws IOException{			 
		String getUrl = sendNotificationImpl.getUrl();
		assertEquals(getUrl,API_URL);
	}

};
