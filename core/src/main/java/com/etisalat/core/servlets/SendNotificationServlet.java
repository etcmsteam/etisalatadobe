package com.etisalat.core.servlets;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.util.HashMap;
import java.util.Map;
import com.etisalat.core.util.CommonUtility;
import com.adobe.cq.wcm.core.components.models.Page;
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
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

@Component(service = { Servlet.class })
@SlingServletResourceTypes(resourceTypes = "etisalat/components/page", methods = HttpConstants.METHOD_POST, selectors = "sendnotification", extensions = "html")
@ServiceDescription("Etisalat Send Notification Servlet")
public class SendNotificationServlet extends SlingAllMethodsServlet {

	private static final Logger LOG = LoggerFactory.getLogger(SendNotificationServlet.class);
	private static final long serialVersionUID = 1L;

	private static final String JSON_STRING = "";
	private static final String FORM_NAME = "SendNotification";

	@Reference
	private transient EtisalatApiService etisalatApiService;
	@Reference
	private transient CustomFormHandlingService customFormhandlingService;

	PageManager pageManager;

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) {
		try {
			String json = JSON_STRING;
			int status = AEConstants.BAD_REQUEST;
			String apiUrl = "";
			String headerParam = AEConstants.CLIENT_CAPTCHA_VALUE;
			String headerParamValue = "";
			int timeOutvalue = etisalatApiService.getTimeOut();
			String redirectUrl = "";

			Map<String, String> params = new HashMap<>();
			Map<String, String[]> parameterMap = request.getParameterMap();
			parameterMap.forEach((key,value) -> { params.put(key, value[0]); });			
			Gson gson = new Gson(); 
			json = gson.toJson(params); 
			PageManager pageManager = request.getResourceResolver().adaptTo(PageManager.class);
			com.day.cq.wcm.api.Page currentPage = pageManager.getContainingPage(request.getResource());
			String pagePath = currentPage.getPath();
			apiUrl = getSendNotificationApiUrl(json.toString());
			redirectUrl = CommonUtility.getRedirectUrl(pagePath,json.toString());
			headerParamValue = CommonUtility.getCaptchaResponse(json.toString());
			if (!StringUtils.isEmpty(json)) {
				status = customFormhandlingService.postFormData(json.toString(), apiUrl, headerParam, headerParamValue, timeOutvalue, FORM_NAME);
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

	public String getSendNotificationApiUrl(String json) {
		String apiUrl = "";
		try {
			if(null != json) {
				JsonObject jsonObject = new JsonParser().parse(json).getAsJsonObject();	
				if(jsonObject.has(AEConstants.NEWS_LETTER_ARTICLE_NAME_KEY)) {
					JsonElement contactUsElement = jsonObject.get(AEConstants.NEWS_LETTER_ARTICLE_NAME_KEY);				
					if(null != contactUsElement) {
						apiUrl = etisalatApiService.getNewsLetterApiUrl();
					}
				}
				else {
					apiUrl = etisalatApiService.getContactUsApiUrl();
				}
			}
		}
		catch (JsonSyntaxException e) {
			LOG.error("Json Syntax error {}", e.getMessage());
		}
		catch (JsonParseException e) {
			LOG.error("Json parse error {}", e.getMessage());
		}

		return apiUrl;
	}

}