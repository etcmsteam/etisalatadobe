package com.etisalat.core.models;

import com.etisalat.core.util.CommonUtility;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


@Model(adaptables = {Resource.class, SlingHttpServletRequest.class})
public class HeroLinkSection {

    @SlingObject
    @Optional
    private Resource resource;


    @SlingObject
    ResourceResolver resourceResolver;

    public List<HeroLinkSectionPojo> getHeroLinkSectionList() {
        List<HeroLinkSectionPojo> linkSectionPojoList = new ArrayList<>();
        Resource heroLinksSection = resource.getChild("heroLinksSection");
        Iterator<Resource> iterator = heroLinksSection.listChildren();
        while (iterator.hasNext()) {
            Resource item = iterator.next();
            HeroLinkSectionPojo pojo = new HeroLinkSectionPojo();
            pojo.setIconImage(item.getValueMap().get("iconImage", String.class));
            pojo.setIconText(item.getValueMap().get("iconText", String.class));
            pojo.setIconLink(CommonUtility.appendHtmlExtensionToPage(resourceResolver, item.getValueMap().get("iconLink", String.class)));
            linkSectionPojoList.add(pojo);
        }
        return linkSectionPojoList;
    }

}
