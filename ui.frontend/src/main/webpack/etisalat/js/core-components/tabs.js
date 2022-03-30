import { ANALYTICS_LINKS_TABS } from '../analytics/analytics';
/* eslint-disable no-undef */
export const TABS_JS = () => {
  $(".cmp-tabs__tab").click(function () {
    const tabsActiveId = $(this).attr("id") + "panel";
    const taboffset = $("#" + tabsActiveId).offset();
    const taboffsetTop = taboffset.top - 200;
    window.scrollTo(0, taboffsetTop);
  });
  $(".tabs li").click(function(){
    const tabsName = $(this).text().trim();
    const tabsURL = window.location.href;
    const sectionHeading = document.title;
    ANALYTICS_LINKS_TABS(tabsName, tabsURL, sectionHeading);
  });
};


if (window.innerWidth > 767 && window.innerWidth < 992) {
  $(".tabs.cmp-tab-expansion").each(function () {
    if (!$(this).closest(".container").hasClass("container-fix__fluid")) {
      $(this).closest(".container").addClass("container-center cmp-expansion-pad-15");
    }
  });
}
