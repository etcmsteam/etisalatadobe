package com.etisalat.core.util;

import com.etisalat.core.constants.AEConstants;
import com.etisalat.core.constants.PageConstants;
import com.etisalat.core.models.LinkModel;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.day.cq.wcm.api.NameConstants;

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

	public static String getRedirectURLFromForm(String json) {
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
