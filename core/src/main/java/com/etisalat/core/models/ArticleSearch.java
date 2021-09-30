package com.etisalat.core.models;

import java.util.List;
import java.util.Map;

public interface ArticleSearch {

	/**
	 * 
	 * @return a ID for this component.
	 */
	String getId();

	/**
	 * 
	 * @return a collection of objects representing the blog article items that
	 *         compose the list.
	 */
	List<GenericListPageDetails> getBlogPageItems();
	
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
	
	/**
	 * 
	 * @return a collection of objects representing the news article items that
	 *         compose the list.
	 */
	List<GenericListPageDetails> getNewsPageItems();
	
	
	/**
	 * 
	 * @return a collection of objects representing the category items that
	 *         compose the map.
	 */
	Map<String,Long> getSearchCategories();
		
}
