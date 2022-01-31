/* eslint-disable no-undef */
(function ($) {
  function initTabs() {
    const tabContainer = $(".cmp-tabs__tab");
    
    tabContainer.each(function (index) {
      tabContainer[index].addEventListener("click", function () {
        const tabsActiveId = $(this).attr("id") + 'panel';
        const offset = $("#" + tabsActiveId).offset();
        window.scrollTo(offset.left, offset.top);
      });
    });
  }

  $(document).ready(function () {
      initTabs();
  });

})(jQuery);
