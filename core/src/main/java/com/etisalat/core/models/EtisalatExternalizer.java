package com.etisalat.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ResourceResolver;

public interface EtisalatExternalizer {

    String getLinkUrl(String path, ResourceResolver resourceResolver, SlingHttpServletRequest request);
}
