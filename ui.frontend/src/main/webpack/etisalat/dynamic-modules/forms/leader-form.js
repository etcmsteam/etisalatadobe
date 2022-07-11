/* eslint-disable */
import { FORM_SUCCESS, FORM_ERROR } from "../../js/analytics/analytics";

export const LEADER_FORM = () => {
  const $FORM = $("#leadOrder");
  const $SUBMIT_CTA = $("#leadOrder .cmp-form-button");
  const currentURL = window.location.href;
  const lang = $('html').attr('lang');

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

  function bindingUIFromParams() {
    const productName = queryParamValue('productName', currentURL);
    if (productName) {
      const targetElement = $(".teaser-form").find(".cmp-teaser__title");
      const targetElementValue = $(".teaser-form").find(".cmp-teaser__title").text().trim();
      const valueWithProductName = targetElementValue + " " + productName + "?";
      targetElement.html(valueWithProductName);
    }
  }

  function getParameterByName(name, href) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regexS = "[\\?&]" + name + "=([^&#]*)";
    const regex = new RegExp(regexS);
    const results = regex.exec(href);
    if (results == null) return "";
    else return decodeURIComponent(results[1].replace(/\-/g, " "));
  }

  function queryParamValue(name, url = currentURL) {
    if (!name || !currentURL) return undefined;

    return getParameterByName(name, url)
      .replace(/_/g, " ")
      .replace(/[\_\"\'\>\<\?\=\/\/]/g, " ");
  }

  function submitErrorResponse(jqXHR, textStatus, error) {
    let errorText = (jqXHR.responseJSON && jqXHR.responseJSON.message) || error;
    FORM_ERROR($FORM, "API error", jqXHR.responseJSON);
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
    submitHandler: function () {
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

      let dataObj = {
        ClientCaptchaValue: formData["g-recaptcha-response"],
        TYPE: "CREATEOMNILEAD",
        REQPAYLOAD: PAYLOAD,
      };

      dataObj = JSON.stringify(dataObj, null, 2);

      $.ajax({
        type: "POST",
        url: `/b2bportal/Utility/checkCaptcha.service`,
        data: dataObj,
        dataType: "json",

        headers: {
          "content-type": "application/json",
          "x-calling-application": "cms",
        },

        encode: true,
      })
        .done(function (response) {
          let RE_URL = `${window.location.origin}/${lang}/smb/b2bforms-thankyou.html?referenceNo=${response?.bcrmTransactionId}`;
          $(document).trigger('GA_FROM_TRACKING', { $type: 'submit' });
          window.location.href = RE_URL;
          FORM_SUCCESS($FORM, PAYLOAD);

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

  bindingUIFromParams();
  $(document).trigger('GA_FROM_TRACKING', { $type: 'load' });
};
