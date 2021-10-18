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

    public static final String HERO_LINKS_SECTION = "heroLinksSection";
    public static final String ICON_IMAGE = "iconImage";
    public static final String ICON_LINK = "iconLink";
    public static final String ICON_TEXT = "iconText";

    public List<HeroLinkSectionVO> getHeroLinkSectionList() {
        List<HeroLinkSectionVO> linkSectionPojoList = new ArrayList<>();
        Resource heroLinksSection = resource.getChild(HERO_LINKS_SECTION);
        Iterator<Resource> iterator = heroLinksSection.listChildren();
        while (iterator.hasNext()) {
            Resource item = iterator.next();
            HeroLinkSectionVO heroLinkSectionVO = new HeroLinkSectionVO();
            heroLinkSectionVO.setIconImage(item.getValueMap().get(ICON_IMAGE, String.class));
            heroLinkSectionVO.setIconText(item.getValueMap().get(ICON_TEXT, String.class));
            heroLinkSectionVO.setIconLink(CommonUtility.appendHtmlExtensionToPage(resourceResolver, item.getValueMap().get(ICON_LINK, String.class)));
            linkSectionPojoList.add(heroLinkSectionVO);
        }
        return linkSectionPojoList;
    }

}
