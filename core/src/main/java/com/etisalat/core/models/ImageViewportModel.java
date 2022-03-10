package com.etisalat.core.models;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

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

}
