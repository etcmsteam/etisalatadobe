import { ANALYTICS_LINKS_TABS } from '../analytics/analytics';
/* eslint-disable no-undef */
export const TABS_JS = () => {
  $(".cmp-tabs__tab").click(function () {
    const tabsActiveId = $(this).attr("id") + "panel";
    const taboffset = $("#" + tabsActiveId).offset();
    const taboffsetTop = taboffset.top - 200;
    window.scrollTo(0, taboffsetTop);
  });
  $(".tabs .cmp-tabs__tablist li").click(function(){
    const pagePathName = window.location.pathname;
    const dataLayerPathName = pagePathName.split('.html')[0];
    const pathArr = dataLayerPathName.split('/');
    const sectionHeadingTitle = $(this).closest('.tabs').find('> h3');
    let sectionHeading = '';
    if (sectionHeadingTitle.length > 0) {
      sectionHeading = sectionHeadingTitle.text().toLowerCase().trim();
    } else {
      sectionHeading = pathArr.pop();
    }
    const tabsName = $(this).text().toLowerCase().trim();
    const tabsURL = window.location.href;
    ANALYTICS_LINKS_TABS(tabsName, tabsURL, sectionHeading);
  });
};
