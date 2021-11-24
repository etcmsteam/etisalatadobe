import { FORM_VALIDATION_MESSAGES } from '../constant';

(function () {
  const NO_SCROLL_CLASS = 'no-scroll';
  const $SUCCSS_POP_UP = $('.cmp-experiencefragment--Newsletter-subscription-pop-up');
  const $BODY = $('body');
  const $OVERLAY_CLOSE_CTA = $('.form-close');
  const $FORM = $('#newsletterSubscription');
  const $SUBMIT_CTA = $('#newsletterSubscription .cmp-form-button');

  if (!$FORM.length) {
    return false;
  }

  $SUBMIT_CTA.on('click', function () {
    if ($FORM.valid() == false) {
      return false;
    }
  });

  let messagelocal;
  const validateMessage = {
    en: {
      emailAddress: FORM_VALIDATION_MESSAGES.EN.EmailAddress,
    },
    ar: {
      emailAddress: FORM_VALIDATION_MESSAGES.AR.EmailAddress,
    },
  };

  if (document.documentElement.lang == 'ar') {
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
      EmailAddress: {
        required: true,
        email: true,
      },
    },
    messages: messagelocal,
    submitHandler: function (form) {
      //const formData = $FORM.serialize();
      $SUCCSS_POP_UP.show();
      $BODY.addClass(NO_SCROLL_CLASS);
      return false;
    },
  });

  $OVERLAY_CLOSE_CTA.on('click', (event) => {
    $SUCCSS_POP_UP.hide();
    $BODY.removeClass(NO_SCROLL_CLASS);
  });
})();
