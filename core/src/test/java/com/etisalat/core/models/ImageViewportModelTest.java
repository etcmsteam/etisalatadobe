package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.impl.ResourceTypeBasedResourcePicker;
import org.apache.sling.models.spi.ImplementationPicker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;


@ExtendWith(AemContextExtension.class)
public class ImageViewportModelTest {

  private final AemContext context = new AemContext();
  
  private static final String CONTENT_ROOT = "/content";
  private static final String CURRENT_PAGE = "/content/viewport";

  private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
  protected static final String SIX_IMAGE_VIEWPORT_DATA = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatviewport";
  protected static final String FOUR_IMAGE_VIEWPORT_DATA = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatfourviewport";
  protected static final String THREE_IMAGE_VIEWPORT_DATA = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatthreeviewport";
  
  
  @BeforeEach
  public void setup() throws Exception {
    context.addModelsForClasses(ImageViewportModel.class);
    context.load().json("/com/etisalat/core/models/ImageViewportModelTest.json", CONTENT_ROOT);
    context.registerService(ImplementationPicker.class, new ResourceTypeBasedResourcePicker());

  }
  
  @Test
  void testImageSixViewports() {
    String expectImage414px = "/content/dam/etisalat/offerbanner/bg-cards/414x200.jpg";
    String expectImage768px = "/content/dam/etisalat/offerbanner/bg-cards/768x200.jpg";
    String expectImage1024px = "/content/dam/etisalat/offerbanner/bg-cards/1024x363.jpg";
    String expectImage1366px = "/content/dam/etisalat/offerbanner/bg-cards/1366x363.jpg";
    String expectImage1440px = "/content/dam/etisalat/offerbanner/bg-cards/1440x363.jpg";
    String expectImage1920px = "/content/dam/etisalat/offerbanner/bg-cards/1920x363.jpg";
    String expectImage1920AltText = "image1920AltText";

    Resource resource = context.resourceResolver().getResource(SIX_IMAGE_VIEWPORT_DATA);
    ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
    String actualImage1024px = item.getImage1024px();
    String actualImage1366px = item.getImage1366px();
    String actualImage1440px = item.getImage1440px();
    String actualImage1920px = item.getImage1920px();
    String actualImage414px = item.getImage414px();
    String actualImage768px = item.getImage768px();
    String actualImage1920AltText = item.getImage1920PXAltText();

    assertEquals(expectImage414px, actualImage414px);
    assertEquals(expectImage768px, actualImage768px);
    assertEquals(expectImage1024px, actualImage1024px);
    assertEquals(expectImage1366px, actualImage1366px);
    assertEquals(expectImage1440px, actualImage1440px);
    assertEquals(expectImage1920px, actualImage1920px);
    assertEquals(expectImage1920AltText, actualImage1920AltText);
  }
  
  @Test
  void testImageFourViewports() {
    String expectImage414px = "/content/dam/etisalat/offerbanner/bg-cards/414x200.jpg";
    String expectImage540px = "/content/dam/etisalat/offerbanner/bg-cards/540x85.jpg";
    String expectImage768px = "/content/dam/etisalat/offerbanner/bg-cards/768x200.jpg";
    String expectImage1440px = "/content/dam/etisalat/offerbanner/bg-cards/1440x363.jpg";
    String expectImage1440AltText = "image1440AltText";


    Resource resource = context.resourceResolver().getResource(FOUR_IMAGE_VIEWPORT_DATA);
    ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
    String actualImage768px = item.getImage768px();
    String actualImage1440px = item.getImage1440px();
    String actualImage414px = item.getImage414px();
    String actualImage540px = item.getImage540px();
    String actualImage1440AltText = item.getImage1440PXAltText();

    assertEquals(expectImage768px, actualImage768px);
    assertEquals(expectImage1440px, actualImage1440px);
    assertEquals(expectImage414px, actualImage414px);
    assertEquals(expectImage540px, actualImage540px);
    assertEquals(expectImage1440AltText, actualImage1440AltText);
  }
  
  @Test
  void testImageThreeViewports() {
    String expectImage414px = "/content/dam/etisalat/offerbanner/bg-cards/414x200.jpg";
    String expectImage768px = "/content/dam/etisalat/offerbanner/bg-cards/768x200.jpg";
    String expectImage992px = "/content/dam/etisalat/offerbanner/bg-cards/992x200.jpg";
    String expectImage992AltText = "image992AltText";

    Resource resource = context.resourceResolver().getResource(THREE_IMAGE_VIEWPORT_DATA);
    ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
    String actualImage768px = item.getImage768px();
    String actualImage414px = item.getImage414px();
    String actualImage992px = item.getImage992px();
    String actualImage992AltText = item.getImage992PXAltText();

    assertEquals(expectImage768px, actualImage768px);
    assertEquals(expectImage414px, actualImage414px);
    assertEquals(expectImage992px, actualImage992px);
    assertEquals(expectImage992AltText, actualImage992AltText);
  }

}
