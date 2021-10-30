package com.etisalat.core.models;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.etisalat.core.util.CommonUtility;

@Model(adaptables = { Resource.class,
		SlingHttpServletRequest.class })

public class TileModel {

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String tiletitle;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String ctatext;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String text;

	@ChildResource(name="image",injectionStrategy= InjectionStrategy.OPTIONAL)
	private Resource tileImageResource;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String tileCTALinkNewWindow;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String tileCTALinkSameWindow;
	
	@SlingObject	
	protected Resource currentResource;

	@SlingObject
	private ResourceResolver resourceResolver;
	
	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getTiletitle() {
		return tiletitle;
	}

	public void setTiletitle(String tiletitle) {
		this.tiletitle = tiletitle;
	}

	public String getCtatext() {
		return ctatext;
	}

	public void setCtatext(String ctatext) {
		this.ctatext = ctatext;
	}

	/**
	 * @return the tileImageResource
	 */
	public Resource getTileImageResource() {
		return tileImageResource;
	}

	/**
	 * @param tileImageResource the tileImageResource to set
	 */
	public void setTileImageResource(Resource tileImageResource) {
		this.tileImageResource = tileImageResource;
	}

	/**
	 * @return the tileCTALinkNewWindow
	 */
	public String getTileCTALinkNewWindow() {
		return CommonUtility.appendHtmlExtensionToPage(resourceResolver,tileCTALinkNewWindow);
	}

	/**
	 * @return the tileCTALinkSameWindow
	 */
	public String getTileCTALinkSameWindow() {
		return CommonUtility.appendHtmlExtensionToPage(resourceResolver,tileCTALinkSameWindow);
	}

	/**
	 * @param tileCTALinkNewWindow the tileCTALinkNewWindow to set
	 */
	public void setTileCTALinkNewWindow(String tileCTALinkNewWindow) {
		this.tileCTALinkNewWindow = tileCTALinkNewWindow;
	}

	/**
	 * @param tileCTALinkSameWindow the tileCTALinkSameWindow to set
	 */
	public void setTileCTALinkSameWindow(String tileCTALinkSameWindow) {
		this.tileCTALinkSameWindow = tileCTALinkSameWindow;
	}
	
	public String getTileBoxContainerLayout() {		
		Resource tileContainerResource = currentResource.getParent();
		if (null != tileContainerResource
				&& tileContainerResource.getResourceType().equals("etisalat/components/tilecontainer")) {
              return tileContainerResource.getValueMap().get("tileBoxLayout",StringUtils.EMPTY);
		}
		return StringUtils.EMPTY;
	}

}
