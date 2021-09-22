package com.etisalat.core.util;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.WCMException;
import io.wcm.testing.mock.aem.junit5.AemContext;

public class CommonTestUtility {
    public static Page createPage(AemContext context, String parentPage, String pageName) throws WCMException {
        return context.pageManager().create(parentPage, pageName,
                "etisalat/templates/homepage", "title1", true);
    }
}
