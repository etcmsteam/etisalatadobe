package com.etisalat.core.services;


import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "Google Map Integration Configuration", description = "Configurations details for Key and Url")
public @interface GoogleMapsConfiguration {

	@AttributeDefinition(name = "google url", description = "Google Map Url")
	String getGoogleUrl() default "https://maps.googleapis.com/maps/api/js?";

	@AttributeDefinition(name = "google key", description = "Google Map API Key")
	String getGoogleKey() default "AIzaSyASY1eVRut4PBG0wzPbbsg7qt2ujstMlyo&libraries=places,geometry";

}

