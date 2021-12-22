import { DIAL_CODE_DATA } from "../constant";
(function () {
  const $FORM = $("#cwsNeedHelp");
  const $SUBMIT_CTA = $("#cwsNeedHelp .cmp-form-button");

  if (!$FORM.length) {
    return false;
  }

  $SUBMIT_CTA.on("click", function () {
    if ($FORM.valid() === false) {
      return false;
    }
  });

  $FORM.validate({
    rules: {
      fullName: {
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
        maxlength: 15,
      },
      companyName: {
        required: true,
        realalphabeticlatinarabic: true,
        maxlength: 248,
      },
      countryName: {
        required: true,
        realalphabeticlatinarabic: true,
        maxlength: 248,
      },
      selectServices: {
        required: true,
        realalphabeticlatinarabic: true,
        maxlength: 248,
      },
      description: {
        required: true,
      },
    },

    submitHandler: function () {
      return false;
    },
  });

  /*--intlTelInput starts--*/
  var input2 = document.querySelector("#contactNumber");
  var iti = window.intlTelInput(input2, {
    initialCountry: "AE",
    utilsScript: intlTelInputUtils,
    autoPlaceholder: "off",
  });

  $(input2).on("focus", function () {
    $(this).parents(".cmp-form-text").find("label").addClass("floating-label");
  });

  iti.selectedFlag.children[0].textContent = "+" + iti.getSelectedCountryData().dialCode;
  input2.addEventListener("countrychange", function (e) {
    iti.selectedFlag.children[0].textContent = "+" + iti.getSelectedCountryData().dialCode;
    $("#contactNumber").focus();
  });

  const ERROR_ELEMENT = ` <span id="valid-msg" class="hide valid-msg">✓ Valid</span> <span id="error-msg" class="hide error-msg"></span>`;
  const $PARENT_ELEMENT = $("#contactNumber").parents(".cmp-form-text");

  $(ERROR_ELEMENT).insertAfter("#contactNumber");

  // //validation start
  var errorMsg = document.querySelector("#error-msg");
  var validMsg = document.querySelector("#valid-msg");
  //
  // // here, the index maps to the error code returned from getValidationError - see readme
  var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  function reset() {
    input2.classList.remove("error");
    input2.classList.remove("valid");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hide");
    validMsg.classList.add("hide");
    input2.parentElement.parentElement.classList.remove("has-error-fields");
    $PARENT_ELEMENT.find(".has-error.alert-label").css("display", "none");
  }
  //
  // // on blur: validate
  input2.addEventListener("blur", function () {
    reset();
    if (input2.value.trim()) {
      if (iti.isValidNumber()) {
        validMsg.classList.remove("hide");
        input2.classList.add("valid");
        $("#contactNumber").parents(".cmp-form-text").find("label").addClass("floating-label");
        input2.parentElement.parentElement.classList.remove("intl-error");
        //$("#contactNumber").val(iti.getNumber());
        $(".intl-tel-input .has-error.alert-label").css("display", "none");
      } else {
        input2.classList.add("error");
        input2.parentElement.parentElement.classList.add("has-error-fields", "intl-error");
        var errorCode = iti.getValidationError();
        errorMsg.innerHTML = errorMap[errorCode];
        errorMsg.classList.remove("hide");
      }
    } else {
      $("#contactNumber").parents(".cmp-form-text").find("label").removeClass("floating-label");
    }
  });

  // on keyup / change flag: reset
  input2.addEventListener("change", reset);
  input2.addEventListener("keyup", reset);
  // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
  var isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    // trigger the mobile dropdown css
    document.body.classList.add("iti-mobile-active");
  }

  /*--intlTelInput ends--*/

  // loop over all of the countries above, restructuring the data to be objects with named keys
  var $dialCodeDropDown = $("#country-code");
  $dialCodeDropDown.select2({
    data: DIAL_CODE_DATA,
    dropdownParent: $dialCodeDropDown.parent(".cmp-form-options"),
  });
  $dialCodeDropDown.on("select2:select", function (e) {
    var data = e.params.data;
    iti.setCountry(data.id);
  });
})();
