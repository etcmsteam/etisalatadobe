/* eslint-disable */
import { FORM_SUCCESS, FORM_ERROR } from "../../js/analytics/analytics";

export const OMNI_LEAD_FORM = () => {
  const $FORM = $("#OmniLead");
  const $SUBMIT_CTA = $("#OmniLead .cmp-form-button");
  const currentURL = window.location.href;

  if (!$FORM.length) {
    return false;
  }

  // const { hostName } = $FORM?.data() || {};

  $SUBMIT_CTA.on("click", function () {
    if ($FORM.valid() == false) {
      FORM_ERROR($FORM, "validation error");
      return false;
    }
  });

  function getFormData($form) {
    var o = {};
    var a = $form.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  }

  function getParameterByNameWithPlus(name, href) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regexS = "[\\?&]" + name + "=([^&#]*)";
    const regex = new RegExp(regexS);
    const results = regex.exec(href);
    if (results == null) return "";
    else return decodeURIComponent(results[1].replace(/\-/g, " "));
  }

  function queryParamValue(name, url = currentURL) {
    if (!name || !currentURL) return undefined;

    return getParameterByNameWithPlus(name, url)
      .replace(/_/g, " ")
      .replace(/[\_\"\'\>\<\?\=\/\/]/g, " ");
  }


  function submitErrorResponse(jqXHR, textStatus, error) {
    let errorText = (jqXHR.responseJSON && jqXHR.responseJSON.message) || error;
    FORM_ERROR($FORM);
    console.log(errorText);
  }

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
    submitHandler: function (form, event) {
      event.preventDefault();
      const formData = getFormData($FORM);
      const product = queryParamValue("product") || formData.product;
      const subject = queryParamValue("subject") || formData.subject;
      const channel = queryParamValue("channel") || formData.channel;

      const PAYLOAD = {
        accountNumber: formData.accountNumber,
        product,
        subject,
        channel,
        existingAccount: formData.existingAccount,
        contactFirstName: formData.firstName,
        contactLastName: formData.lastName,
        email: formData.emailAddress,
        mobileNo: formData.contactNumber,
        companyName: formData.companyName,
        description: formData.description,
      };

      // let dataObj = {
      //   ClientCaptchaValue: formData["g-recaptcha-response"],
      //   TYPE: "CREATEOMNILEAD",
      //   REQPAYLOAD: PAYLOAD,
      // };

      //dataObj = JSON.stringify(dataObj, null, 2);

      $.ajax({
        type: "POST",
        url: `/b2bportal/createOmniLead.service`,
        data: JSON.stringify(PAYLOAD, null, 2),
        dataType: "json",

        headers: {
          "content-type": "application/json",
          "x-calling-application": "cms",
        },

        encode: true,
      })
        .done(function (response) {
          FORM_SUCCESS($FORM, PAYLOAD);
          if (response["status.code"] === 200) {
            let RE_URL = `${window.location.origin}/en/smb/offers/extra-allowance/b2bforms-thankyou.html?referenceNo=${response?.bcrmTransactionId}`;
            window.location.href = RE_URL;
          }
          return true;
        })
        .fail(submitErrorResponse);
    },
  });

  $(".cmp-form").on("change", "input[name=existingAccount]", function () {
    if (this.value == "yes") {
      $(".account-number").removeClass("hide");
    } else {
      $(".account-number").addClass("hide");
    }
  });
};
