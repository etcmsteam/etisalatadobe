package com.etisalat.core.models;

import java.util.List;

public interface ProductDetails {

	/**
	 * 
	 * @return a collection of objects representing the product data items that
	 *         compose the list.
	 */
	List<ProductDetailsItem> getProductDetailsItems();

}
