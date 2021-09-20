package com.etisalat.core.models;

import com.etisalat.core.util.CommonUtility;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class})
public class ButtonModel {

    public static final String OPEN_SAME_WINDOW = "opensamewindow";

    @SlingObject
    private ResourceResolver resourceResolver;

    @ValueMapValue
    @Optional
    private String linkBehavior;

    @ValueMapValue
    @Optional
    private String ctaNewWindowLink;

    @ValueMapValue
    @Optional
    private String ctaSameWindowLink;

    public String getLink() {
        if (linkBehavior.equals(OPEN_SAME_WINDOW)) {
            return CommonUtility.appendHtmlExtensionToPage(resourceResolver, ctaSameWindowLink);
        }
        return CommonUtility.appendHtmlExtensionToPage(resourceResolver, ctaNewWindowLink);
    }

}
