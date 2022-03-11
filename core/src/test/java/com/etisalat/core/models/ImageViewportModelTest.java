package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.HashMap;
import java.util.Map;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.impl.ResourceTypeBasedResourcePicker;
import org.apache.sling.models.spi.ImplementationPicker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.day.cq.dam.api.DamConstants;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;


@ExtendWith(AemContextExtension.class)
public class ImageViewportModelTest {

  private final AemContext context = new AemContext();
  
  private static final String CONTENT_ROOT = "/content";
  private static final String CURRENT_PAGE = "/content/viewport";

  private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
  protected static final String SIX_IMAGE_VIEWPORT_DATA = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatviewport";
  protected static final String SIX_IMAGE_VIEWPORT_DATA_WITHOUT_VIEWPORT_LAYOUT = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatviewportwithoutviewportlayout";
  protected static final String FOUR_IMAGE_VIEWPORT_DATA = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatfourviewport";
  protected static final String THREE_IMAGE_VIEWPORT_DATA = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatthreeviewport";
  protected static final String SIX_IMAGE_WRONG_VIEWPORT_DATA = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatwrongviewport";
  protected static final String SIX_IMAGEWITHOUT_1920_2X_IMAGE = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatviewportwithout19202xImage";
  protected static final String THREE_IMAGEWITHOUT_992_1X_IMAGE = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatthreeviewportwithout9921xImage";
  protected static final String THREE_IMAGEWITHOUT_992_1X_IMAGE_AND_ALT_TEXT = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatthreeviewportwithout9921xImageAndAltText";
  protected static final String THREE_IMAGEWITHOUT_992_1X_AND_2X_IMAGE = TEST_PAGE_CONTAINER_ROOT + "/imageetisalatthreeviewportwithout992px1xand2x";
  
  protected static final String FOUR_IMAGE_VIEWPORT_HAS_CONTENT = TEST_PAGE_CONTAINER_ROOT + "/fourviewport-hasimage";
  protected static final String THREE_IMAGE_VIEWPORT_HAS_CONTENT = TEST_PAGE_CONTAINER_ROOT + "/threeviewport-hasimage";
  protected static final String SIX_IMAGE_VIEWPORT_HAS_CONTENT = TEST_PAGE_CONTAINER_ROOT + "/sixviewport-hasimage";
  
  
  @BeforeEach
  public void setup() throws Exception {
    context.addModelsForClasses(ImageViewportModel.class);
    context.load().json("/com/etisalat/core/models/ImageViewportModelTest.json", CONTENT_ROOT);
    context.registerService(ImplementationPicker.class, new ResourceTypeBasedResourcePicker());

  }
  
  @Test
  void testImageSixViewports() {
	String expectImage414px1x = "/content/dam/etisalat/offerbanner/bg-cards/414x200.jpg";
	String expectImage414px2x = "/content/dam/etisalat/offerbanner/bg-cards/414x200.jpg";
	String expectImage1024px1x = "/content/dam/etisalat/offerbanner/bg-cards/1024x768.jpg";
	String expectImage1024px2x = "/content/dam/etisalat/offerbanner/bg-cards/1024x768.jpg";
	String expectImage768px1x = "/content/dam/etisalat/offerbanner/bg-cards/768x200.jpg";
	String expectImage768px2x = "/content/dam/etisalat/offerbanner/bg-cards/768x200.jpg";
	String expectImage1440px1x = "/content/dam/etisalat/offerbanner/bg-cards/1440x363.jpg";
	String expectImage1440px2x = "/content/dam/etisalat/offerbanner/bg-cards/1440x363.jpg";
	String expectImage1336px1x = "/content/dam/etisalat/offerbanner/bg-cards/1336x768.jpg";
	String expectImage1336px2x = "/content/dam/etisalat/offerbanner/bg-cards/1336x768.jpg";
	String expectImage1920px1x = "/content/dam/etisalat/offerbanner/bg-cards/1920x1080.jpg";
	String expectImage1920px2x = "/content/dam/etisalat/offerbanner/bg-cards/1920x1080.jpg";

    Resource resource = context.resourceResolver().getResource(SIX_IMAGE_VIEWPORT_DATA);
    ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
    String actualImage768px1x = item.getRetinaImage768px1x();
    String actualImage768px2x = item.getRetinaImage768px2x();
    String actualImage1440px1x = item.getRetinaImage1440px1x();
    String actualImage1440px2x = item.getRetinaImage1440px2x();
    String actualImage414px1x = item.getRetinaImage414px1x();
    String actualImage414px2x = item.getRetinaImage414px2x();
    String actualImage1024px1x = item.getRetinaImage1024px1x();
    String actualImage1024px2x = item.getRetinaImage1024px2x();
    String actualImage1336px1x = item.getRetinaImage1336px1x();
    String actualImage1336px2x = item.getRetinaImage1336px2x();
    String actualImage1920px1x = item.getRetinaImage1920px1x();
    String actualImage1920px2x = item.getRetinaImage1920px2x();

    assertEquals(expectImage768px1x, actualImage768px1x);
    assertEquals(expectImage768px2x, actualImage768px2x);
    assertEquals(expectImage1440px1x, actualImage1440px1x);
    assertEquals(expectImage1440px2x, actualImage1440px2x);
    assertEquals(expectImage414px1x, actualImage414px1x);
    assertEquals(expectImage414px2x, actualImage414px2x);
    assertEquals(expectImage1024px1x, actualImage1024px1x);
    assertEquals(expectImage1024px2x, actualImage1024px2x);
    assertEquals(expectImage1336px1x, actualImage1336px1x);
    assertEquals(expectImage1336px2x, actualImage1336px2x);
    assertEquals(expectImage1920px1x, actualImage1920px1x);
    assertEquals(expectImage1920px2x, actualImage1920px2x);
  }
  
