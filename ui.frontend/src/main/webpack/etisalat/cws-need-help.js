

(function (window) {

  //"use strict";

  return function () {
    //valdefault();
    /**
     * FORM VALIDATION
     */
   

    $(document).ready(function () {
      var $form = $("#new_form");
       const dropdown = $('#country-listbox');

      dropdown.empty();
      

      
      // create object from FORM
      function getFormData($form) {debugger;
        var o = {};
        var a = $form.serializeArray();
        $.each(a, function () {
          if (o[this.name]) {
            if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
          } else {
            o[this.name] = this.value || '';
          }
        });
        return o;
      }
      // get services dropdown value
      var groupEmail = '';
      var getGroupEmails = $('select[name=selectServices]').change(function () {
        var item = $(this);
        if (item.val() == 'data-services') {
          groupEmail = 'cwsmarketing@etisalat.ae';
        } else if (item.val() == 'voice-services') {
          groupEmail = 'cwsmarketing@etisalat.ae';
        } else if (item.val() == 'satellite-services') {
          groupEmail = 'cwsmarketing@etisalat.ae';
        } else if (item.val() == 'roaming-services') {
          groupEmail = 'cwsmarketing@etisalat.ae';
        }
        return groupEmail;
      });

      /**
* Callback for successfull ajax submit
*/
      var submitSuccessResponse;
      submitSuccessResponse = function (json, statusText, xhr) {
        var path = window.location.pathname;
        var page = path.split('/').pop();
        window.location.href = window.location.href.replace(page, 'cws-need-help-success.jsp');
        return true;
      };


      /**
       * Callback for ajax submit with error
       * @param jqXHR
       * @param textStatus
       * @param error
       */
      var submitErrorResponse;
      submitErrorResponse = function (jqXHR, textStatus, error) {
        //console.log('error' + jqXHR + textStatus + error)
      };
      $form.validate({
        rules: {
          fullName: {
            required: true,
            realalphabeticlatinarabic: true,
            maxlength: 248
          },
          emailAddress: {
            required: true,
            email: true
          },
          contactNumber: {
            required: true,
            maxlength: 15
          },
          companyName: {
            required: true,
            realalphabeticlatinarabic: true,
            maxlength: 248
          },
          countryName: {
            required: true,
            realalphabeticlatinarabic: true,
            maxlength: 248
          },
          selectServices: {
            required: true,
            realalphabeticlatinarabic: true,
            maxlength: 248
          },
          description: {
            required: true
          }
        },

        submitHandler: function (form) {
          var formData = $form.serialize();
          var dataObj = getFormData($form);
          // get the form data before disabling fields (otherwise they don't get value)

          // grecaptcha.ready(function () {
       

          //   grecaptcha.execute(document.getElementById('gCaptchaResponseKey').dataset.sitekey, { action: 'validate_captcha' })
          //     .then(function (token) {
              
          //       document.getElementById('gCaptchaResponse').value = token;
               
          //       var dataObj = getFormData($form);
          //       var emailsGroup = groupEmail;

          //       if (dataObj.gCaptchaResponse === "") {
          //         $('#gCaptchaResponse').text("something went wrong please try again")
          //         return false
          //       }
          //       var dataWithPayload = {
          //         "accountNumber": dataObj.contactNumber,
          //         "email": emailsGroup,
          //         "notificationType": "EMAIL",
          //         "notificationScenario": "leadInquiry",
          //         "gCaptchaResponse": token,
          //         "params": [
          //           {
          //             "key": "CUSTOMER_NAME",
          //             "value": dataObj.fullName
          //           },
          //           {
          //             "key": "EMAIL",
          //             "value": dataObj.emailAddress
          //           },
          //           {
          //             "key": "CONTACT",
          //             "value": dataObj.contactNumber
          //           },
          //           {
          //             "key": "COUNTRY",
          //             "value": dataObj.countryName
          //           },
          //           {
          //             "key": "COMPANY",
          //             "value": dataObj.companyName
          //           },
          //           {
          //             "key": "SERVICE",
          //             "value": dataObj.selectServices
          //           },
          //           {
          //             "key": "DETAIL",
          //             "value": dataObj.description
          //           }
          //         ]
          //       };

          //       var dataObjJSON = JSON.stringify(dataWithPayload, null, 2);


          //       $.ajax({
          //         type: 'POST',
          //         url: $form.attr('action'),
          //         data: dataObjJSON,
          //         dataType: 'json',

          //         headers: {
          //           "content-type": "application/json",
          //           "x-calling-application": "cms"
          //         },
          //         encode: true
          //       })
          //         .done(submitSuccessResponse)
          //         .fail(submitErrorResponse);
          //     })

          // });


          
          return false;
        }

      });






    });



    /*--intlTelInput starts--*/
    var input = document.querySelector('#country-listbox')
    var itiCountryName = window.intlTelInput(input, {
      utilsScript: intlTelInputUtils,
      excludeCountries:["ae"],
      autoPlaceholder:'off'
    });
    //iti.selectedFlag.children[0].textContent = '+'+iti.getSelectedCountryData().dialCode;
    input.selectedFlag.children[0].textContent = itiCountryName.getSelectedCountryData().name.replace(/\([^()]*\)/g, '');
    $('#country-listbox').val(itiCountryName.getSelectedCountryData().name.replace(/\([^()]*\)/g, ''));
    $('#country-listbox').closest('.floating-label-input').find('labelcmp-form-options__label').addClass('floating-label');
    $('.select-country-name .selected-flag .iti-flag').text('');
    input.addEventListener("countrychange", function (e) {
      console.log(itiCountryName.getSelectedCountryData().name.replace(/\([^()]*\)/g, ''));
      $('#country-listbox').val(itiCountryName.getSelectedCountryData().name.replace(/\([^()]*\)/g, ''));
    });


    /*--intlTelInput starts--*/

    var input2 = document.querySelector("#contactNumber");
    // var iti = window.intlTelInput(input2, {
    //   utilsScript: intlTelInputUtils,
    //   excludeCountries: ["ae"],
    //   autoPlaceholder: 'off'
    // });

    $(input2).focus(function () {
      $('#contactNumber').closest('.floating-label-input').find('label').addClass('floating-label');
    });
    // $(input2).blur(function(){
    //   $('#contactNumber').closest('.floating-label-input').find('label').removeClass('floating-label');
    // });


    //iti.selectedFlag.children[0].textContent = '+'+iti.getSelectedCountryData().dialCode;

    iti.selectedFlag.children[0].textContent = '+' + iti.getSelectedCountryData().dialCode;
    //$('#contactNumber').val(iti.getSelectedCountryData().dialCode);
    //$('.selected-flag .iti-flag').text('');
    input2.addEventListener("countrychange", function (e) {
      //console.log(iti.getSelectedCountryData().dialCode);
      iti.selectedFlag.children[0].textContent = '+' + iti.getSelectedCountryData().dialCode;
      $('#contactNumber').closest('.floating-label-input').find('label').addClass('floating-label');
      //$('#contactNumber').val(iti.getSelectedCountryData().dialCode);
    });

    // //validation start
    var errorMsg = document.querySelector("#error-msg");
    var validMsg = document.querySelector("#valid-msg");
    //
    // // here, the index maps to the error code returned from getValidationError - see readme
    var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
    var reset;
    reset = function () {
      input2.classList.remove("error");
      input2.classList.remove("valid");
      errorMsg.innerHTML = "";
      errorMsg.classList.add("hide");
      validMsg.classList.add("hide");
      input2.parentElement.parentElement.classList.remove('has-error-fields');
      $('.intl-tel-input .has-error.alert-label').css('display', 'none');
    };
    //
    // // on blur: validate
    input2.addEventListener('blur', function () {
      reset();
      if (input2.value.trim()) {
        if (iti.isValidNumber()) {
          validMsg.classList.remove("hide");
          input2.classList.add("valid");
          $('.intl-tel-input .has-error.alert-label').css('display', 'none');
        } else {
          input2.classList.add("error");
          input2.parentElement.parentElement.classList.add('has-error-fields')
          var errorCode = iti.getValidationError();
          errorMsg.innerHTML = errorMap[errorCode];
          errorMsg.classList.remove("hide");
        }
      }
    });


    // on keyup / change flag: reset
    input2.addEventListener('change', reset);
    input2.addEventListener('keyup', reset);





  };
  //});
})(define, window);
