package com.etisalat.core.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
class CategoryTagVOTest {

	CategoryTagVO categoryTagVO = new CategoryTagVO();

	@Test
	void testGetTagName() {
		final String expectedTagName = "product-related";
		categoryTagVO.setTagName(expectedTagName);
		assertEquals(expectedTagName, categoryTagVO.getTagName());
	}

	@Test
	void testGetTagTitle() {
		final String expectedTagTitle = "Product Related";
		categoryTagVO.setTagTitle(expectedTagTitle);
		assertEquals(expectedTagTitle, categoryTagVO.getTagTitle());
	}

}
