/* eslint-disable */
import { isMobile, IsMediaQuery } from "../../helpers";

const FOOTER_DOWNNLOAD_ICONS = () => {
  if ($(".footer .download-etisalat .icon").length > 0) {
    const ANDROID = $(".android");
    const APPLE = $(".apple");
    const HUAWEI = $(".huawei");

    if (!IsMediaQuery.lg.matches) {
      if (isMobile.Android()) {
        APPLE.hide();
        ANDROID.show();
        HUAWEI.show();
      }

      if (isMobile.iOS()) {
        ANDROID.hide();
        HUAWEI.hide();
        APPLE.show();
      }
    } else {
      ANDROID.show();
      HUAWEI.show();
      APPLE.show();
    }
  }
};

$(document).ready(function () {
  FOOTER_DOWNNLOAD_ICONS();
});
