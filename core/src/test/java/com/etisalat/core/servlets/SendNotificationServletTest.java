package com.etisalat.core.servlets;

import static org.mockito.Mockito.when;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import java.io.ObjectOutputStream;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


import com.etisalat.core.services.SendNotificationService;


public class SendNotificationServletTest {

	private String json = "{\"OPERATIONID\":\"CONTACTUS\",\"FIRST_NAME\":\"TestName\",\"LAST_NAME\":\"TestLastName\", \"EMAIL\":\"test@etisalat.ae\",\"MOBILE\":\"+971111111111\", \"DESCRIPTION\":\"Testing purposes only\"}";

	@Mock
	private SendNotificationService sendNotification;

	@Mock
	SlingHttpServletResponse slingHttpServletResponse;

	@Mock
	SlingHttpServletRequest slingHttpServletRequest;

	@InjectMocks
	SendNotificationServlet sendNotificationServlet;


	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	void testPostFormData() throws Exception{		
		when(slingHttpServletRequest.getInputStream()).thenReturn(createServletInputStream(json));
		Assertions.assertDoesNotThrow(() -> sendNotificationServlet.doPost(slingHttpServletRequest, slingHttpServletResponse));	      
	}

	public static ServletInputStream createServletInputStream(Object
			object) throws Exception {
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		ObjectOutputStream os = new ObjectOutputStream(baos );
		os.writeObject(object);

		final InputStream is = new
				ByteArrayInputStream(baos.toByteArray());

		return new ServletInputStream() {

			@Override
			public int read() throws IOException {
				return is.read();
			}

			@Override
			public boolean isFinished() {				
				return false;
			}

			@Override
			public boolean isReady() {
				
				return false;
			}

			@Override
			public void setReadListener(ReadListener arg0) {

			}
		};
	}


}
