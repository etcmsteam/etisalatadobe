package com.etisalat.core.services;


import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "Send Notification Form Configuration", description = "Configurations details for Key and Url")
public @interface EtisalatApiConfiguration {
	
   int TIMEOUT = 7000;
   String contactUsFormApiUrl = "https://azspringcloudsvc-etisalat-email-sender.azuremicroservices.io/emailapp/sendNotification";
   String newsLetterApiUrl = "https://www.etisalat.ae/b2bportal/subscribeNewsLetter.service";
   String leaderOrderFormApiUrl = "https://www.etisalat.ae/b2bportal/Utility/checkCaptcha.service";

   @AttributeDefinition(name = "Contact Us Api url", description = "Contact Us  Form Url")
   String getContactUsApiUrl() default contactUsFormApiUrl;
   
   @AttributeDefinition(name = "News Letter Api url", description = "News Letter Form Url")
   String getNewsLetterApiUrl() default newsLetterApiUrl;
   
   @AttributeDefinition(name = "Leader Order Api Url description ", description = "Leader Order Form Url")
   String getLeaderOrderFormApiUrl() default leaderOrderFormApiUrl;
  
   @AttributeDefinition(name = "set time out", description = "Set Time out")
   int getSetTimeout() default TIMEOUT;
   
}

