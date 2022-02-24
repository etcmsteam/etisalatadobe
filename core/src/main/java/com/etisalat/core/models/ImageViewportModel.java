package com.etisalat.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = { Resource.class,
        SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ImageViewportModel {

  @ValueMapValue(name="image414px/fileReference")
  private String image414px;

  @ValueMapValue(name="image768px/fileReference")
  private String image768px;
  
  @ValueMapValue(name="image540px/fileReference")
  private String image540px;
  
  @ValueMapValue(name="image1920px/fileReference")
  private String image1920px;
  
  @ValueMapValue(name="image992px/fileReference")
  private String image992px;
  
  @ValueMapValue(name="image1024px/fileReference")
  private String image1024px;
  
  @ValueMapValue(name="image1366px/fileReference")
  private String image1366px;
  
  @ValueMapValue(name="image1440px/fileReference")
  private String image1440px;
  
  @ValueMapValue(name="image1920px/altText")
  private String image1920PXAltText;
  
  @ValueMapValue(name="image1440px/altText")
  private String image1440PXAltText;
  
  @ValueMapValue(name="image992px/altText")
  private String image992PXAltText;
  

  public String getImage414px() {
      return image414px;
  }

  public String getImage768px() {
      return image768px;
  }

  public String getImage540px() {
    return image540px;
  }

  public String getImage1920px() {
    return image1920px;
  }

  public String getImage992px() {
    return image992px;
  }

  public String getImage1024px() {
    return image1024px;
  }

  public String getImage1366px() {
    return image1366px;
  }

  public String getImage1440px() {
    return image1440px;
  }
  
  public String getImage1920PXAltText() {
    return image1920PXAltText;
  }

  public String getImage1440PXAltText() {
    return image1440PXAltText;
  }

  public String getImage992PXAltText() {
    return image992PXAltText;
  }

}
