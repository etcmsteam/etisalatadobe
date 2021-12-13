package com.etisalat.core.servlets;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import javax.servlet.Servlet;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.xfa.ut.StringUtils;
import com.etisalat.core.services.SendNotificationService;

@Component(immediate=true, service={Servlet.class}, property={"sling.servlet.methods=post", "sling.servlet.paths=/bin/api/sendNotification"})
public class SendNotificationServlet extends SlingAllMethodsServlet {

	private static final Logger LOG = LoggerFactory.getLogger(SendNotificationServlet.class);
	private static final long serialVersionUID = 1L;

    @Reference
    private transient SendNotificationService sendNotificationService;
    
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
	{ 
		try
		{	
		    String json = "";			    
			BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));				
			if(br != null){
				json = br.readLine();
			}
            if(!StringUtils.isEmpty(json)) {
            	postFormData(json);
            }
			LOG.info("Json"+json);
		}
		catch(Exception e)
		{
			LOG.error("Send Notification Service Exception",e.getMessage());
		}
	}

	public static void postFormData(String json) throws IOException {

		URL postUrl = new URL("https://azspringcloudsvc-etisalat-emailapp.azuremicroservices.io/azure/sendNotification");
		
		HttpURLConnection connection = (HttpURLConnection) postUrl.openConnection();        
		connection.setRequestMethod("POST");
		connection.setRequestProperty("Content-Type","application/json");
		connection.setUseCaches(false);
		connection.setDoOutput(true);
		BufferedWriter wr = new BufferedWriter(
				new OutputStreamWriter(connection.getOutputStream(), "UTF-8"));
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

	}
}
