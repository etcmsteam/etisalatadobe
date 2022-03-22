package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
public class CommonLinkModelTest {
    private final AemContext context = new AemContext();

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
}
