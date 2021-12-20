package com.etisalat.core.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.SocketTimeoutException;

import javax.servlet.Servlet;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.etisalat.core.services.SendNotificationService;

@Component(immediate=true, service={Servlet.class}, property={"sling.servlet.methods=post", "sling.servlet.paths=/bin/api/sendNotification"})
public class SendNotificationServlet extends SlingAllMethodsServlet {

	private static final Logger LOG = LoggerFactory.getLogger(SendNotificationServlet.class);
	private static final long serialVersionUID = 1L;
	private static final int RESPONSE_OK = 200;
	private static final int BAD_REQUEST = 400;
	private static final String JSON_STRING = "";

	@Reference
	private transient SendNotificationService sendNotificationService; 

	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
	{ 
		try
		{					   
			String json = JSON_STRING;
			int status = BAD_REQUEST;
			BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));				
			if(br != null){
				json = br.readLine();
			}
			if(!StringUtils.isEmpty(json)) {
				status = sendNotificationService.postFormData(json);
			}

			if(status == RESPONSE_OK) {
				response.setStatus(status);
			}
			else {
				response.setStatus(status);
				LOG.error("Send Notification Service Failed and API response is"+ status);
			}

		}
		
		catch(SocketTimeoutException e)
		{
			LOG.error("Send Notification Service Time Out " + e.getMessage());
		}
		catch(IOException e)
		{
			LOG.error("Send Notification Service Input Stream Parsing Error",e.getMessage());
		}
	}

}