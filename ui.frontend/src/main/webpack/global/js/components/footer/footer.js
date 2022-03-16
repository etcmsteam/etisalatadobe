/* eslint-disable */
import { isMobile, IsMediaQuery } from "../../helpers";

export const FOOTER_DOWNNLOAD_ICONS = () => {
  const ANDROID = $(".footer .download-etisalat .android");
  const APPLE = $(".footer .download-etisalat .apple");
  const HUAWEI = $(".footer .download-etisalat .huawei");

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
};
