package com.etisalat.core.models;

import java.util.List;

public interface BlogpostSearch {

	/**
	 * 
	 * @return a ID for this component.
	 */
	String getId();

	/**
	 * 
	 * @return a collection of objects representing the blog post page items that
	 *         compose the list.
	 */
	List<GenericListPageDetails> getPageItems();
	
	/**
	 * 
	 * @return a business category tag title.
	 */
	String getBusinessCategoryTag();
	
	
	/**
	 * 
	 * @return a back to business home link.
	 */
	String getBackToHomeLink();
		
}
