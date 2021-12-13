/* eslint-disable */
import { FORM_VALIDATION_MESSAGES } from "../constant";

(function () {
  const NO_SCROLL_CLASS = "no-scroll";
  const $SUCCSS_POP_UP = $(".cmp-experiencefragment--Newsletter-subscription-pop-up");
  const $BODY = $("body");
  const $OVERLAY_CLOSE_CTA = $(".form-close");
  const $FORM = $("#newsletterSubscription");
  const $SUBMIT_CTA = $("#newsletterSubscription .cmp-form-button");
  const $DYNAMIC_EMAIL = $("#form-popup-box .dynamicEmail");

  if (!$FORM.length) {
    return false;
  }

  $SUBMIT_CTA.on("click", function () {
    if ($FORM.valid() === false) {
      return false;
    }
  });

  let messagelocal;
  const validateMessage = {
    en: {
      EmailAddress: FORM_VALIDATION_MESSAGES.EN.EmailAddress,
    },
    ar: {
      EmailAddress: FORM_VALIDATION_MESSAGES.AR.EmailAddress,
    },
  };

  if (document.documentElement.lang === "ar") {
    messagelocal = validateMessage.ar;
  } else {
    messagelocal = validateMessage.en;
  }

  $FORM.validate({
    rules: {
      CustomerName: {
        required: true,
        realalphabeticlatinarabic: true,
        maxlength: 25,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: messagelocal,
    submitHandler: function () {
      // const formData = $FORM.serialize();
      const GET_EMAIL = $("input[name='EmailAddress']").val();
      $DYNAMIC_EMAIL.text(GET_EMAIL);
      $SUCCSS_POP_UP.show();
      $BODY.addClass(NO_SCROLL_CLASS);
      return false;
    },
  });

  $OVERLAY_CLOSE_CTA.on("click", (event) => {
    $SUCCSS_POP_UP.hide();
    $BODY.removeClass(NO_SCROLL_CLASS);
  });
})();
