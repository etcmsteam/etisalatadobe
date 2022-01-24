package com.etisalat.core.models;

import com.adobe.cq.wcm.core.components.models.ListItem;
import java.util.List;
import org.osgi.annotation.versioning.ProviderType;
import com.adobe.cq.wcm.core.components.models.Carousel;

@ProviderType
public interface ProductDetails extends Carousel {

  /**
   * @return a collection of objects representing the product data items that compose the list.
   */
  @Override
  List<ListItem> getItems();

}
