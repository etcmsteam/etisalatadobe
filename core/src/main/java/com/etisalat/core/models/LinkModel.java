package com.etisalat.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.Self;
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
  
  /** The link target. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String linkTarget;
  
  /** The quickaccesslink url. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String quickaccesslinkUrl;
  
  /** The qatitle. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String qatitle;
  
  /** The file reference. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL, name = "fileReference")
  private String qaFileReference;
  
  /** The teaser title. */
  @ValueMapValue(name="jcr:title", injectionStrategy = InjectionStrategy.OPTIONAL)
  private String teaserTitle;
  
  /** The teaser eisalat description. */
  @ValueMapValue(name="jcr:description", injectionStrategy = InjectionStrategy.OPTIONAL)
  private String teaserDescription;
  
  /** The teaser title type. */
  @ValueMapValue(name="titleType", injectionStrategy = InjectionStrategy.OPTIONAL)
  private String teaserTitleType;
  
  /** The resource. */
  @Self
  private Resource resource;
  
  /** The view port layout. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String viewPortLayout;
  
  /** The desc paragraph style. */
  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String descParagraphStyle;
  
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

  /**
   * Gets the link target.
   *
   * @return the link target
   */
  public String getLinkTarget() {
	return linkTarget;
  }

  /**
   * Gets the quickaccesslink url.
   *
   * @return the quickaccesslink url
   */
  public String getQuickaccesslinkUrl() {
	return CommonUtility.appendHtmlExtensionToPage(resourceResolver, quickaccesslinkUrl);
  }

  /**
   * Gets the qatitle.
   *
   * @return the qatitle
   */
  public String getQatitle() {
	return qatitle;
  }

  /**
   * Gets the qa file reference.
   *
   * @return the qa file reference
   */
  public String getQaFileReference() {
	return qaFileReference;
  }

  /**
   * Gets the teaser title.
   *
   * @return the teaser eisalat title
   */
  public String getTeaserTitle() {
	return teaserTitle;
  }
	
  /**
   * Gets the teaser eisalat description.
   *
   * @return the teaser eisalat description
   */
  public String getTeaserDescription() {
	return teaserDescription;
  }

  /**
   * Gets the teaser eisalat title type.
   *
   * @return the teaser eisalat title type
   */
  public String getTeaserTitleType() {
	return teaserTitleType;
  }

/**
   * Gets the resource.
   *
   * @return the resource
   */
  public Resource getResource() {
	return resource;
  }

  /**
   * Gets the desc paragraph style.
   *
   * @return the desc paragraph style
   */
  public String getDescParagraphStyle() {
	return descParagraphStyle;
  }

  /**
   * Gets the view port layout.
   *
   * @return the view port layout
   */
  public String getViewPortLayout() {
	return viewPortLayout;
  }

}
