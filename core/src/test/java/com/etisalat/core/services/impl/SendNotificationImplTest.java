package com.etisalat.core.services.impl;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;


public class SendNotificationImplTest {

	private String json = "{\"OPERATIONID\":\"CONTACTUS\",\"FIRST_NAME\":\"TestName\",\"LAST_NAME\":\"TestLastName\", \"EMAIL\":\"test@etisalat.ae\",\"MOBILE\":\"+971111111111\", \"DESCRIPTION\":\"Testing purposes only\"}";
	
	@Mock
	SendNotificationServiceImpl sendNotificationImpl;
	
	@BeforeEach
	void setUp() throws NoSuchFieldException {   
		MockitoAnnotations.initMocks(this);
	}

	@Test
	void testPostFormData() throws IOException{			 
		InputStream inputStream = new ByteArrayInputStream(json.getBytes()); 
	    HttpURLConnection con = Mockito.mock(HttpURLConnection.class); 
	    Mockito.when(con.getInputStream()).thenReturn(inputStream); 
	    Mockito.when(con.getResponseCode()).thenReturn(200); 	    
	    Mockito.when(sendNotificationImpl.postFormData(json)).thenReturn(200);	  
	    assertEquals(con.getResponseCode(),sendNotificationImpl.postFormData(json));	    
	}
};
