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
  
  @ValueMapValue(name="image1920px/fileReference")
  private String image1920px;
  
  @ValueMapValue(name="image1024px/fileReference")
  private String image1024px;
  
  @ValueMapValue(name="image1366px/fileReference")
  private String image1366px;
  
  @ValueMapValue(name="image1440px/fileReference")
  private String image1440px;
  
  @ValueMapValue(name="retinaimage414px/1x/fileReference")
  private String retinaImage414px1x;
  
  @ValueMapValue(name="retinaimage414px/2x/fileReference")
  private String retinaImage414px2x;
  
  @ValueMapValue(name="retinaimage540px/1x/fileReference")
  private String retinaImage540px1x;
  
  @ValueMapValue(name="retinaimage540px/2x/fileReference")
  private String retinaImage540px2x;
  
  @ValueMapValue(name="retinaimage768px/1x/fileReference")
  private String retinaImage768px1x;
  
  @ValueMapValue(name="retinaimage768px/2x/fileReference")
  private String retinaImage768px2x;
  
  @ValueMapValue(name="retinaimage992px/1x/fileReference")
  private String retinaImage992px1x;
  
  @ValueMapValue(name="retinaimage992px/2x/fileReference")
  private String retinaImage992px2x;
  
  @ValueMapValue(name="retinaimage1440px/1x/fileReference")
  private String retinaImage1440px1x;
  
  @ValueMapValue(name="retinaimage1440px/2x/fileReference")
  private String retinaImage1440px2x;
  
  @ValueMapValue(name="image1920px/altText")
  private String image1920PXAltText;
  
  @ValueMapValue(name="retinaimage1440px/altText")
  private String image1440PXAltText;
  
  @ValueMapValue(name="retinaimage992px/altText")
  private String image992PXAltText;
  

  public String getImage414px() {
      return image414px;
  }

  public String getImage768px() {
      return image768px;
  }

  public String getImage1920px() {
    return image1920px;
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

  public String getRetinaImage414px1x() {
    return retinaImage414px1x;
  }

  public String getRetinaImage414px2x() {
    return retinaImage414px2x;
  }

  public String getRetinaImage540px1x() {
    return retinaImage540px1x;
  }

  public String getRetinaImage540px2x() {
    return retinaImage540px2x;
  }

  public String getRetinaImage768px1x() {
    return retinaImage768px1x;
  }

  public String getRetinaImage768px2x() {
    return retinaImage768px2x;
  }

  public String getRetinaImage992px1x() {
    return retinaImage992px1x;
  }

  public String getRetinaImage992px2x() {
    return retinaImage992px2x;
  }

  public String getRetinaImage1440px1x() {
    return retinaImage1440px1x;
  }

  public String getRetinaImage1440px2x() {
    return retinaImage1440px2x;
  }

}