  @Test
  void testImageFourViewports() {
    String expectImage414px1x = "/content/dam/etisalat/offerbanner/bg-cards/414x200.jpg";
    String expectImage414px2x = "/content/dam/etisalat/offerbanner/bg-cards/414x200.jpg";
    String expectImage540px1x = "/content/dam/etisalat/offerbanner/bg-cards/540x85.jpg";
    String expectImage540px2x = "/content/dam/etisalat/offerbanner/bg-cards/540x85.jpg";
    String expectImage768px1x = "/content/dam/etisalat/offerbanner/bg-cards/768x200.jpg";
    String expectImage768px2x = "/content/dam/etisalat/offerbanner/bg-cards/768x200.jpg";
    String expectImage1440px1x = "/content/dam/etisalat/offerbanner/bg-cards/1440x363.jpg";
    String expectImage1440px2x = "/content/dam/etisalat/offerbanner/bg-cards/1440x363.jpg";


    Resource resource = context.resourceResolver().getResource(FOUR_IMAGE_VIEWPORT_DATA);
    ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
    String actualImage768px1x = item.getRetinaImage768px1x();
    String actualImage768px2x = item.getRetinaImage768px2x();
    String actualImage1440px1x = item.getRetinaImage1440px1x();
    String actualImage1440px2x = item.getRetinaImage1440px2x();
    String actualImage414px1x = item.getRetinaImage414px1x();
    String actualImage414px2x = item.getRetinaImage414px2x();
    String actualImage540px1x = item.getRetinaImage540px1x();
    String actualImage540px2x = item.getRetinaImage540px2x();

    assertEquals(expectImage768px1x, actualImage768px1x);
    assertEquals(expectImage768px2x, actualImage768px2x);
    assertEquals(expectImage1440px1x, actualImage1440px1x);
    assertEquals(expectImage1440px2x, actualImage1440px2x);
    assertEquals(expectImage414px1x, actualImage414px1x);
    assertEquals(expectImage414px2x, actualImage414px2x);
    assertEquals(expectImage540px1x, actualImage540px1x);
    assertEquals(expectImage540px2x, actualImage540px2x);
  }
  
  @Test
  void testImageThreeViewports() {
    String expectImage414px1x = "/content/dam/etisalat/offerbanner/bg-cards/414x200.jpg";
    String expectImage414px2x = "/content/dam/etisalat/offerbanner/bg-cards/414x200.jpg";
    String expectImage768px1x = "/content/dam/etisalat/offerbanner/bg-cards/768x200.jpg";
    String expectImage768px2x = "/content/dam/etisalat/offerbanner/bg-cards/768x200.jpg";
    String expectImage992px1x = "/content/dam/etisalat/offerbanner/bg-cards/992x200.jpg";
    String expectImage992px2x = "/content/dam/etisalat/offerbanner/bg-cards/992x200.jpg";

    Resource resource = context.resourceResolver().getResource(THREE_IMAGE_VIEWPORT_DATA);
    ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
    String actualImage768px1x = item.getRetinaImage768px1x();
    String actualImage768px2x = item.getRetinaImage768px2x();
    String actualImage414px1x = item.getRetinaImage414px1x();
    String actualImage414px2x = item.getRetinaImage414px2x();
    String actualImage992px1x = item.getRetinaImage992px1x();
    String actualImage992px2x = item.getRetinaImage992px2x();

    assertEquals(expectImage768px1x, actualImage768px1x);
    assertEquals(expectImage768px2x, actualImage768px2x);
    assertEquals(expectImage414px1x, actualImage414px1x);
    assertEquals(expectImage414px2x, actualImage414px2x);
    assertEquals(expectImage992px1x, actualImage992px1x);
    assertEquals(expectImage992px2x, actualImage992px2x);
  }
  
  @Test
  void testFourViewportHasImage() {
    Resource resource = context.resourceResolver().getResource(FOUR_IMAGE_VIEWPORT_HAS_CONTENT);
    ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
    boolean actualFourViewPortContent = item.getFourViewportContent();
    assertEquals(true, actualFourViewPortContent);
  }
  
