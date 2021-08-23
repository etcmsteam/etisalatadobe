package com.etisalat.core.models;

import org.apache.commons.lang3.StringUtils;

import com.adobe.cq.sightly.WCMUsePojo;

public class ErrorHandlerModel extends WCMUsePojo {

	private String errorPage;

	private static final String DEFAULT_STATUS_CODE = "404";

	@Override
	public void activate() throws Exception {
		String errorCode = StringUtils.isNotBlank(get("errorCode", String.class)) ? get("errorCode", String.class)
				: DEFAULT_STATUS_CODE;
		String errorPageURL = "/content/etisalat/ae/en/error/" + errorCode;

		getResponse().setStatus(Integer.parseInt(errorCode));
		getResponse().setContentType("text/html");

		setErrorPage(errorPageURL);
	}

	/**
	 * @return the errorPage
	 */
	public String getErrorPage() {
		return errorPage;
	}

	/**
	 * @param errorPage the errorPage to set
	 */
	public void setErrorPage(String errorPage) {
		this.errorPage = errorPage;
	}

}
