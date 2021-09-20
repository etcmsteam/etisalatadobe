package com.etisalat.core.util;

import com.etisalat.core.constants.PageConstants;
import com.etisalat.core.models.LinkModel;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Util Class
 * <p>
 * A utility class with static methods that do common tasks like string manipulation
 * , date formatting etc
 * </p>
 *
 * @author mtrivedi
 * @since 2021-07-31
 */
public class CommonUtility {

    /**
     * Appends the HTML extension to page
     *
     * @param path Original content path
     * @return Path with HTML extension
     */
    public static String appendHtmlExtensionToPage(ResourceResolver resourceResolver, String path) {
        if (StringUtils.isNotEmpty(path)
                && (path.startsWith(PageConstants.CONTENT)
                && !StringUtils.contains(path, PageConstants.HTML_EXTENSION))) {

            final Optional<Resource> resource = Optional.ofNullable(resourceResolver.getResource(path));
            if (resource.isPresent() && resourceResolver.resolve(path).isResourceType(PageConstants.CQ_Page)) {
                return path + PageConstants.HTML_EXTENSION;
            }
        }
        return path;
    }


    /**
     * Returns generic ListModel list for multifield for different purpose
     *
     * @param childItem Child node name
     * @param res       Parent Resource
     * @return List of LinkModel
     */
    public static List<LinkModel> getLinkItems(String childItem, Resource res) {
        Resource linkParentRes = res.getChild(childItem);
        List<LinkModel> linkModelList = new ArrayList<>();
        if (null != linkParentRes) {
            linkParentRes.listChildren().forEachRemaining(childResource -> {
                LinkModel linkModel = childResource.adaptTo(LinkModel.class);
                if (null != linkModel) {
                    linkModel.setLinkUrl(CommonUtility.appendHtmlExtensionToPage(res.getResourceResolver(), linkModel.getLinkUrl()));
                    linkModelList.add(linkModel);
                }
            });
        }
        return linkModelList;
    }

    /**
     * Returns generic ListModel list for multifield for different purpose
     *
     * @param res link resource
     * @return LinkModel generic Link model
     */
    public static LinkModel getLinkItem(Resource res) {
        return res.adaptTo(LinkModel.class);
    }

    /**
     * private constructor to prevent instantiation of class.
     */
    private CommonUtility() {

    }

}