  @Test
  void testThreeViewportHasImage() {
    Resource resource = context.resourceResolver().getResource(THREE_IMAGE_VIEWPORT_HAS_CONTENT);
    ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
    boolean actualThreeViewPortContent = item.getThreeViewportContent();
    assertEquals(true, actualThreeViewPortContent);
  }
  
  @Test
  void testSixViewportHasImage() {
    Resource resource = context.resourceResolver().getResource(SIX_IMAGE_VIEWPORT_HAS_CONTENT);
    ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
    boolean actualSixViewPortContent = item.getSixViewportContent();
    assertEquals(true, actualSixViewPortContent);
  }

  @Test
  void testGetSixViewPortAltText() {
	  Resource resource = context.resourceResolver().getResource(SIX_IMAGE_VIEWPORT_DATA);
	  ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
	  String actualSixViewPortAltText = item.getSixViewPortAltText();
	  assertEquals("Alt Text 1920px", actualSixViewPortAltText);
  }

  @Test
  void testGetFourViewPortAltText() {
	  Resource resource = context.resourceResolver().getResource(FOUR_IMAGE_VIEWPORT_DATA);
	  ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
	  String actualFourViewPortAltText = item.getFourViewPortAltText();
	  assertEquals("Alt Text 1440px", actualFourViewPortAltText);
  }

  @Test
  void testGetThreeViewPortAltText() {
	  Resource resource = context.resourceResolver().getResource(THREE_IMAGE_VIEWPORT_DATA);
	  ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
	  String actualThreeViewPortAltText = item.getThreeViewPortAltText();
	  assertEquals("Alt Text 992px", actualThreeViewPortAltText);
  }
  
  @Test
  void testGetSixViewPortAltTextWithOutViewPort() {
	  Resource resource = context.resourceResolver().getResource(SIX_IMAGE_VIEWPORT_DATA_WITHOUT_VIEWPORT_LAYOUT);
	  ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
	  String actualSixViewPortAltText = item.getSixViewPortAltText();
	  assertEquals("", actualSixViewPortAltText);
  }
  
  @Test
  void testGetSixViewPortAltTextWrongViewPort() {
	  Resource resource = context.resourceResolver().getResource(SIX_IMAGE_WRONG_VIEWPORT_DATA);
	  ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
	  String actualSixViewPortAltText = item.getSixViewPortAltText();
	  assertEquals("", actualSixViewPortAltText);
  }
  
  @Test
  void testGetSixViewPortWithout1920px2xImage() {
	  Resource resource = context.resourceResolver().getResource(SIX_IMAGEWITHOUT_1920_2X_IMAGE);
	  ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
	  String actualSixViewPortAltText = item.getSixViewPortAltText();
	  assertEquals("Alt Text 1920px", actualSixViewPortAltText);
  }
  
  @Test
  void testGetThreeViewPortWithout992px1xImage() {
	  Resource resource = context.resourceResolver().getResource(THREE_IMAGEWITHOUT_992_1X_IMAGE);
	  ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
	  String actualThreeViewPortAltText = item.getThreeViewPortAltText();
	  assertEquals("Alt Text 992px", actualThreeViewPortAltText);
  }
  
  @Test
  void testGetThreeViewPortWithout992px1xImageAndAltText() {
	  Map<String, Object> assetMeta = new HashMap<>();
	  assetMeta.put(DamConstants.DC_TITLE, "Alt Text 992px");
	  context.create().asset("/content/dam/etisalat/offerbanner/bg-cards/992x200.jpg", 100, 100, "image/jpeg", assetMeta);
	  Resource resource = context.resourceResolver().getResource(THREE_IMAGEWITHOUT_992_1X_IMAGE_AND_ALT_TEXT);
	  
	  ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
	  String actualThreeViewPortAltText = item.getThreeViewPortAltText();
	  assertEquals("Alt Text 992px", actualThreeViewPortAltText);
  }
  
  @Test
  void testGetThreeViewPortWithout992px1xImageAndAltTextResourceNull() {
	  Map<String, Object> assetMeta = new HashMap<>();
	  assetMeta.put(DamConstants.DC_TITLE, "Alt Text 992px");
	  context.create().asset("/content/dam/etisalat/offerbanner/bg-cards-test/992x200.jpg", 100, 100, "image/jpeg", assetMeta);
	  Resource resource = context.resourceResolver().getResource(THREE_IMAGEWITHOUT_992_1X_IMAGE_AND_ALT_TEXT);
	  
	  ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
	  assertNull(item.getThreeViewPortAltText());
  }
  
  @Test
  void testGetThreeViewPortWithout992px1xAnd2xImage() {
	  Resource resource = context.resourceResolver().getResource(THREE_IMAGEWITHOUT_992_1X_AND_2X_IMAGE);
	  ImageViewportModel item = resource.adaptTo(ImageViewportModel.class);
	  String actualThreeViewPortAltText = item.getThreeViewPortAltText();
	  assertEquals("", actualThreeViewPortAltText);
  }
  
}
