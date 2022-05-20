package com.etisalat.core.models;

import com.day.cq.commons.Externalizer;
import com.day.cq.wcm.api.Page;
import com.etisalat.core.constants.PageConstants;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.osgi.service.component.annotations.Reference;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.util.Map;

/**
 * The Class ExternalizerModel.
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ExternalizerModel {

    @SlingObject
    ResourceResolver resourceResolver;

    @Self
    private SlingHttpServletRequest slingRequest;

    @Reference
    Externalizer externalizer;

    @Inject
    @Default(values = {""})
    private String url;

    @Inject
    private Resource resource;

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



    @PostConstruct
    protected void init() {

         externalizer = resourceResolver.adaptTo(Externalizer.class);
         String requestedServerName = slingRequest.getServerName();
         String selector = slingRequest.getRequestPathInfo().getSelectorString();

         this.authorLink = externalizer.authorLink(resourceResolver, url);
         this.publishLink = externalizer.publishLink(resourceResolver, url);
         this.domainHiuapp = externalizer.externalLink(resourceResolver,"hiuapp", url);
         this.domainFivemobile = externalizer.externalLink(resourceResolver,"fivemobile", url);
         this.domainEwallet = externalizer.externalLink(resourceResolver,"ewallet", url);
         this.domainEtisalat = externalizer.externalLink(resourceResolver,"etisalat", url);
         System.out.println(resource.getPath());
         System.out.println("inside post");
    }



}
