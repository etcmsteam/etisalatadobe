/* eslint-disable no-undef */
export const TABS_JS = () => {
  $(".cmp-tabs__tab").click(function () {
    const tabsActiveId = $(this).attr("id") + "panel";
    const taboffset = $("#" + tabsActiveId).offset();
    const taboffsetTop = taboffset.top - 200;
    window.scrollTo(0, taboffsetTop);
  });
};
