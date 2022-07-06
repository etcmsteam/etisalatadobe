package com.etisalat.core.servlets;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashMap;
import java.util.Map;

import org.apache.sling.servlethelpers.MockSlingHttpServletRequest;
import org.apache.sling.servlethelpers.MockSlingHttpServletResponse;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import com.etisalat.core.services.impl.CustomFormHandlingServiceImpl;
import com.etisalat.core.services.impl.EtisalatApiServiceImpl;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith({ AemContextExtension.class, MockitoExtension.class })
class SendNotificationServletTest {

	public AemContext context = new AemContext();

	@Mock
	private MockSlingHttpServletRequest request;

	@Mock
	private MockSlingHttpServletResponse response;

	private SendNotificationServlet sendNotificationServlet;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
		Map<String, Object> apiServiceMap = new HashMap<>();
		apiServiceMap.put("contactUsApiUrl", "test/api");
		context.registerInjectActivateService(new EtisalatApiServiceImpl(), apiServiceMap);
		context.registerService(new CustomFormHandlingServiceImpl());
		sendNotificationServlet = context.registerInjectActivateService(new SendNotificationServlet());
		request = context.request();
		response = context.response();
	}

	@Test
	void testDoPostForm() throws Exception {
		assertNotNull(context);
		request.addRequestParameter("test", "form");
		context.create().page("/content/etisalat/en", "/apps/etisalat/page");
		context.currentPage("/content/etisalat/en");

		Assertions.assertDoesNotThrow(() -> sendNotificationServlet.doPost(request, response));
	}
}
