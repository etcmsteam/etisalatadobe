package com.etisalat.core.models;

import java.util.List;

public interface ProductDetails {
  
  /**
   * @return a collection of objects representing the product filter items that compose the list.
   */
  List<CategoryTagVO> getProductFilterTagDetails();
  
  /**
   * 
   * @return a product filter tag name.
   */
  String getProductFilterTagName();  
  
  /**
   * 
   * @return a tag name from product path.
   */
  String getTagNameFromProductPath();

}
