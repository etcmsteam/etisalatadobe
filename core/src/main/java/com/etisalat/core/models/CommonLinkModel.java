package com.etisalat.core.models;

import com.etisalat.core.util.CommonUtility;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
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

    /** The resource resolver. */
    @SlingObject
    ResourceResolver resourceResolver;

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

}
