package com.etisalat.core.models;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(AemContextExtension.class)
class HeroLinkSectionTest {

    private final AemContext context = new AemContext();

    @BeforeEach
    public void setup() throws Exception {

        context.addModelsForClasses(HeroLinkSection.class);
        context.load().json("/com/etisalat/core/models/HeroLinkSectionTest.json", "/content/etisalat");
        context.currentResource("/content/etisalat/en/jcr:content/root/container/pagenavigation");
    }

    @Test
    void testGetHeroLinkSectionList() {
        HeroLinkSection heroLinkSection = context.request().adaptTo(HeroLinkSection.class);
        List<HeroLinkSectionVO> list = heroLinkSection.getHeroLinkSectionList();
        HeroLinkSectionVO item = list.get(0);
        assertAll(
                () -> assertFalse(list.isEmpty()),
                () -> assertEquals("/content/dam/etisalat/433/quick-pay-recharge.svg", item.iconImage),
                () -> assertEquals("<p>Quick Pay &amp; Recharge</p>", item.iconText),
                () -> assertEquals("_blank", item.getLinkTarget()),
                () -> assertEquals("/content/etisalat/en.html", item.iconLink)
        );
    }
}