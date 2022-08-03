package com.etisalat.core.models;

public class IconCardVO {

  private String cardTitle;
  private String cardLink;
  private String cardIcon;
  private String linkBehavior;
  private String howToTitle;
  private String howToDesc;
  private String howToIcon;

  public String getLinkBehavior() {
    return linkBehavior;
  }

  public void setLinkBehavior(String linkBehavior) {
    this.linkBehavior = linkBehavior;
  }

  public String getCardTitle() {
    return cardTitle;
  }

  public void setCardTitle(String cardTitle) {
    this.cardTitle = cardTitle;
  }

  public String getCardLink() {
    return cardLink;
  }

  public void setCardLink(String cardLink) {
    this.cardLink = cardLink;
  }

  public String getCardIcon() {
    return cardIcon;
  }

  public void setCardIcon(String cardIcon) {
    this.cardIcon = cardIcon;
  }

  public String getHowToTitle() {
    return howToTitle;
  }

  public void setHowToTitle(String howToTitle) {
    this.howToTitle = howToTitle;
  }

  public String getHowToDesc() {
    return howToDesc;
  }

  public void setHowToDesc(String howToDesc) {
    this.howToDesc = howToDesc;
  }

  public String getHowToIcon() {
    return howToIcon;
  }

  public void setHowToIcon(String howToIcon) {
    this.howToIcon = howToIcon;
  }
}
