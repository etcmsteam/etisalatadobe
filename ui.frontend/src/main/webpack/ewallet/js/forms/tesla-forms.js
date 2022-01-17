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
      firstName: FORM_VALIDATION_MESSAGES.EN.firstName,
      lastName: FORM_VALIDATION_MESSAGES.EN.lastName,
      companyName: FORM_VALIDATION_MESSAGES.EN.companyName,
      emirate: FORM_VALIDATION_MESSAGES.EN.emirate,
      phoneNumber: FORM_VALIDATION_MESSAGES.EN.phoneNumber,
      emailAddress: FORM_VALIDATION_MESSAGES.EN.emailAddress,
    },
    ar: {
      number: FORM_VALIDATION_MESSAGES.AR.number,
      firstName: FORM_VALIDATION_MESSAGES.AR.firstName,
      lastName: FORM_VALIDATION_MESSAGES.AR.lastName,
      companyName: FORM_VALIDATION_MESSAGES.AR.companyName,
      emirate: FORM_VALIDATION_MESSAGES.EN.emirate,
      phoneNumber: FORM_VALIDATION_MESSAGES.AR.phoneNumber,
      emailAddress: FORM_VALIDATION_MESSAGES.AR.emailAddress,
    },
  };

  if (document.documentElement.lang == "ar") {
    messagelocal = validateMessage.ar;
  } else {
    messagelocal = validateMessage.en;
  }

  $FORM.validate({
    rules: {
      firstName: {
        required: true,
        onlyletters: true,
        maxlength: 248,
      },
      lastName: {
        required: true,
        realalphabeticlatinarabic: true,
        maxlength: 248,
      },
      companyName: {
        required: true,
        realalphabeticlatinarabic: true,
        maxlength: 248,
      },
      emirate: {
        required: true,
      },
      phoneNumber: {
        required: true,
        number: true,
        digits: true,
        pattern: /^(050|054|055|056|052)/,
        minlength: 10,
        maxlength: 10,
      },
      emailAddress: {
        required: true,
        email: true,
      },
    },
    messages: messagelocal,
    submitHandler: function (form) {
      return false;
    },
  });
})();
