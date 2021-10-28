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

/**
 * JUnit test verifying the TilesModel
 */

@ExtendWith(AemContextExtension.class)
class TilesModelTest {
	
	private final AemContext context = new AemContext();
	
	private static final String CONTENT_ROOT = "/content";
	private static final String CURRENT_PAGE = "/content/testtileboxes";

	private static final String TEST_PAGE_CONTAINER_ROOT = CURRENT_PAGE + "/jcr:content/root/container";
	protected static final String TILE_DATA = TEST_PAGE_CONTAINER_ROOT + "/tilecontainer/tile1";
	protected static final String TILE_DATA1 = TEST_PAGE_CONTAINER_ROOT + "/tilecontainer/tile2";
	protected static final String TILE_DATA2 = TEST_PAGE_CONTAINER_ROOT + "/tilecontainer/tile3";
	protected static final String TILE_DATA3 = TEST_PAGE_CONTAINER_ROOT + "/tilecontainer1/tile1";

	@BeforeEach
	public void setup() throws Exception {
		context.addModelsForClasses(TileModel.class);
		context.load().json("/com/etisalat/core/models/TilesModel.json", CONTENT_ROOT);		
		context.registerService(ImplementationPicker.class, new ResourceTypeBasedResourcePicker());
	}

	@Test
	void testTiles() {
		String expectedTileTitle = "Mobility";
		String expectedFileReference = "/content/dam/etisalat/elife-tv-gaming-desktop_tcm313-225320.jpg";
		String expectedTileDesc = "<p>Keep your workforce connected anytime, anywhere. Ensure constant business accessibility with our bespoke mobility solutions.</p>";
		Resource resource = context.resourceResolver().getResource(TILE_DATA);
		TileModel tileModel = resource.adaptTo(TileModel.class);
		tileModel.setTiletitle(expectedTileTitle);
		assertEquals(expectedTileTitle, tileModel.getTiletitle());		
		tileModel.setText(expectedTileDesc);
		assertEquals(expectedTileDesc, tileModel.getText());
		assertEquals(expectedFileReference,
				tileModel.getTileImageResource().getValueMap().get("fileReference", String.class));
		
	}
	
	@Test
	void testTileLink() {
		String expectedCTAText = "Learn More";
		String expectedTileCTALinkNewWindow = "/content/etisalat/ae/en/connectivity.html";
		String expectedTileCTALinkSameWindow = "/content/etisalat/ae/en/connectivity.html";

		Resource resource = context.resourceResolver().getResource(TILE_DATA1);
		TileModel tileModel = resource.adaptTo(TileModel.class);
		tileModel.setTileCTALinkNewWindow(expectedTileCTALinkNewWindow);
		tileModel.setTileCTALinkSameWindow(expectedTileCTALinkNewWindow);
		assertEquals(expectedTileCTALinkNewWindow, tileModel.getTileCTALinkNewWindow());
		assertEquals(expectedTileCTALinkSameWindow, tileModel.getTileCTALinkSameWindow());
		tileModel.setCtatext(expectedCTAText);
		assertEquals(expectedCTAText, tileModel.getCtatext());
	}
	
	@Test
	void testTileContianerLayout() {
		String expectedLayout = "threeTileBox";

		Resource resource = context.resourceResolver().getResource(TILE_DATA2);
		TileModel tileModel = resource.adaptTo(TileModel.class);

		assertEquals(expectedLayout, tileModel.getTileBoxContainerLayout());
	}

	@Test
	void testTileContianerEmptyLayout() {
		String expectedLayout = "";
		Resource resource = context.resourceResolver().getResource(TILE_DATA3);
		TileModel tileModel = resource.adaptTo(TileModel.class);

		assertEquals(expectedLayout, tileModel.getTileBoxContainerLayout());
	}
}
