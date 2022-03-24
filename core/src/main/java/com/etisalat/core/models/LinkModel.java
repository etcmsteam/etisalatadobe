package com.etisalat.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.etisalat.core.util.CommonUtility;

/**
 * The Class LinkModel.
 */
@Model(adaptables = Resource.class)
public class LinkModel {

  /** The link text. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String linkText;

  /** The link url. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String linkUrl;

  /** The link url active. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String linkUrlActive;

  /** The alt text. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String altText;

  /** The title. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String title;

  /** The img url. */
  @ValueMapValue(name = "fileReference", injectionStrategy = InjectionStrategy.OPTIONAL)
  private String imgUrl;
  
  /** The image resource. */
  @ChildResource(name = "image", injectionStrategy = InjectionStrategy.OPTIONAL)
  private Resource imageResource;
  
  /** The link behavior. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String linkBehavior;

  /** The enable icon. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String enableIcon;
  
  /** The icon class name. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String iconClassName;

  /** The resource resolver. */
  @SlingObject
  private ResourceResolver resourceResolver;
  
  /**
   * Gets the link text.
   *
   * @return the link text
   */
  public String getLinkText() {
    return linkText;
  }

  /**
   * Sets the link text.
   *
   * @param linkText the new link text
   */
  public void setLinkText(String linkText) {
    this.linkText = linkText;
  }

  /**
   * Gets the link url.
   *
   * @return the link url
   */
  public String getLinkUrl() {
    return CommonUtility.appendHtmlExtensionToPage(resourceResolver, linkUrl);
  }

  /**
   * Gets the link url active.
   *
   * @return the link url active
   */
  public String getLinkUrlActive() {
    return linkUrlActive;
  }

  /**
   * Sets the link url.
   *
   * @param linkUrl the new link url
   */
  public void setLinkUrl(String linkUrl) {
    this.linkUrl = linkUrl;
  }


  /**
   * Sets the link url active.
   *
   * @param linkUrlActive the new link url active
   */
  public void setLinkUrlActive(String linkUrlActive) {
    this.linkUrlActive = linkUrlActive;
  }

  /**
   * Gets the alt text.
   *
   * @return the alt text
   */
  public String getAltText() {
    return altText;
  }

  /**
   * Sets the alt text.
   *
   * @param altText the new alt text
   */
  public void setAltText(String altText) {
    this.altText = altText;
  }

  /**
   * Gets the img url.
   *
   * @return the img url
   */
  public String getImgUrl() {
    return imgUrl;
  }

  /**
   * Sets the img url.
   *
   * @param imgUrl the new img url
   */
  public void setImgUrl(String imgUrl) {
    this.imgUrl = imgUrl;
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
   * Sets the title.
   *
   * @param title the new title
   */
  public void setTitle(String title) {
    this.title = title;
  }
  
  /**
   * Gets the image resource.
   *
   * @return the image resource
   */
  public Resource getImageResource() {
	return imageResource;
  }

  /**
   * Sets the image resource.
   *
   * @param imageResource the new image resource
   */
  public void setImageResource(Resource imageResource) {
	this.imageResource = imageResource;
  }

  /**
   * Gets the link behavior.
   *
   * @return the link behavior
   */
  public String getLinkBehavior() {
	return linkBehavior;
  }

  /**
   * Sets the link behavior.
   *
   * @param linkBehavior the new link behavior
   */
  public void setLinkBehavior(String linkBehavior) {
	this.linkBehavior = linkBehavior;
  }

  /**
   * Gets the enable icon.
   *
   * @return the enable icon
   */
  public String getEnableIcon() {
    return enableIcon;
  }

  /**
   * Sets the enable icon.
   *
   * @param enableIcon the new enable icon
   */
  public void setEnableIcon(String enableIcon) {
    this.enableIcon = enableIcon;
  }

  /**
   * Gets the icon class name.
   *
   * @return the iconClassName
   */
  public String getIconClassName() {
    return iconClassName;
  }

  /**
   * Sets the icon class name.
   *
   * @param iconClassName the iconClassName to set
   */
  public void setIconClassName(String iconClassName) {
    this.iconClassName = iconClassName;
  }
}
