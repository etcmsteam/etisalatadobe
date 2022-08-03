package com.etisalat.core.models;

import java.util.List;

public interface IconCardList {

  /**
   * @return a collection of objects representing the icon card items that compose the list.
   */
  List<IconCardVO> getIconCardListItems();
  List<IconCardVO> getHowToCardListItems();

  int getIconCardSize();
  int getHowToCardSize();

}
