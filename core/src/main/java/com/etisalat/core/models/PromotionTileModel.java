package com.etisalat.core.models;

import com.etisalat.core.constants.PageConstants;
import com.etisalat.core.util.CommonUtility;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class})
public class PromotionTileModel {

    @SlingObject
    private ResourceResolver resourceResolver;

    @ValueMapValue
    @Optional
    private String promotionLinkBehavior;

    @ValueMapValue
    @Optional
    private String promotionCTALinkNewWindow;

    @ValueMapValue
    @Optional
    private String promotionCTALinkSameWindow;

    public String getLink() {
        if (promotionLinkBehavior.equals(PageConstants.OPEN_SAME_WINDOW)) {
            return CommonUtility.appendHtmlExtensionToPage(resourceResolver, promotionCTALinkSameWindow);
        }
        return CommonUtility.appendHtmlExtensionToPage(resourceResolver, promotionCTALinkNewWindow);
    }

}
