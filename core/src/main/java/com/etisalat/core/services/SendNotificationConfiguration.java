package com.etisalat.core.services;


import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "Send Notification Form Configuration", description = "Configurations details for Key and Url")
public @interface SendNotificationConfiguration {
	
  int TIMEOUT = 6000;
  String APIURL = "https://azspringcloudsvc-etisalat-emailapp.azuremicroservices.io/azure/sendNotification";

   @AttributeDefinition(name = "api url", description = "Send Notification Form Url")
   String getApiUrl() default APIURL;
  
   @AttributeDefinition(name = "set time out", description = "Set Time out")
   int getSetTimeout() default TIMEOUT;
   
}

