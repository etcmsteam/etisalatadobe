package com.etisalat.core.services;


import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "Send Notification Form Configuration", description = "Configurations details for Key and Url")
public @interface SendNotificationConfiguration {

  @AttributeDefinition(name = "api url", description = "Send Notification Form Url")
  String getApiUrl() default "https://azspringcloudsvc-etisalat-emailapp.azuremicroservices.io/azure/message";
    
}

