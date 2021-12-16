package com.etisalat.core.models.impl;

import com.etisalat.core.models.ImageEtisalatViewport;
import com.etisalat.core.models.LinkModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;


@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {
        ImageEtisalatViewport.class}, resourceType = {ImageEtisalatViewportImpl.RESOURCE_TYPE})
public class ImageEtisalatViewportImpl implements ImageEtisalatViewport {

  private static final Logger LOG = LoggerFactory.getLogger(ImageEtisalatViewportImpl.class);

  protected static final String RESOURCE_TYPE = "etisalat/components/imageetisalatviewport";

  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String altText;

  private LinkModel image1920px;
  private LinkModel image1440px;
  private LinkModel image1366px;
  private LinkModel image1024px;
  private LinkModel image768px;
  private LinkModel image414px;


  private static final String IMAGE_1920px_NODE = "image1920px";
  private static final String IMAGE_1440px_NODE = "image1440px";
  private static final String IMAGE_1366px_NODE = "image1366px";
  private static final String IMAGE_1024px_NODE = "image1024px";
  private static final String IMAGE_768px_NODE = "image768px";
  private static final String IMAGE_414px_NODE = "image414px";


  @SlingObject
  @Optional
  protected Resource currentResource;

  @PostConstruct
  protected void init() {
    LOG.info("current resource is {}", currentResource.getPath());
    if (currentResource.hasChildren()) {
      final Resource image1920pxNode = currentResource.getChild(IMAGE_1920px_NODE);
      final Resource image1440pxNode = currentResource.getChild(IMAGE_1440px_NODE);
      final Resource image1366pxNode = currentResource.getChild(IMAGE_1366px_NODE);
      final Resource image1024pxNode = currentResource.getChild(IMAGE_1024px_NODE);
      final Resource image768pxNode = currentResource.getChild(IMAGE_768px_NODE);
      final Resource image414pxNode = currentResource.getChild(IMAGE_414px_NODE);


      if (null != image1920pxNode) {
        image1920px = image1920pxNode.adaptTo(LinkModel.class);
      }
      if (null != image1440pxNode) {
        image1440px = image1440pxNode.adaptTo(LinkModel.class);
      }
      if (null != image1366pxNode) {
        image1366px = image1366pxNode.adaptTo(LinkModel.class);
      }
      if (null != image1024pxNode) {
        image1024px = image1024pxNode.adaptTo(LinkModel.class);
      }
      if (null != image768pxNode) {
        image768px = image768pxNode.adaptTo(LinkModel.class);
      }
      if (null != image414pxNode) {
        image414px = image414pxNode.adaptTo(LinkModel.class);
      }
    }
  }

  /**
   * @return a object representing the Cover image item.
   */
  @Override
  public LinkModel getImage1920px() {
    return image1920px;
  }

  @Override
  public LinkModel getImage1440px() {
    return image1440px;
  }

  @Override
  public LinkModel getImage1366px() {
    return image1366px;
  }

  @Override
  public LinkModel getImage1024px() {
    return image1024px;
  }

  @Override
  public LinkModel getImage768px() {
    return image768px;
  }

  @Override
  public LinkModel getImage414px() {
    return image414px;
  }

  @Override
  public String getAltText() {
    return altText;
  }

}
