package com.etisalat.core.servlets;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.util.HashMap;
import java.util.Map;
import com.etisalat.core.util.CommonUtility;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.etisalat.core.constants.AEConstants;

import javax.servlet.Servlet;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.servlets.annotations.SlingServletResourceTypes;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.etisalat.core.services.CustomFormHandlingService;
import com.etisalat.core.services.EtisalatApiService;
import com.google.gson.Gson;

@Component(service = { Servlet.class })
@SlingServletResourceTypes(resourceTypes = "etisalat/components/page", methods = HttpConstants.METHOD_POST, selectors = "sendnotification", extensions = "html")
@ServiceDescription("Etisalat Send Notification Servlet")
public class SendNotificationServlet extends SlingAllMethodsServlet {

	private static final Logger LOG = LoggerFactory.getLogger(SendNotificationServlet.class);
	private static final long serialVersionUID = 1L;

	private static final String FORM_NAME = "SendNotification";

	@Reference
	private transient EtisalatApiService etisalatApiService;
	
	@Reference
	private transient CustomFormHandlingService customFormhandlingService;

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) {
		try {
			int status = AEConstants.BAD_REQUEST;

			int timeOutvalue = etisalatApiService.getTimeOut();
			Map<String, String> params = new HashMap<>();
			Map<String, String[]> parameterMap = request.getParameterMap();
			parameterMap.forEach((key,value) -> { params.put(key, value[0]); });			
			Gson gson = new Gson(); 
			String json = gson.toJson(params); 
			PageManager pageManager = request.getResourceResolver().adaptTo(PageManager.class);
			Page currentPage = pageManager.getContainingPage(request.getResource());	
			String redirectUrl = CommonUtility.getRedirectUrl(currentPage.getPath(),json.toString());
			if (StringUtils.isNotEmpty(json)) {				
				status = customFormhandlingService.postFormData(json.toString(), getSendNotificationApiUrl(), timeOutvalue, FORM_NAME);
			}

			if (status == AEConstants.RESPONSE_OK) {
				response.setStatus(status);
				response.sendRedirect(redirectUrl);

			} else {
				response.setStatus(status);
				LOG.error("Send Notification Service Failed and API response is {}", status);
				response.sendRedirect(redirectUrl);
			}
		}
		catch (SocketTimeoutException e) {
			LOG.error("Send Notification Service Time Out {}", e.getMessage());
		} catch (IOException e) {
			LOG.error("Send Notification Service Input Stream Parsing Error {}", e.getMessage());
		}
	}

	public String getSendNotificationApiUrl() {		
		return etisalatApiService.getContactUsApiUrl();			
	}		

}