/**
 * v###version###
 */
/* eslint-disable */
export const HELP_CHAT = () => {
  // var theUrl = 'https://eshopuat.etisalat.ae/b2c/eshop/ecare/users/generateOtpByAccountNo';
  // var theUrl = 'https://eshopuat.etisalat.ae/ecare/users/generateOtpByAccountNo';
  // otpURL: "https://213.42.214.51:7041/b2c/eshop/generateOtpByAccountNo",
  // leadUrl: "https://213.42.214.51:7041/b2c/eshop/saveLeadFormInfo"

  const chatConstants = {
    otpURL: "/b2c/eshop/generateOtpByAccountNumber",
    leadUrl: "/b2c/eshop/saveLeadFormInfo",
  };

  var validateUserData = function () {
    var messagelocal;
    var validateMessage = {
      en: {
        firstName: {
          required: "Name is required",
        },
        emailAddress: {
          required: "Email address is required",
        },
        contactNumber: {
          required: "Mobile number is required ",
        },
      },
      ar: {
        name: {
          required: "يرجى كتابة الاسم",
        },
        email: {
          required: "يرجى كتابة البريد الإلكتروني",
        },
        contactNumber: {
          required: "يرجى كتابة رقم الهاتف",
        },
      },
    };

    if (document.documentElement.lang === "ar") {
      messagelocal = validateMessage.ar;
    } else {
      messagelocal = validateMessage.en;
    }

    $formDetails.validate({
      rules: {
        firstName: {
          required: true,
          realalphabeticlatinarabic: true,
          maxlength: 248,
        },
        emailAddress: {
          required: true,
          email: true,
          maxlength: 248,
        },
        contactNumber: {
          required: true,
          number: true,
          digits: true,
          pattern: /^(050|054|055|056|052)/,
          minlength: 10,
          maxlength: 10,
        },
      },
      messages: messagelocal,
      submitHandler: function (form) {
        var formData = $("#needsupportInfo").serializeArray();
        var otpGenerationRequest = {
          accountNo: formData[1]["value"],
          notificationType: "SMS",
          notificationValue: formData[1]["value"],
        };

        $(".noSartDigits").text(otpGenerationRequest["accountNo"].substr(0, 2));
        $(".noEndDigits").text(otpGenerationRequest["accountNo"].slice(-3));

        $.ajax({
          type: "POST",
          url: chatConstants.otpURL,
          data: JSON.stringify(otpGenerationRequest),
          dataType: "json",
          // encode: true,
          contentType: "application/json; charset=utf-8",
          success: function (data, status, jqXHR) {
            // your code here
            $("#insert-details-id").hide();
            $("#insert-otp").show();
            $("#submitDetails").show();
            $("#showLoaderButtonGetContinue").hide();
          },
          error: function (jqXHR, status, err) {
            // your code here
            $("#submitDetails").show();
            $("#showLoaderButtonGetContinue").hide();
          },
        });
        // return false to prevent normal browser submit and page navigation
        return false;
      },
    });
  };

  var validateOTP = function () {
    $otpVerificationForm.validate({
      rules: {
        digit1: {
          required: true,
          maxlength: 1,
          minlength: 1,
          number: true,
          digits: true,
        },
        digit2: {
          required: true,
          maxlength: 1,
          minlength: 1,
          number: true,
          digits: true,
        },
        digit3: {
          required: true,
          maxlength: 1,
          minlength: 1,
          number: true,
          digits: true,
        },
        digit4: {
          required: true,
          maxlength: 1,
          minlength: 1,
          number: true,
          digits: true,
        },
        digit5: {
          required: true,
          maxlength: 1,
          minlength: 1,
          number: true,
          digits: true,
        },
        digit6: {
          required: true,
          maxlength: 1,
          minlength: 1,
          number: true,
          digits: true,
        },
      },

      submitHandler: function (form) {
        // get the form data before disabling fields (otherwise they don't get value)
        var formData = $("#needsupportInfo").serializeArray();
        var formData1 = $("#otpVerificationForm").serializeArray();
        var otpValue = "";

        for (var index = 0; index < formData1.length; index++) {
          otpValue += formData1[index]["value"];
        }

        var leadFormInfo = {
          userName: formData[0]["value"],
          email: formData[2]["value"],
          contactNumber: formData[1]["value"],
          requestType: getPlanName(),
          otp: otpValue,
          locale: document.documentElement.lang.toLowerCase(),
          subChannel: "Website_Need_Help",
        };

        $.ajax({
          type: "POST",
          url: chatConstants.leadUrl,
          data: JSON.stringify(leadFormInfo),
          dataType: "json",
          // encode: true,
          contentType: "application/json; charset=utf-8",
          success: function (data, status, jqXHR) {
            // your code here
            resetProcess();
            $("#verifyOTP").show();
            $("#showLoaderButtonVerify").hide();
            googleTracking("success");
          },
          error: function (jqXHR, status, err) {
            // your code here
            // resetProcess();
            $("#optFailure").show();
            $("#resetOTPicon").show();
            $("#verifyOTP").show();
            $("#showLoaderButtonVerify").hide();
          },
        });
        // return false to prevent normal browser submit and page navigation
        return false;
      },
    });
  };

  /**
   * FORM VALIDATION
   */
  var $formDetails = $("#needsupportInfo");
  var $otpVerificationForm = $("#otpVerificationForm");

  $(document).ready(function () {
    var w = window.innerWidth,
      h = window.innerHeight;
    w > h ? $("#need-help-chat-id").addClass("zoom-out") : $("#need-help-chat-id").removeClass("zoom-out");
    validateUserData();
    validateOTP();
    if (sessionStorage.getItem("chatOpened") === null) {
      sessionStorage.setItem("chatOpened", "false");
    }

    $("#submitDetails").on("click", function () {
      if ($("#needsupportInfo").valid() !== false) {
        googleTracking("continue");
        $("#submitDetails").hide();
        $("#showLoaderButtonGetContinue").show();
      } else {
        return false;
      }
    });

    $("#verifyOTP").on("click", function () {
      if ($("#otpVerificationForm").valid() !== false) {
        $("#resetOTPicon").hide();
        $("#verifyOTP").hide();
        $("#showLoaderButtonVerify").show();
        $("#optFailure").hide();
        googleTracking("verify");
      } else {
        return false;
      }
    });

    $("#addAnotherNumber").on("click", function () {
      resetForms();
      $("#insert-details-id").show();
      $("#insert-otp").hide();
    });

    $(".currentPlanName").text(getPlanName());
    $(".nv-chat-details .phone-input-group input").on("keyup", function () {
      $(this).parent().next().find("input").focus();
    });

    $("#needHelp").on("click", function () {
      $("#need-help-chat-id").show();
      $(this).hide();
      googleTracking("click");
    });

    $("#otpVerificationForm input").bind("keyup blur", function () {
      if ($("#otpVerificationForm").validate().checkForm()) {
        $("#verifyOTP").prop("disabled", false);
      } else {
        $("#verifyOTP").prop("disabled", "disabled");
      }
    });

    var chatTimeToOpen = 180000;
    // sessionStorage.getItem("triggeredFrom") === "configuration" ? 90000 : 90000;
    setIdleTime(chatTimeToOpen);

    $("#haveIssue").on("click", function () {
      $("#chat-hello-id").hide();
      $("#chat-details-id").show();
      googleTracking("confirmQuestions");
    });

    $(".chat-collapse").on("click", function () {
      $("#needHelp").toggle();
      $("#need-help-chat-id").toggle();
    });

    $("#chatClose").on("click", function (e) {
      e.preventDefault();
      $(".nv-chat-modal").toggle();
    });

    $(".chatModelClose").on("click", function (e) {
      e.preventDefault();
      $("#need-help-chat-id").hide();
      $("#needHelp").show();
      resetForms();
      $(".successfully-verified").hide();
      $(".nv-chat-modal").hide();
      $("#haveIssue").show();
      sessionStorage.setItem("chatOpened", "true");
      googleTracking("exitChat");
    });

    $(".chatModelKeep , .nv-chat-modal-close").on("click", function (e) {
      e.preventDefault();
      $(".nv-chat-modal").toggle();
    });

    $("#resendOTP").on("click", function (e) {
      resendOTP();
    });

    $("#resetOTPicon").on("click", function (e) {
      resetOTPForm();
    });
  });

  function resetForms() {
    $formDetails[0].reset();
    $otpVerificationForm[0].reset();
    $("#needsupportInfo input").removeClass("valid");
    $("#otpVerificationForm input").removeClass("valid");
  }
  function resetOTPForm() {
    $otpVerificationForm[0].reset();
    $("#otpVerificationForm input").removeClass("valid");
  }

  function resetProcess() {
    $("#chat-hello-id").show();
    $("#insert-details-id").show();
    $(".successfully-verified").show();
    $("#chat-details-id").hide();
    $("#optFailure").hide();
    $("#insert-otp").hide();
    $("#haveIssue").hide();
  }

  function setIdleTime(time) {
    if (sessionStorage.getItem("chatOpened") === "false") {
      setTimeout(function (time) {
        if ($("#needHelp").css("display") !== "none") {
          $("#needHelp").hide();
          $("#need-help-chat-id").show();
        }
      }, time);
    }
  }

  function googleTracking(event) {
    dataLayer.push({
      event: "needHelp",
      info1: "needHelp",
      info2: event,
      info3: window.location.pathname,
    });
  }

  function getPlanName() {
    var planName;
    if (sessionStorage.getItem("planName")) {
      planName = sessionStorage.getItem("planName");
    } else {
      planName = $("#planNameValue").val();
    }
    return planName;
  }

  function resendOTP() {
    var formData = $("#needsupportInfo").serializeArray();
    var otpGenerationRequest = {
      accountNo: formData[1]["value"],
      notificationType: "SMS",
      notificationValue: formData[1]["value"],
    };

    $.ajax({
      type: "POST",
      url: chatConstants.otpURL,
      data: JSON.stringify(otpGenerationRequest),
      dataType: "json",
      // encode: true,
      contentType: "application/json; charset=utf-8",
      success: function (data, status, jqXHR) {
        // your code here
        $("#insert-details-id").hide();
        $("#insert-otp").show();
      },
    });
    // return false to prevent normal browser submit and page navigation
    return false;
  }
};
