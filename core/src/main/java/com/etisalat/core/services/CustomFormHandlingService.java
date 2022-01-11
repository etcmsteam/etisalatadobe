package com.etisalat.core.services;

public interface CustomFormHandlingService {

  /**
   * Process request and returns response code.
   *
   * @return
   */
int postFormData(String json, String url, String headerParam, String headerValue, int timeOut, String formName);
}
