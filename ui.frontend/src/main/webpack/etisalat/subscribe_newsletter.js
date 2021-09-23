import intlTelInput from 'intl-tel-input';
/*
 * International Telephone Input v15.0.2
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// wrap in UMD

(function (factory) {
    var intlTelInput = factory(window, document);
    if (typeof module === "object" && module.exports) module.exports = intlTelInput;
    else window.intlTelInput = intlTelInput;
})(function (window, document, undefined) {
    //"use strict";
    return function () {

        function email2(value) {
            var regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;

            return regex.test(value);
        };



        $("#NewsLetterEmailAddress").blur(function () {
            $("#NewsLetterEmailAddress").parent().removeClass("has-error-fields");
            $("#NewsLetterEmailAddress").parent().next(".alert-label").remove();
            if (!email2($('#NewsLetterEmailAddress').val())) {
                $("#NewsLetterEmailAddress").parent().addClass("has-error-fields");
                $("#NewsLetterEmailAddress").parent().after('<div id="email-error" class="has-error alert-label">This Field Is Required.</div>');
            }

        });


        $("#NewsLetterEmailAddress").keypress(function () {
            $("#NewsLetterEmailAddress").parent().next(".alert-label").remove(); // remove it 
            $("#NewsLetterEmailAddress").parent().removeClass("has-error-fields");
            if (!email2($('#NewsLetterEmailAddress').val())) {
                $("#NewsLetterEmailAddress").parent().addClass("has-error-fields").removeClass("is-valid");
                $("#NewsLetterEmailAddress").parent().after('<div id="email-error" class="has-error alert-label">Invalid Email Address. Please Enter Again.</div>');
            } else {
                $("#NewsLetterEmailAddress").parent().removeClass("has-error-fields").addClass("is-valid");

            }
        });
        // accept only letters and spaces only
        function realalphabetic(value) {
            var regex = /^[a-zA-Z\s]+$/i;
            return regex.test(value);
        }
        $("#CustomerName").keyup(function () {
            $("#CustomerName").parent().removeClass("has-error-fields");
            $("#CustomerName").parent().next(".alert-label").remove();
            if (!realalphabetic($('#CustomerName').val())) {
                $("#CustomerName").parent().addClass("has-error-fields").removeClass("is-valid");
                $("#CustomerName").parent().after('<div id="companyName-error" class="has-error alert-label">Letters, and spaces only please.</div>');
            } else {
                $("#CustomerName").parent().removeClass("has-error-fields").addClass("is-valid");

            }
        });






        $('.subscribe_newsletter .cmp-form-button').on('click', function () {

            $("#CustomerName").keypress(function () {
                $("#CustomerName").parent().next(".alert-label").remove(); // remove it 
                $("#CustomerName").parent().removeClass("has-error-fields");
            });

            var svg = '<svg xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#alert-icon"></use></svg>';
            var div = "";
            div = '<div id="fullName-error" class="has-error alert-label">This Field Is Required.</div>'
            $("#NewsLetterEmailAddress").parent().next(".alert-label").remove(); // remove it        
            $("#CustomerName").parent().next(".alert-label").remove();
            $("#NewsLetterEmailAddress").parent().removeClass("has-error-fields");
            $("#CustomerName").parent().removeClass("has-error-fields");

            if ($('#CustomerName').val() == "") {
                $("#CustomerName").parent().addClass("has-error-fields");
                if ($("#CustomerName").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#CustomerName").parent().after(div);
                }
                // $('#CustomerName').focus();
                //return false;
            }
            if ($('#NewsLetterEmailAddress').val() == "") {
                $("#NewsLetterEmailAddress").parent().addClass("has-error-fields");
                if ($("#NewsLetterEmailAddress").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#NewsLetterEmailAddress").parent().after(div);
                }
                $('#NewsLetterEmailAddress').focus();
                return false;
            } else {
                if (!email2($('#NewsLetterEmailAddress').val())) {
                    $("#NewsLetterEmailAddress").parent().addClass("has-error-fields");
                    $("#NewsLetterEmailAddress").parent().after('<div id="email-error" class="has-error alert-label">Please enter a valid email address.</div>');
                    $('#NewsLetterEmailAddress').focus();
                    return false;
                }
            }
            $('.dynamicEmail').text($("input[name='NewsLetterEmailAddress']").val());
            $('.cmp-experiencefragment--Newsletter-subscription-pop-up').show();
        });

        function setInputFilter(textbox, inputFilter) {
            ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
                textbox.addEventListener(event, function () {
                    if (inputFilter(this.value)) {
                        this.oldValue = this.value;
                        this.oldSelectionStart = this.selectionStart;
                        this.oldSelectionEnd = this.selectionEnd;
                    } else if (this.hasOwnProperty("oldValue")) {
                        this.value = this.oldValue;
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    } else {
                        this.value = "";
                    }
                });
            });
        }

    }();
});


$(document).ready(function () {
    $("input[type='text'], input[type='email']").bind('focus', function() {
        $(this).css('background-color', 'white');
     });
    $('.subscribe_newsletter .cmp-form-text label[for="NewsLetterEmailAddress"]').addClass('input_div_unique');
    $('.subscribe_newsletter .cmp-form-text label[for="CustomerName"]').addClass('div_label_unique');

    $(".form-close").on("click", function (event) {
        event.preventDefault(); //this stops the form submit + refresh 
        $(".cmp-experiencefragment--Newsletter-subscription-pop-up").hide();
    });

    $(".subscribe_newsletter .cmp-form-text #CustomerName").focusin(function () {
        // $('.subscribe_newsletter .cmp-form-text label').css("background-color", "black");
        $('div_label_unique').addClass('lablelClass');
        $('.div_label_unique').removeClass('lablelClassNew');
    });

    $(".subscribe_newsletter .cmp-form-text #CustomerName").focusout(function () {
        // $('.subscribe_newsletter .cmp-form-text label').css("background-color", "black");
        $('div_label_unique').removeClass('lablelClass');
        $('.div_label_unique').addClass('lablelClassNew');
    });


    $(".subscribe_newsletter .cmp-form-text #NewsLetterEmailAddress").focusin(function () {
        // $('.subscribe_newsletter .cmp-form-text label').css("background-color", "black");
        $('.input_div_unique').addClass('lablelClass');
        $('.input_div_unique').removeClass('lablelClassNew');
    });

    $(".subscribe_newsletter .cmp-form-text #NewsLetterEmailAddress").focusout(function () {
        // $('.subscribe_newsletter .cmp-form-text label').css("background-color", "black");
        $('.input_div_unique').removeClass('lablelClass');
        $('.input_div_unique').addClass('lablelClassNew');
    });
});