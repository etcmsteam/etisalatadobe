package com.etisalat.core.services;

import java.io.IOException;

public interface SendNotificationService {

  /**
   * Returns a send notification service url.
   *
   * @return
   */
  public String getUrl();
  
  /**
   * Returns a set timeout value.
   *
   * @return
   */
  public int getTimeOut();
  
  /**
   * Returns Captcha Response Value.
   *
   * @return
   */
  public String getCaptchaResponse(String Json);
  
  /**
   * Process request and returns response code.
   *
   * @return
   */
  public int postFormData (String Json) throws IOException;
}
