package com.etisalat.core.models;

import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.day.cq.commons.jcr.JcrConstants;
import com.etisalat.core.util.CommonUtility;

/**
 * The Class MegaTeaserModel.
 */
@Model(adaptables = Resource.class)
public class MegaTeaserModel {

  /** The pretitle. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String pretitle;

  /** The title. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL, name = JcrConstants.JCR_TITLE)
  private String title;

  /** The file reference. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String fileReference;

  /** The actions enabled. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String actionsEnabled;
  
  /** The link URL. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String linkURL;
  
  /** The link target. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String linkTarget;
  
  /** The resource type. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  @Named("sling:resourceType")
  private String resourceType;
  
  /** The title type. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String titleType;

  /** The link. */
  private String link;

  /** The text. */
  private String text;

  /** The brand title. */
  private String brandTitle;
  
  /** The teaser resource. */
  private Resource teaserResource;
  
  /** The action link target. */
  private String actionLinkTarget;
  
  /** The resource resolver. */
  @SlingObject
  private ResourceResolver resourceResolver;


  /**
   * Gets the pretitle.
   *
   * @return the pretitle
   */
  public String getPretitle() {
    return pretitle;
  }

  /**
   * Gets the title.
   *
   * @return the title
   */
  public String getTitle() {
    return title;
  }

  /**
   * Gets the file reference.
   *
   * @return the fileReference
   */
  public String getFileReference() {
    return fileReference;
  }

  /**
   * Gets the actions enabled.
   *
   * @return the actionsEnabled
   */
  public String getActionsEnabled() {
    return actionsEnabled;
  }

  /**
   * Sets the pretitle.
   *
   * @param pretitle the pretitle to set
   */
  public void setPretitle(String pretitle) {
    this.pretitle = pretitle;
  }

  /**
   * Sets the title.
   *
   * @param title the title to set
   */
  public void setTitle(String title) {
    this.title = title;
  }

  /**
   * Sets the file reference.
   *
   * @param fileReference the fileReference to set
   */
  public void setFileReference(String fileReference) {
    this.fileReference = fileReference;
  }

  /**
   * Sets the actions enabled.
   *
   * @param actionsEnabled the actionsEnabled to set
   */
  public void setActionsEnabled(String actionsEnabled) {
    this.actionsEnabled = actionsEnabled;
  }

  /**
   * Gets the link.
   *
   * @return the link
   */
  public String getLink() {
    return link;
  }
  
  /**
   * Gets the link URL.
   *
   * @return the linkURL
   */
  public String getLinkURL() {
    return CommonUtility.appendHtmlExtensionToPage(resourceResolver, linkURL);
  }

  /**
   * Gets the text.
   *
   * @return the text
   */
  public String getText() {
    return text;
  }

  /**
   * Sets the link.
   *
   * @param link the link to set
   */
  public void setLink(String link) {
    this.link = link;
  }
  
  /**
   * Sets the link URL.
   *
   * @param linkURL the linkURL to set
   */
  public void setLinkURL(String linkURL) {
    this.linkURL = linkURL;
  }
  

  /**
   * Sets the text.
   *
   * @param text the text to set
   */
  public void setText(String text) {
    this.text = text;
  }

  /**
   * Gets the brand title.
   *
   * @return the brandTitle
   */
  public String getBrandTitle() {
    return brandTitle;
  }

  /**
   * Sets the brand title.
   *
   * @param brandTitle the brandTitle to set
   */
  public void setBrandTitle(String brandTitle) {
    this.brandTitle = brandTitle;
  }

  /**
   * Gets the resource type.
   *
   * @return the resourceType
   */
  public String getResourceType() {
    return resourceType;
  }

  /**
   * Sets the resource type.
   *
   * @param resourceType the resourceType to set
   */
  public void setResourceType(String resourceType) {
    this.resourceType = resourceType;
  }

  /**
   * @return the teaserResource
   */
  public Resource getTeaserResource() {
    return teaserResource;
  }

  /**
   * @param teaserResource the teaserResource to set
   */
  public void setTeaserResource(Resource teaserResource) {
    this.teaserResource = teaserResource;
  }

  /**
   * @return the titleType
   */
  public String getTitleType() {
    return titleType;
  }

  /**
   * @param titleType the titleType to set
   */
  public void setTitleType(String titleType) {
    this.titleType = titleType;
  }

  /**
   * @return the linkTarget
   */
  public String getLinkTarget() {
    return linkTarget;
  }

  /**
   * @param linkTarget the linkTarget to set
   */
  public void setLinkTarget(String linkTarget) {
    this.linkTarget = linkTarget;
  }
  

  /**
   * @return the actionLinkTarget
   */
  public String getActionLinkTarget() {
    return actionLinkTarget;
  }

  /**
   * @param actionLinkTarget the actionLinkTarget to set
   */
  public void setActionLinkTarget(String actionLinkTarget) {
    this.actionLinkTarget = actionLinkTarget;
  }



}
