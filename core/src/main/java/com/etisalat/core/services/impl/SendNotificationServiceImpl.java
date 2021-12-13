package com.etisalat.core.services.impl;

import org.apache.jackrabbit.oak.commons.PropertiesUtil;
import org.osgi.service.cm.ConfigurationAdmin;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;

import com.etisalat.core.services.SendNotificationConfiguration;
import com.etisalat.core.services.SendNotificationService;

@Component(service = SendNotificationService.class, immediate = true)
@Designate(ocd = SendNotificationConfiguration.class)

public class SendNotificationServiceImpl implements SendNotificationService {

  @Reference
  private ConfigurationAdmin configAdmin;
  private String url;
  

  private static final String NO_CONFIG_FOUND = "No config found";


  @Activate
  @Modified
  protected void activate(final SendNotificationConfiguration config) {
    this.url = PropertiesUtil.toString(config.getApiUrl(), NO_CONFIG_FOUND);
    
  }

  @Override
  public String getUrl() {
    return this.url;
  }
 

}
