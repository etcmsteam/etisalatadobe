package com.etisalat.core.models.impl;

import com.etisalat.core.models.Footer;
import com.etisalat.core.models.LinkModel;
import com.etisalat.core.models.QuickLinkModel;
import com.etisalat.core.util.CommonUtility;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {
    Footer.class}, resourceType = {FooterImpl.RESOURCE_TYPE})
public class FooterImpl implements Footer {

  /**
   * The resource type.
   */
  protected static final String RESOURCE_TYPE = "etisalat/components/global/meganavigation";

  private static final String QUICKLINKS = "quicklinks";
  private static final String DOWNLOADS = "download";
  private static final String FOLLOW_US = "followus";
  private static final String PAYMENT = "payment";
  private static final String PROMO = "promo";
  private static final String FOOTER_LINKS = "footerLinks";

  @SlingObject
  @Optional
  private Resource res;

  @SlingObject
  private ResourceResolver resourceResolver;

  @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
  private String copyrightText;

  /**
   * Returns Quicklinks list for footer.
   *
   * @return List of QuickLinks
   */
  private List<QuickLinkModel> getQuickLinkItems() {
    Resource quickLinksRes = res.getChild(QUICKLINKS);
    List<QuickLinkModel> quickLinkModelList = new ArrayList<>();
    if (null != quickLinksRes) {
      quickLinksRes.listChildren().forEachRemaining(resource -> {
        QuickLinkModel quickLinkModel = resource.adaptTo(QuickLinkModel.class);
        if (quickLinkModel != null) {
          setSubLinkItems(resource, quickLinkModel);
          quickLinkModelList.add(quickLinkModel);
        }
      });
    }
    return quickLinkModelList;
  }

  /**
   * Sets the Quicklinks Sub link items list.
   *
   * @param itemResource   resource to read quicklinks
   * @param quickLinkModel model object for quicklinks
   */
  private void setSubLinkItems(Resource itemResource, QuickLinkModel quickLinkModel) {
    if (itemResource.hasChildren()) {
      Resource subItemRes = itemResource.getChild(QUICKLINKS);
      List<LinkModel> subItemList = new ArrayList<>();
      if (subItemRes != null) {
        subItemRes.listChildren().forEachRemaining(resource -> {
          LinkModel linkModel = resource.adaptTo(LinkModel.class);
          if (linkModel != null) {
            linkModel.setLinkUrl(
                CommonUtility.appendHtmlExtensionToPage(resourceResolver, linkModel.getLinkUrl()));
          }
          subItemList.add(linkModel);
        });
      }
      quickLinkModel.setLinks(subItemList);
    }

  }

  private LinkModel getPromoItem() {
    Resource promoRes = res.getChild(PROMO);
    if (promoRes != null) {
      LinkModel linkModel = promoRes.adaptTo(LinkModel.class);
      if (linkModel != null) {
        linkModel.setLinkUrl(
            CommonUtility.appendHtmlExtensionToPage(resourceResolver, linkModel.getLinkUrl()));
        return linkModel;
      }
    }
    return null;
  }

  /**
   * @return a copy right text.
   */
  @Override
  public String getCopyrightText() {
    return copyrightText;
  }

  /**
   * @return a promo detail.
   */
  @Override
  public LinkModel getPromo() {
    return getPromoItem();
  }

  @Override
  public List<QuickLinkModel> getQuickLinks() {
    return Collections.unmodifiableList(getQuickLinkItems());
  }

  /**
   * @return a collection of objects representing the download links.
   */
  @Override
  public List<LinkModel> getDownload() {
    return Collections.unmodifiableList(CommonUtility.getLinkItems(DOWNLOADS, res));
  }

  /**
   * @return a collection of objects representing the followUs links.
   */
  @Override
  public List<LinkModel> getFollowUs() {
    return Collections.unmodifiableList(CommonUtility.getLinkItems(FOLLOW_US, res));
  }

  /**
   * @return a collection of objects representing the Payment items.
   */
  @Override
  public List<LinkModel> getPayment() {
    return Collections.unmodifiableList(CommonUtility.getLinkItems(PAYMENT, res));
  }

  /**
   * @return a collection of objects representing the footer links.
   */
  @Override
  public List<LinkModel> getFooterLinks() {
    return Collections.unmodifiableList(CommonUtility.getLinkItems(FOOTER_LINKS, res));
  }
}
