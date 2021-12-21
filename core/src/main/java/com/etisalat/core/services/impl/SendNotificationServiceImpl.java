package com.etisalat.core.services.impl;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.SocketTimeoutException;
import java.net.URL;

import org.apache.jackrabbit.oak.commons.PropertiesUtil;
import org.osgi.service.cm.ConfigurationAdmin;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.etisalat.core.services.SendNotificationConfiguration;
import com.etisalat.core.services.SendNotificationService;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

@Component(service = SendNotificationService.class, immediate = true)
@Designate(ocd = SendNotificationConfiguration.class)
public class SendNotificationServiceImpl implements SendNotificationService {

	private static final Logger LOG = LoggerFactory.getLogger(SendNotificationServiceImpl.class);
	private static final String NO_CONFIG_FOUND = "No config found";
	private static final String POST_METHOD = "POST";
	private static final String REQUEST_PROPERTY = "application/json";
	private static final String CONTENT_TYPE = "Content-Type";
	private static final String UTF = "UTF-8";
	private static final String CAPTCHA_NAME = "g-recaptcha-response";
	private static final String CAPTCHA_NULL = "No captcha response found";
	private static final String CLIENT_CAPTCHA_VALUE = "HDR_GOOGLE_CLIENT_TOKEN_KEY";

	@Reference
	private ConfigurationAdmin configAdmin;
	private String url;
	private int timeOut;

	@Activate
	@Modified
	protected void activate(final SendNotificationConfiguration config) {
		this.url = PropertiesUtil.toString(config.getApiUrl(), NO_CONFIG_FOUND);
		this.timeOut = PropertiesUtil.toInteger(config.getSetTimeout(), 5000);
	}

	@Override
	public String getUrl() {
		return this.url;
	}

	@Override
	public int getTimeOut() {
		return this.timeOut;
	}

	@Override
	public int postFormData(String json) {
		try {
			URL postUrl = new URL(getUrl());		
			HttpURLConnection connection = (HttpURLConnection) postUrl.openConnection();        
			connection.setRequestMethod(POST_METHOD);
			connection.setRequestProperty(CONTENT_TYPE,REQUEST_PROPERTY);
			connection.setRequestProperty(CLIENT_CAPTCHA_VALUE,getCaptchaResponse(json));
			connection.setUseCaches(false);
			connection.setDoOutput(true);
			connection.setConnectTimeout(getTimeOut());
			connection.setReadTimeout(getTimeOut());

			BufferedWriter wr = new BufferedWriter(
					new OutputStreamWriter(connection.getOutputStream(), UTF));
			wr.write(json);
			wr.close();
			connection.connect();
			int responseCode = connection.getResponseCode();
			if (responseCode == HttpURLConnection.HTTP_CREATED) {       
				StringBuffer jsonResponseData = new StringBuffer();
				String readLine = null;
				BufferedReader bufferedReader = new BufferedReader(
						new InputStreamReader(connection.getInputStream()));		
				while ((readLine = bufferedReader.readLine()) != null) {
					jsonResponseData.append(readLine + "\n");
				}		
				bufferedReader.close();
				LOG.debug("Send Notification API Request Created and response code is {}", responseCode);
			}
			LOG.debug("Send Notification API Request response code is  {}", responseCode);
			connection.disconnect();
			return responseCode;
		}
		catch(SocketTimeoutException e) {
			LOG.error("Send Notification Service Time Out {} ",e.getMessage());
			return HttpURLConnection.HTTP_CLIENT_TIMEOUT ;
		}
		catch(IOException e) {
			LOG.error("Send Notification Service Connection Failed {}", e.getMessage());
			return HttpURLConnection.HTTP_NOT_FOUND;
		}
	}

	@Override
	public String getCaptchaResponse(String json) {
		String captchaValue = CAPTCHA_NULL;
		try {
			if(null != json) {
				JsonObject jsonObject = new JsonParser().parse(json).getAsJsonObject();		
				JsonElement captchaElement = jsonObject.get(CAPTCHA_NAME);
				captchaValue = captchaElement.getAsString();
			}
		}
		catch (JsonSyntaxException e) {
			LOG.error("Send notification service Json Syntax error {}", e.getMessage());
		}
		catch (JsonParseException e) {
			LOG.error("Send notification service json parse error {}", e.getMessage());
		}
		return captchaValue;
	}

}
