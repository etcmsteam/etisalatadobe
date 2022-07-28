package com.etisalat.core.servlets;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.Servlet;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.servlets.annotations.SlingServletResourceTypes;
import org.apache.sling.xss.XSSAPI;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.etisalat.core.constants.AEConstants;
import com.etisalat.core.services.CustomFormHandlingService;
import com.etisalat.core.services.EtisalatApiService;
import com.etisalat.core.util.CommonUtility;
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
	
	@Reference
  private transient XSSAPI xssapi;

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) {
		try {
			int status = AEConstants.BAD_REQUEST;

			final int timeOutvalue = etisalatApiService.getTimeOut();
			final Map<String, String> params = new HashMap<>();
			final Map<String, String[]> parameterMap = request.getParameterMap();
			parameterMap.forEach((key,value) -> params.put(key,xssapi.filterHTML(value[0])));
			final Gson gson = new Gson(); 
			final String json = gson.toJson(params); 
			final PageManager pageManager = request.getResourceResolver().adaptTo(PageManager.class);
			final Page currentPage = pageManager.getContainingPage(request.getResource());	
			final String redirectUrl = CommonUtility.getRedirectUrl(currentPage.getPath(),json);
			if (StringUtils.isNotEmpty(json)) {				
				status = customFormhandlingService.postFormData(json, getSendNotificationApiUrl(), timeOutvalue, FORM_NAME);
			}

			if (status == AEConstants.RESPONSE_OK) {
				response.setStatus(status);
				response.sendRedirect(redirectUrl.concat(AEConstants.SUCCESS_PARAM));

			} else {
				response.setStatus(status);
				LOG.error("Send Notification Service Failed and API response is {}", status);
				response.sendRedirect(currentPage.getPath().concat(AEConstants.ERROR_PARAM_WITH_EXTENSION));
			}
		} catch (IOException e) {
			LOG.error("Send Notification Service Input Stream Parsing Error {}", e.getMessage());
		}
	}

	public String getSendNotificationApiUrl() {		
		return etisalatApiService.getContactUsApiUrl();			
	}		

}