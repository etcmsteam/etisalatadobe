package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import org.apache.commons.lang3.StringUtils;
import java.util.HashMap;
import java.util.Map;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.day.cq.dam.api.DamConstants;

import com.etisalat.core.services.EtisalatApiService;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
public class CommonLinkModelTest {
    private final AemContext context = new AemContext();

    @Mock
    private EtisalatApiService etisalatApiService;
    
    @InjectMocks
    private CommonLinkModel commonLinkModel;
    
    @BeforeEach
    public void setup() throws Exception {
        context.addModelsForClasses(CommonLinkModel.class);
        context.load().json("/com/etisalat/core/models/CommonLinksModel.json", "/content/etisalat");
        context.currentPage("/content/etisalat/en");
    }

    @Test
    void testInternalLink() {
        String internalLink = "/content/etisalat/en";
        context.request().setAttribute("link", internalLink);
        CommonLinkModel model = context.request().adaptTo(CommonLinkModel.class);
        assertEquals(internalLink + ".html", model.getLink());
    }

    @Test
    void testExternalLink() {
        String externalLink = "https://www.google.com/";
        context.request().setAttribute("link", externalLink);
        CommonLinkModel model = context.request().adaptTo(CommonLinkModel.class);
        assertEquals(externalLink, model.getLink());
    }

    @Test
    void testVideoLink() {
        String videoLink = "https://www.youtube.com/embed/Xwr22z1hysY";
        context.request().setAttribute("link", videoLink);
        CommonLinkModel model = context.request().adaptTo(CommonLinkModel.class);
        assertFalse(model.isVideo());        
    }
    
    @Test
    void testXFLanguageCode() {
    	String expectedLanguageCode = "ar";
    	context.load().json("/com/etisalat/core/models/CommonLinksModel.json", "/content/experience-fragments/etisalat/language-master/ar/business");
        context.currentPage("/content/experience-fragments/etisalat/language-master/ar/business/fragment-template-page");
        CommonLinkModel model = context.request().adaptTo(CommonLinkModel.class);
        assertEquals(expectedLanguageCode, model.getXFLanguageCode());        
    }
    
    @Test
    void testXFLanguageCodeCurrentPageLengthCheck() {
    	context.load().json("/com/etisalat/core/models/CommonLinksModel.json", "/content/experience-fragments");
        context.currentPage("/content/experience-fragments/etisalat");
        CommonLinkModel model = context.request().adaptTo(CommonLinkModel.class);
        assertEquals(StringUtils.EMPTY, model.getXFLanguageCode());   
    }
    
    @Test
    void testHostName() {
      MockitoAnnotations.initMocks(this);
      String hostName = "https://qacms-uat.etisalat.ae";      
      when(etisalatApiService.getApiHostname()).thenReturn(hostName);     
      assertEquals(hostName, commonLinkModel.getApiHostname());
    }
	
	@Test
	void testVideoLinkTrueCondition() {
		Map<String, Object> assetMeta = new HashMap<>();
		assetMeta.put(DamConstants.DC_TITLE, "Video");
		context.create().asset("/content/dam/etisalat/offerbanner/bg-cards/video.mp4", 100, 100, "video/mp4",
				assetMeta);
		String videoLink = "/content/dam/etisalat/offerbanner/bg-cards/video.mp4";
		context.request().setAttribute("link", videoLink);
		CommonLinkModel model = context.request().adaptTo(CommonLinkModel.class);
		assertTrue(model.isVideo());
	}
	
	@Test
	void testVideoLinkAssetPathEmpty() {
		String videoLink = StringUtils.EMPTY;
		context.request().setAttribute("link", videoLink);
		CommonLinkModel model = context.request().adaptTo(CommonLinkModel.class);
		assertFalse(model.isVideo());
	}
	
	@Test
	void testVideoLinkAssetResourceNull() {
		String videoLink = "/content/dam/etisalat/offerbanner/bg-cards/video.mp4";
		context.request().setAttribute("link", videoLink);
		CommonLinkModel model = context.request().adaptTo(CommonLinkModel.class);
		assertFalse(model.isVideo());
	}

    @Test
    void testGaApiKey() {
        MockitoAnnotations.initMocks(this);
        String gaApiKey = "GTM-5M52SJ";
        when(etisalatApiService.getGaApiKey()).thenReturn(gaApiKey);
        assertEquals(gaApiKey, commonLinkModel.getGaApiKey());
    }

    @Test
    void testAutoSuggestEndpointUrl() {
        MockitoAnnotations.initMocks(this);
        String asEndpointUrl = "/b2c/autoSuggest.service";
        when(etisalatApiService.getAutoSuggestEndpointUrl()).thenReturn(asEndpointUrl);
        assertEquals(asEndpointUrl, commonLinkModel.getAutoSuggestEndpointUrl());
    }

    @Test
    void testSearchEndpointUrl() {
        MockitoAnnotations.initMocks(this);
        String gsearchEndpointUrl = "/b2c/guidedSearchRequest.service";
        when(etisalatApiService.getSearchEndpointUrl()).thenReturn(gsearchEndpointUrl);
        assertEquals(gsearchEndpointUrl, commonLinkModel.getSearchEndpointUrl());
    }
}
