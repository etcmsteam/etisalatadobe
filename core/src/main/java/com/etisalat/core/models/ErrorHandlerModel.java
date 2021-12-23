package com.etisalat.core.models;

import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.etisalat.core.constants.PageConstants;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ErrorHandlerModel {
  private static final Logger LOGGER = LoggerFactory.getLogger(ErrorHandlerModel.class);
  private String errorPage;
  
  @Inject
  @Default(values = {PageConstants.DEFAULT_STATUS_CODE})
  private String errorCode;
  
  /**
   * The current request.
   */
  @ScriptVariable
  private SlingHttpServletResponse response;

  /**
   * @return the errorPage
   */
  public String getErrorPage() {
   final String errorPageURL = "/content/etisalat/ae/en/error/" + errorCode;
   LOGGER.debug("Error Page path - init method {}", this.errorPage);
	    
   response.setStatus(Integer.parseInt(errorCode));
   response.setContentType("text/html");
   response.setCharacterEncoding(PageConstants.UTF_8);
   
   return errorPageURL;
  }



}
