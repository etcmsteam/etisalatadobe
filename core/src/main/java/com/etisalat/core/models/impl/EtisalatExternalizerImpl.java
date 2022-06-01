package com.etisalat.core.models.impl;

import com.day.cq.commons.Externalizer;
import com.etisalat.core.constants.AEConstants;
import com.etisalat.core.models.EtisalatExternalizer;
import com.etisalat.core.services.CustomFormHandlingService;
import com.etisalat.core.services.EtisalatApiConfiguration;
import com.etisalat.core.services.GoogleMapsConfiguration;
import com.etisalat.core.util.CommonUtility;
import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.oak.commons.PropertiesUtil;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

/**
 * The Class ExternalizerModel.
 */
@Component(service = EtisalatExternalizer.class, immediate = true)
public class EtisalatExternalizerImpl implements EtisalatExternalizer {

    private Externalizer externalizer;

    private String authorLink;
    private String publishLink;
    private String domainHiuapp;
    private String domainFivemobile;
    private String domainEwallet;
    private String domainEtisalat;

    private String domain;

    public String getDomainHiuapp() {
        return domainHiuapp;
    }

    public String getDomainFivemobile() {
        return domainFivemobile;
    }

    public String getDomainEwallet() {
        return domainEwallet;
    }

    public String getDomainEtisalat() {
        return domainEtisalat;
    }

    public String getAuthorLink() {
        return authorLink;
    }

    public String getPublishLink() {
        return publishLink;
    }

    @Override
    public String getLinkUrl(String path, ResourceResolver resourceResolver, SlingHttpServletRequest request) {
        String urlWithExtension = CommonUtility.appendHtmlExtensionToPage(resourceResolver, path);
        externalizer = resourceResolver.adaptTo(Externalizer.class);
        if (null != externalizer && StringUtils.isNotBlank(request.getRequestPathInfo().getSelectorString())) {
            String serverName = request.getServerName();
            if (serverName.contains("localhost")){
                urlWithExtension = externalizer.externalLink(resourceResolver,"localhost", urlWithExtension);
            } else if (serverName.contains("hiuapp.ae")){
                urlWithExtension = externalizer.externalLink(resourceResolver,"hiuapp", urlWithExtension);
            } else if (serverName.contains("ewallet.ae")) {
                urlWithExtension = externalizer.externalLink(resourceResolver,"ewallet", urlWithExtension);
            } else if (serverName.contains("fivemobile.ae")) {
                urlWithExtension = externalizer.externalLink(resourceResolver,"fivemobile", urlWithExtension);
            } else {
                urlWithExtension = externalizer.externalLink(resourceResolver,"etisalat", urlWithExtension);
            }
        }
        return urlWithExtension;
    }
}
