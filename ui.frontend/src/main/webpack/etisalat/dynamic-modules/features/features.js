/* eslint-disable no-undef */
import { isMobile, IsMediaQuery } from "../../../global/js/helpers";
import "./features-4.0.scss";
export const FEATURE_MODULE = () => {
  if ($(".features-4-0 .download-etisalat .icon").length > 0) {
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
