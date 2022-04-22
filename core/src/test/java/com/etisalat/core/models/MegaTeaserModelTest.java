package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * JUnit test verifying the MegaTeaserModel
 */
@ExtendWith(AemContextExtension.class)
class MegaTeaserModelTest {
	
	private final AemContext context = new AemContext();
	private static final String CONTENT_ROOT = "/content";
	
	private static final String CURRENT_PAGE = "/content/megateaser";

	private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
	protected static final String TAB_TEASER_1 = TEST_PAGE_CONTAINER_ROOT + "/teaser";
	protected static final String TAB_TEASER_2 = TEST_PAGE_CONTAINER_ROOT + "/empty";
	
	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(MegaTeaserModel.class);		
		context.load().json("/com/etisalat/core/models/MegaTeaserModelTest.json", CONTENT_ROOT);		
	}
	
	@Test
  void testTabImageItems() {
    final String expectedImagePath = "/content/dam/etisalat/sampletest1.png";
    final String expectedTitle = "Support";
    final String expectedPreTitle = "presampletitle";
    final String isActionEnabled = "true";
    final String expectedLinkTarget = "_self";
    final String expectedLinkURL = "/content/etisalat/sample.html";
    final String expectedResourceType = "etisalat/components/teaser";
    final String expectedTitleType = "h3";
    final String expectedText = "Leanmore";
    Resource resource = context.resourceResolver().getResource(TAB_TEASER_1);
    MegaTeaserModel teaser = resource.adaptTo(MegaTeaserModel.class);
    String fileReference = teaser.getFileReference();
    String title = teaser.getTitle();

    teaser.setActionsEnabled(isActionEnabled);
    teaser.setFileReference(expectedImagePath);
    teaser.setTitle(expectedTitle);
    teaser.setPretitle(expectedPreTitle);
    teaser.setActionLinkTarget(expectedLinkTarget);
    teaser.setLinkTarget(expectedLinkTarget);
    teaser.setLinkURL(expectedLinkURL);
    teaser.setTeaserResource(resource);
    teaser.setLink(expectedLinkURL);
    teaser.setTitleType(expectedTitleType);
    teaser.setText(expectedText);
    teaser.setResourceType(expectedResourceType);
    teaser.setBrandTitle(expectedTitle);
    
    assertEquals(expectedImagePath, fileReference);
    assertEquals(expectedTitle, title);
    assertEquals(expectedPreTitle, teaser.getPretitle());
    assertEquals(isActionEnabled, teaser.getActionsEnabled());
    assertEquals(expectedLinkTarget, teaser.getActionLinkTarget());
    assertEquals(expectedLinkTarget, teaser.getLinkTarget());
    assertEquals(expectedLinkURL, teaser.getLinkURL());
    assertEquals(resource.getPath(), teaser.getTeaserResource().getPath());
    assertEquals(expectedResourceType, teaser.getResourceType());
    assertEquals(expectedTitleType,teaser.getTitleType());
    assertEquals(expectedLinkURL,teaser.getLink());
    assertEquals(expectedText,teaser.getText());
    assertEquals(expectedTitle,teaser.getBrandTitle());
  }

	@Test
	void testEmptyImageList() {
		context.currentResource(TAB_TEASER_2);
		MegaTeaserModel teaser = context.request().adaptTo(MegaTeaserModel.class);
		assertNull(teaser);		
	}

}
