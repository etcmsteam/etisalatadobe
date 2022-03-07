package com.etisalat.core.models;

import java.util.List;

public interface ProductDetails {
  
  /**
   * @return a collection of objects representing the product filter items that compose the list.
   */
  List<String> getProductFilterTagDetails();
  
  /**
   * 
   * @return a product filter tag name.
   */
  String getProductFilterTagName();  

}
