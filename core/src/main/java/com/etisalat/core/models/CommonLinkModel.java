package com.etisalat.core.models;

import com.day.cq.wcm.api.Page;
import com.etisalat.core.services.EtisalatApiService;
import com.etisalat.core.util.CommonUtility;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import javax.inject.Inject;

/**
 * The Class CommonLinkModel.
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CommonLinkModel {

    /** The link. */
    @Inject
    private String link;
    
    /** The current page. */
    @ScriptVariable
    private Page currentPage;

    /** The resource resolver. */
    @SlingObject
    ResourceResolver resourceResolver;
    
    /** The etisalat api service. */
    @OSGiService
    private EtisalatApiService etisalatApiService;

    /**
     * Gets the link.
     *
     * @return the link
     */
    public String getLink() {
        return CommonUtility.appendHtmlExtensionToPage(resourceResolver, link);
    }
    
    /**
     * Checks if is video.
     *
     * @return true, if is video
     */
    public boolean isVideo() {
      return CommonUtility.checkAssetIsVideo(resourceResolver, link);
    }

    /**
     * Gets the XF language code from the fragment path.
     *
     * @return the XF language code
     */
	public String getXFLanguageCode() {
		String pagePath = currentPage.getPath();
		String[] pagePathArray = pagePath.split("/");
		if (pagePathArray.length > 4) {
			return pagePathArray[5];
		}
		return StringUtils.EMPTY;
	}
	
	/**
	 * Gets the api hostname.
	 *
	 * @return the api hostname
	 */
	public String getApiHostname() {
	  
	  return etisalatApiService.getApiHostname();
	}
	
  /**
   * Gets the search endpoint url.
   *
   * @return the search endpoint url
   */
  public String getSearchEndpointUrl() {

    return etisalatApiService.getSearchEndpointUrl();
  }

  /**
   * Gets the auto suggest endpoint url.
   *
   * @return the auto suggest endpoint url
   */
  public String getAutoSuggestEndpointUrl() {

    return etisalatApiService.getAutoSuggestEndpointUrl();
  }
}
