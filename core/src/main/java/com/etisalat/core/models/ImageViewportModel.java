package com.etisalat.core.models;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.etisalat.core.util.CommonUtility;

@Model(adaptables = { Resource.class,
		SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ImageViewportModel {

	@ValueMapValue(name = "retinaimage414px/1x/fileReference")
	private String retinaImage414px1x;

	@ValueMapValue(name = "retinaimage414px/2x/fileReference")
	private String retinaImage414px2x;

	@ValueMapValue(name = "retinaimage540px/1x/fileReference")
	private String retinaImage540px1x;

	@ValueMapValue(name = "retinaimage540px/2x/fileReference")
	private String retinaImage540px2x;

	@ValueMapValue(name = "retinaimage768px/1x/fileReference")
	private String retinaImage768px1x;

	@ValueMapValue(name = "retinaimage768px/2x/fileReference")
	private String retinaImage768px2x;

	@ValueMapValue(name = "retinaimage992px/1x/fileReference")
	private String retinaImage992px1x;

	@ValueMapValue(name = "retinaimage992px/2x/fileReference")
	private String retinaImage992px2x;

	@ValueMapValue(name = "retinaimage1024px/1x/fileReference")
	private String retinaImage1024px1x;

	@ValueMapValue(name = "retinaimage1024px/2x/fileReference")
	private String retinaImage1024px2x;

	@ValueMapValue(name = "retinaimage1336px/1x/fileReference")
	private String retinaImage1336px1x;

	@ValueMapValue(name = "retinaimage1336px/2x/fileReference")
	private String retinaImage1336px2x;

	@ValueMapValue(name = "retinaimage1440px/1x/fileReference")
	private String retinaImage1440px1x;

	@ValueMapValue(name = "retinaimage1440px/2x/fileReference")
	private String retinaImage1440px2x;

	@ValueMapValue(name = "retinaimage1920px/1x/fileReference")
	private String retinaImage1920px1x;

	@ValueMapValue(name = "retinaimage1920px/2x/fileReference")
	private String retinaImage1920px2x;

	@ValueMapValue(name = "altTextThreeFourSixViewPorts")
	private String altText;

	@ValueMapValue
	private String viewPortLayout;

	/** The resource resolver. */
	@SlingObject
	private ResourceResolver resourceResolver;

	/**
	 * Returns true, if 4-viewport has a image.
	 * 
	 * @return true
	 */
	public boolean getFourViewportContent() {
		return (StringUtils.isNotBlank(this.retinaImage414px1x) || StringUtils.isNotBlank(this.retinaImage414px2x)
				|| StringUtils.isNotBlank(this.retinaImage540px1x) || StringUtils.isNotBlank(this.retinaImage540px2x)
				|| StringUtils.isNotBlank(this.retinaImage768px1x) || StringUtils.isNotBlank(this.retinaImage768px2x)
				|| StringUtils.isNotBlank(this.retinaImage1440px1x)
				|| StringUtils.isNotBlank(this.retinaImage1440px2x));
	}

	/**
	 * Returns true, if 3-viewport has a image.
	 * 
	 * @return true
	 */
	public boolean getThreeViewportContent() {
		return (StringUtils.isNotBlank(this.retinaImage414px1x) || StringUtils.isNotBlank(this.retinaImage414px2x)
				|| StringUtils.isNotBlank(this.retinaImage768px1x) || StringUtils.isNotBlank(this.retinaImage768px2x)
				|| StringUtils.isNotBlank(this.retinaImage992px1x) || StringUtils.isNotBlank(this.retinaImage992px2x));
	}

	/**
	 * Returns true, if 6-viewport has a image.
	 * 
	 * @return true
	 */
	public boolean getSixViewportContent() {
		return (StringUtils.isNotBlank(this.retinaImage414px1x) || StringUtils.isNotBlank(this.retinaImage414px2x)
				|| StringUtils.isNotBlank(this.retinaImage768px1x) || StringUtils.isNotBlank(this.retinaImage768px2x)
				|| StringUtils.isNotBlank(this.retinaImage1024px1x) || StringUtils.isNotBlank(this.retinaImage1024px2x)
				|| StringUtils.isNotBlank(this.retinaImage1336px1x) || StringUtils.isNotBlank(this.retinaImage1336px2x)
				|| StringUtils.isNotBlank(this.retinaImage1440px1x) || StringUtils.isNotBlank(this.retinaImage1440px2x)
				|| StringUtils.isNotBlank(this.retinaImage1920px1x)
				|| StringUtils.isNotBlank(this.retinaImage1920px2x));
	}

	public String getRetinaImage414px1x() {
		return retinaImage414px1x;
	}

	public String getRetinaImage414px2x() {
		return retinaImage414px2x;
	}

	public String getRetinaImage540px1x() {
		return retinaImage540px1x;
	}

	public String getRetinaImage540px2x() {
		return retinaImage540px2x;
	}

	public String getRetinaImage768px1x() {
		return retinaImage768px1x;
	}

	public String getRetinaImage768px2x() {
		return retinaImage768px2x;
	}

	public String getRetinaImage992px1x() {
		return retinaImage992px1x;
	}

	public String getRetinaImage992px2x() {
		return retinaImage992px2x;
	}

	public String getRetinaImage1024px1x() {
		return retinaImage1024px1x;
	}

	public String getRetinaImage1024px2x() {
		return retinaImage1024px2x;
	}

	public String getRetinaImage1336px1x() {
		return retinaImage1336px1x;
	}

	public String getRetinaImage1336px2x() {
		return retinaImage1336px2x;
	}

	public String getRetinaImage1440px1x() {
		return retinaImage1440px1x;
	}

	public String getRetinaImage1440px2x() {
		return retinaImage1440px2x;
	}

	public String getRetinaImage1920px1x() {
		return retinaImage1920px1x;
	}

	public String getRetinaImage1920px2x() {
		return retinaImage1920px2x;
	}

	public String getSixViewPortAltText() {
		return getAltText("6-viewport", retinaImage1920px1x, retinaImage1920px2x);
	}

	public String getFourViewPortAltText() {
		return getAltText("4-viewport", retinaImage1440px1x, retinaImage1440px2x);
	}

	public String getThreeViewPortAltText() {
		return getAltText("3-viewport", retinaImage992px1x, retinaImage992px2x);
	}

	private String getAltText(String viewPortType, String retinaImage1x, String retinaImage2x) {
		if (StringUtils.isNotBlank(viewPortLayout) && viewPortLayout.equals(viewPortType)) {
			if (StringUtils.isNotBlank(retinaImage1x) && StringUtils.isBlank(retinaImage2x)) {
				return CommonUtility.getImageAlt(altText, resourceResolver, retinaImage1x);
			} else if (StringUtils.isBlank(retinaImage1x) && StringUtils.isNotBlank(retinaImage2x)) {
				return CommonUtility.getImageAlt(altText, resourceResolver, retinaImage2x);
			} else if (StringUtils.isNotBlank(retinaImage1x) && StringUtils.isNotBlank(retinaImage2x)) {
				return CommonUtility.getImageAlt(altText, resourceResolver, retinaImage2x);
			}
		}
		return StringUtils.EMPTY;
	}

}
