package com.etisalat.core.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.NameConstants;
import com.etisalat.core.constants.AEConstants;
import com.etisalat.core.constants.PageConstants;
import com.etisalat.core.models.FixedNavigtaionMultifieldModel;
import com.etisalat.core.models.LinkModel;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

/**
 * Util Class
 * <p>
 * A utility class with static methods that do common tasks like string manipulation , date
 * formatting etc
 * </p>
 *
 * @author mtrivedi
 * @since 2021-07-31
 */
public final class CommonUtility {
	
	private static final Logger LOG = LoggerFactory.getLogger(CommonUtility.class);

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
      if (resource.isPresent() && resourceResolver.resolve(path)
          .isResourceType(NameConstants.NT_PAGE)) {
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
          linkModel.setLinkUrl(CommonUtility
              .appendHtmlExtensionToPage(res.getResourceResolver(), linkModel.getLinkUrl()));
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
   * Returns Category Tag Title.
   *
   * @param request SlingHttpServletRequest 
   * @param category Category tag name
   * @return Category Tag Title
   */
  public static String getCategoryTagTitle(SlingHttpServletRequest request, String category) {
	final TagManager tagManager = request.getResourceResolver().adaptTo(TagManager.class);
	  if (StringUtils.isNotBlank(category) && null != tagManager) {
	    final Tag tag = tagManager.resolve(category);
	     if (null != tag) {
	        category = tag.getTitle();
	     }
	  }
	return category;
  }

  /**
   * Returns generic Fixed Navigation list for multifield for different purpose
   *
   * @param childItem Child node name
   * @param res       Parent Resource
   * @param resourceReolver ResourceResolver
   * @return List of LinkModel
   */
  public static List<FixedNavigtaionMultifieldModel> getFixedNavigationItems(String childItem, Resource res,ResourceResolver resourceResolver) {
	Resource pageItemRes = res.getChild(childItem);
    List<FixedNavigtaionMultifieldModel> pageItemList = new ArrayList<>();
    if (null != pageItemRes) {
      pageItemRes.listChildren().forEachRemaining(resource -> {
        FixedNavigtaionMultifieldModel pageModel = resource
            .adaptTo(FixedNavigtaionMultifieldModel.class);
        if (StringUtils.isNotBlank(pageModel.getNavigationLink())) {
          pageModel.setNavigationLink(CommonUtility
              .appendHtmlExtensionToPage(resourceResolver, pageModel.getNavigationLink()));
        }
        pageItemList.add(pageModel);
      });
    }
    return Collections.unmodifiableList(pageItemList);
  }
  
	public static String getCaptchaResponse(String json) {
		String captchaValue = AEConstants.CAPTCHA_NULL;
		try {
			if(null != json) {
				JsonObject jsonObject = new JsonParser().parse(json).getAsJsonObject();	
				if(jsonObject.has(AEConstants.CAPTCHA_NAME)) {
					JsonElement captchaElement = jsonObject.get(AEConstants.CAPTCHA_NAME);				
					captchaValue = captchaElement.getAsString();
				}
			}
		}
		catch (JsonSyntaxException e) {
			LOG.error("Json Syntax error {}", e.getMessage());
		}
		catch (JsonParseException e) {
			LOG.error("Json parse error {}", e.getMessage());
		}
		return captchaValue;
	}

	public static String getRedirectUrl(String resourcePath, String json) {
		String redirectURL = "";
		if(!StringUtils.isEmpty(getRedirectURLFromForm(json))){
			redirectURL = getRedirectURLFromForm(json);
			if(redirectURL.contains(AEConstants.HTML_CONSTANT) || redirectURL.contains(AEConstants.JSP_CONSTANT)) {
				return redirectURL;
			}
			else if(redirectURL.contains(AEConstants.CONTENT)) {
				return redirectURL.concat(AEConstants.HTML_CONSTANT);
			}
			else {
				if(resourcePath != null) {
					if(resourcePath.contains(AEConstants.CONTENT)) {
						return resourcePath.concat(AEConstants.HTML_CONSTANT);
					}
				}				
			}					
		}
		else {
			if(resourcePath != null) {
				if(resourcePath.contains(AEConstants.CONTENT)) {
					return resourcePath.concat(AEConstants.HTML_CONSTANT);
				}
			}				
		}	
		return redirectURL;
	}

	private static String getRedirectURLFromForm(String json) {
		String redirectValue = "";
		try {
			if(null != json) {
				JsonObject jsonObject = new JsonParser().parse(json).getAsJsonObject();	
				if(jsonObject.has(AEConstants.REDIRECT_NAME)) {
					JsonElement captchaElement = jsonObject.get(AEConstants.REDIRECT_NAME);				
					redirectValue = captchaElement.getAsString();
				}
			}
		}
		catch (JsonSyntaxException e) {
			LOG.error("Json Syntax error {}", e.getMessage());
		}
		catch (JsonParseException e) {
			LOG.error("Json parse error {}", e.getMessage());
		}
		return redirectValue;
	}

  
  /**
   * private constructor to prevent instantiation of class.
   */
  private CommonUtility() {

  }

}