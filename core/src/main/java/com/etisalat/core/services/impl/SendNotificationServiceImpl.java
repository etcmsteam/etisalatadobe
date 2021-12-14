package com.etisalat.core.services.impl;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
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

@Component(service = SendNotificationService.class, immediate = true)
@Designate(ocd = SendNotificationConfiguration.class)
public class SendNotificationServiceImpl implements SendNotificationService {

  private static final Logger LOG = LoggerFactory.getLogger(SendNotificationServiceImpl.class);
  private static final String NO_CONFIG_FOUND = "No config found";
  private static final String POST_METHOD = "POST";
  private static final String REQUEST_PROPERTY = "application/json";
  private static final String CONTENT_TYPE = "Content-Type";
  private static final String UTF = "UTF-8";
  
  @Reference
  private ConfigurationAdmin configAdmin;
  private String url;
  
  @Activate
  @Modified
  protected void activate(final SendNotificationConfiguration config) {
    this.url = PropertiesUtil.toString(config.getApiUrl(), NO_CONFIG_FOUND);
    
  }

  @Override
  public String getUrl() {
    return this.url;
  }
  
  @Override
  public int postFormData(String json) throws IOException {
	  
		URL postUrl = new URL(getUrl());		
		HttpURLConnection connection = (HttpURLConnection) postUrl.openConnection();        
		connection.setRequestMethod(POST_METHOD);
		connection.setRequestProperty(CONTENT_TYPE,REQUEST_PROPERTY);
		connection.setUseCaches(false);
		connection.setDoOutput(true);
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
			LOG.info(jsonResponseData.toString());
         
		} 
		else if(responseCode == 417) {			
			LOG.info("In 417 Almost Success"+responseCode);
		}
		else {
			LOG.info("In Post Else Some Other Response Code"+responseCode);
			 
		}
		return responseCode;

	}
}
