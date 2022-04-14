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
