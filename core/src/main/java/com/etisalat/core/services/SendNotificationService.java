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
   * Process request and returns response code.
   *
   * @return
   */
  public int postFormData (String Json) throws IOException;
}
