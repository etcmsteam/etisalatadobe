import { FORM_VALIDATION_MESSAGES } from "./constant";
(function () {
  const $FORM = $("#new_form");
  const $SUBMIT_CTA = $("#new_form .cmp-form-button");

  if (!$FORM.length) {
    return false;
  }

  $SUBMIT_CTA.on("click", function () {
    if ($FORM.valid() == false) {
      return false;
    }
  });

  let messagelocal;
  const validateMessage = {
    en: {
      FIRST_NAME: FORM_VALIDATION_MESSAGES.EN.ewalletFirstName,
      LAST_NAME: FORM_VALIDATION_MESSAGES.EN.ewalletLastName,
      COMPANY_NAME: FORM_VALIDATION_MESSAGES.EN.companyName,
      EMIRATE: FORM_VALIDATION_MESSAGES.EN.emirate,
      PHONE_NUMBER: FORM_VALIDATION_MESSAGES.EN.phoneNumber,
      emailAddress: FORM_VALIDATION_MESSAGES.EN.emailAddress,
    },
    ar: {
      FIRST_NAME: FORM_VALIDATION_MESSAGES.AR.ewalletFirstName,
      LAST_NAME: FORM_VALIDATION_MESSAGES.AR.ewalletLastName,
      COMPANY_NAME: FORM_VALIDATION_MESSAGES.AR.companyName,
      EMIRATE: FORM_VALIDATION_MESSAGES.EN.emirate,
      PHONE_NUMBER: FORM_VALIDATION_MESSAGES.AR.phoneNumber,
      EMAIL: FORM_VALIDATION_MESSAGES.AR.emailAddress,
    },
  };

  if (document.documentElement.lang == "ar") {
    messagelocal = validateMessage.ar;
  } else {
    messagelocal = validateMessage.en;
  }

  $FORM.validate({
    rules: {
      FIRST_NAME: {
        required: true,
        simplealphabeticlatinarabic: true,
        maxlength: 248,
      },
      LAST_NAME: {
        required: true,
        simplealphabeticlatinarabic: true,
        maxlength: 248,
      },
      COMPANY_NAME: {
        required: true,
        simplealphabeticlatinarabic: true,
        maxlength: 248,
      },
      EMIRATE: {
        required: true,
      },
      PHONE_NUMBER: {
        required: true,
        number: true,
        digits: true,
        pattern: /^(050|054|055|056|052)/,
        minlength: 10,
        maxlength: 10,
      },
      emailAddress: {
        required: true,
        EMAIL: true,
      },
    },
    messages: messagelocal,
    submitHandler: function (form) {
      form.submit();
    },
  });
})();
