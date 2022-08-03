package com.etisalat.core.models.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.commons.lang3.StringUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.etisalat.core.models.CustomForm;
import com.etisalat.core.services.impl.EtisalatApiServiceImpl;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the CustomFormImpl Class
 */
@ExtendWith(AemContextExtension.class)
class CustomFormImplTest {

	private final AemContext context = new AemContext();

	private static final String CONTENT_ROOT = "/content";
	private static final String CURRENT_PAGE = "/content/formcontainer";
	private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container_1";
	private static final String TEST_PAGE_CONTAINER_ROOT2 = CURRENT_PAGE + "/jcr:content/root/container_2";
	private static final String TEST_PAGE_CONTAINER_ROOT3 = CURRENT_PAGE + "/jcr:content/root/container_3";
	private static final String TEST_PAGE_CONTAINER_ROOT4 = CURRENT_PAGE + "/jcr:content/root/container_4";
	private static final String CARD_DATA = TEST_PAGE_CONTAINER_ROOT + "/container";
	private static final String CARD_DATA2 = TEST_PAGE_CONTAINER_ROOT2 + "/container";
	private static final String CARD_DATA3 = TEST_PAGE_CONTAINER_ROOT3 + "/container";
	private static final String CARD_DATA4 = TEST_PAGE_CONTAINER_ROOT4 + "/container";
	private static final String CARD_DATA5 = "/content/formcontainer1";

	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(CustomFormImpl.class);
		context.load().json("/com/etisalat/core/models/CustomFormImplTest.json", CONTENT_ROOT);	
		context.registerInjectActivateService( new EtisalatApiServiceImpl(), "getContactUsApiUrl","testservice",
				  "getProxyApiUrl","testservice",
				  "getSetTimeout","7000"); 
	}

	@Test
	void customFormMethods() {
		context.currentResource(CARD_DATA);
		final String expectedRedirectUrl = "/content/formcontainer";
		final String expectedFormId = "formid";
		final String expectedFormAction = "/content/formcontainer/_jcr_content.sendnotification.html";
		final String expectedSuccessMessageOptions = "proxy";
		final String expectedCustomSuccessMessage = "Success";
		final String expectedCustomErrorMessage = "Fail";
		CustomForm customForm = context.request().adaptTo(CustomForm.class);
		String actualRedirectUrl = customForm.getRedirectUrl();
		String actualFormId = customForm.getFormId();
		String actualFormAction = customForm.getFormAction();
		final String actualSuccessMessageOptions = customForm.getSuccessMessageOptions();
		final String actualCustomSuccessMessage = customForm.getCustomSuccessMessage();
		final String actualCustomErrorMessage = customForm.getCustomErrorMessage();
		assertEquals(expectedRedirectUrl, actualRedirectUrl);
		assertEquals(expectedFormId, actualFormId);
		assertEquals(expectedFormAction, actualFormAction);
		assertEquals(expectedSuccessMessageOptions, actualSuccessMessageOptions);
		assertEquals(expectedCustomSuccessMessage, actualCustomSuccessMessage);
		assertEquals(expectedCustomErrorMessage, actualCustomErrorMessage);
	}
	
	@Test
	void customFormMethodsCase2() {
		context.currentResource(CARD_DATA);
		context.create().page("/content/etisalat/en", "/apps/etisalat/page");
		context.currentPage("/content/etisalat/en");
		final String expectedRedirectUrl = "/content/etisalat/en";
		final String expectedFormId = "new_form";
		final String expectedFormAction = "/content/etisalat/en.html";		
		CustomForm customForm = context.request().adaptTo(CustomForm.class);
		String actualRedirectUrl = customForm.getRedirectUrl();
		String actualFormId = customForm.getFormId();
		String actualFormAction = customForm.getFormAction();		
		assertEquals(expectedRedirectUrl, actualRedirectUrl);
		assertEquals(expectedFormId, actualFormId);
		assertEquals(expectedFormAction, actualFormAction);
	}
	
	@Test
	void customFormMethodsCase3() {
		context.currentResource(CARD_DATA2);
		context.create().page("/content/etisalat/en", "/apps/etisalat/page");
		context.currentPage("/content/etisalat/en");
		final String expectedRedirectUrl = "/content/etisalat/en";
		final String expectedFormId = "new_form";
		final String expectedFormAction = "/content/etisalat/en.html";		
		CustomForm customForm = context.request().adaptTo(CustomForm.class);
		String actualRedirectUrl = customForm.getRedirectUrl();
		String actualFormId = customForm.getFormId();
		String actualFormAction = customForm.getFormAction();		
		assertEquals(expectedRedirectUrl, actualRedirectUrl);
		assertEquals(expectedFormId, actualFormId);
		assertEquals(expectedFormAction, actualFormAction);
	}
	
	@Test
	void customGetRedirectUrl() {
		context.currentResource(CARD_DATA3);
		final String expectedRedirectUrl = "/content/hiuapp/language-master/en/test2";
		CustomForm customForm = context.request().adaptTo(CustomForm.class);
		String actualRedirectUrl = customForm.getRedirectUrl();
		assertEquals(expectedRedirectUrl, actualRedirectUrl);
	}
	
	@Test
	void customGetFormActionElseCondition() {
		context.currentResource(CARD_DATA4);
		final String expectedFormAction = "testservice";
		CustomForm customForm = context.request().adaptTo(CustomForm.class);
		String actualFormAction = customForm.getFormAction();
		assertEquals(expectedFormAction, actualFormAction);
	}
	
	@Test
	void customGetRedirectUrlEmpty() {
		context.currentResource(CARD_DATA5);
		final String expectedRedirectUrl = StringUtils.EMPTY;
		CustomForm customForm = context.request().adaptTo(CustomForm.class);
		String actualRedirectUrl = customForm.getRedirectUrl();
		assertEquals(expectedRedirectUrl, actualRedirectUrl);
	}
}
