package com.etisalat.core.services;

public interface GoogleMapsService {

  /**
   * Returns a google map url.
   *
   * @return
   */
  public String getGoogleUrl();

  /**
   * Returns a google site map key.
   *
   * @return
   */
  public String getGoogleKey();

  /**
   * Returns a google contact us url.
   *
   * @return
   */
  String getGoogleContactUsUrl();

  /**
   * Returns Google CAPTCHA v2 site key.
   *
   * @return
   */
  String getCaptchaV2SiteKey();

  /**
   * Returns Google CAPTCHA v3 site key.
   *
   * @return
   */
  String getCaptchaV3SiteKey();

  /**
   * Returns Google CAPTCHA invisible site key.
   *
   * @return
   */
  String getCaptchaInvisibleSiteKey();
}
