/* eslint-disable */
(function () {
  const $FORM = $("#leadOrder");
  const $SUBMIT_CTA = $("#leadOrder .cmp-form-button");

  if (!$FORM.length) {
    return false;
  }

  $SUBMIT_CTA.on("click", function () {
    if ($FORM.valid() == false) {
      return false;
    }
  });

  $FORM.validate({
    rules: {
      firstName: {
        required: true,
        realalphabeticlatinarabic: true,
        maxlength: 248,
      },
      lastName: {
        required: true,
        realalphabeticlatinarabic: true,
        maxlength: 248,
      },
      emailAddress: {
        required: true,
        email: true,
      },
      contactNumber: {
        required: true,
        digits: true,
        pattern: /^(050|054|055|056|052)/,
        minlength: 10,
        maxlength: 10,
      },
      companyName: {
        required: true,
        realalphabeticlatinarabic: true,
        maxlength: 248,
      },
      description: {
        required: true,
      },
    },
    submitHandler: function (form) {
      //var formData = $FORM.serialize();
      return false;
    },
  });

  $(".cmp-form").on("change", "input[name=existingAccount]", function () {
    if (this.value == "yes") {
      $(".account-number").removeClass("hide");
    } else {
      $(".account-number").addClass("hide");
    }
  });
})();
