
import intlTelInput from 'intl-tel-input';
/*
 * International Telephone Input v15.0.2
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// wrap in UMD

(function (factory) {
    var intlTelInput = factory(window, document);
    if (typeof module === "object" && module.exports) module.exports = intlTelInput; else window.intlTelInput = intlTelInput;
})(function (window, document, undefined) {
    //"use strict";
    return function () {

        var utilPath = "https://cdn.jsdelivr.net/npm/intl-tel-input@15.0.2/build/js/utils.js";
        var contentString = "";
        var alertIcon;
        
        contentString = `<div class="alert-icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink">
         <use xlink:href="#error-icon-red">
          <symbol id="error-icon-red" viewBox="0 0 64 64">
            <defs></defs>
            <g id="icon_error" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round"  stroke-linejoin="round">
                <g id="icon_error_red_64" stroke="#BE1218"> 
                <g id="@-Self-Care-/-Icon-/-Outline-/-Error-/-red">
                <path d="M59.9958503,31.5126196 C60.2643926,46.9726045 47.4634532,59.7271876 31.9999998,59.9956917 C16.5390919,60.2641958 4.27269159,47.9486362 4.00414931,32.4873787 C3.73560704,17.0273937 16.5378192,4.27281071 31.9999998,4.00430657 C47.4634532,3.73580243 59.727308,16.0564522 59.9958503,31.5126196 L59.9958503,31.5126196 Z" id="Line"></path>
                <g id="Group-2" fill-rule="evenodd" transform="translate(20.000000, 20.000000)">
                     <path d="M24,0 L0,24" id="Line"></path>
                    <path d="M24,24 L0,0" id="Line"></path>
                    </g>
                </g>
                </g>
              </g>
            </symbol>
            </use>
         </svg>
        </div>`

        if(document.querySelector('[name="firstName"]') !== null)
        {
            $('[name="firstName"]').parent().find('label').length
            {
                document.querySelector('[name="firstName"]').parentElement.innerHTML +="<label>" + document.querySelector('[name="firstName"]').placeholder + "</label>";
                document.querySelector('[name="firstName"]').placeholder = "";
            }
       
            $('[name="firstName"]').parent().removeClass("floating-label-input").addClass('floating-label-input');
            $('[name="firstName"]').parent().parent().removeClass("form-section").addClass('form-section');
        }
        if(document.querySelector('[name="lastName"]') !== null)
        {    
            $('[name="lastName"]').parent().find('label').length
            {
                document.querySelector('[name="lastName"]').parentElement.innerHTML +="<label>" + document.querySelector('[name="lastName"]').placeholder + "</label>";
                document.querySelector('[name="lastName"]').placeholder = "";
            }    
       
            $('[name="lastName"]').parent().removeClass("floating-label-input").addClass('floating-label-input');
            $('[name="lastName"]').parent().parent().removeClass("form-section").addClass('form-section');
        }
        if(document.querySelector('[name="companyName"]') !== null)
        {
            $('[name="companyName"]').parent().find('label').length
            {
                document.querySelector('[name="companyName"]').parentElement.innerHTML += "<label>" + document.querySelector('[name="companyName"]').placeholder + "</label>";
                document.querySelector('[name="companyName"]').placeholder = "";
            }                   
       
            $('[name="companyName"]').parent().removeClass("floating-label-input").addClass('floating-label-input');
            $('[name="companyName"]').parent().parent().removeClass("form-section").addClass('form-section');
        }
        if(document.querySelector('[name="emirate"]') !== null)
        {
            $('[name="emirate"]').parent().removeClass("floating-label-input").addClass('floating-label-input');
            $('[name="emirate"]').parent().parent().removeClass("form-section").addClass('form-section');
        }
        if(document.querySelector('[name="email"]') !== null)
        {
            $('[name="email"]').parent().find('label').length
            {
                document.querySelector('[name="email"]').parentElement.innerHTML += "<label>" + document.querySelector('[name="email"]').placeholder + "</label>";
                document.querySelector('[name="email"]').placeholder = "";
            }          
            
             $('[name="email"]').parent().removeClass("floating-label-input").addClass('floating-label-input');
             $('[name="email"]').parent().parent().removeClass("form-section").addClass('form-section');
        }
        if(document.querySelector('[name="phoneNumber"]') !== null)
        {
            
           
            $('[name="phoneNumber"]').parent().find('label').length
            {
                document.querySelector('[name="phoneNumber"]').parentElement.innerHTML += "<label>" + document.querySelector('[name="phoneNumber"]').placeholder + "</label>";
                document.querySelector('[name="phoneNumber"]').placeholder ="";
            } 
            $('[name="phoneNumber"]').parent().removeClass("floating-label-input").addClass('floating-label-input');
            $('[name="phoneNumber"]').parent().parent().removeClass("form-section").addClass('form-section');
        
        }
        
        function email2(value) {
            var regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;

            return regex.test(value);
        };
        // accept only letters and spaces only
        function realalphabetic(value) {
            var regex = /^[a-zA-Z\s]+$/i;
            return regex.test(value);
        }
       
        function phonevalid(value) {
            /* eslint-disable no-control-regex, max-len */
            var regex = /^(050|054|055|056|052)/i;
            return regex.test(value);
        }

        function removeunWantedParsers() {

            $('#phone1-error').parent().parent().find('.new').remove();
            $('#error').parent().parent().find('.new').remove();           
            $("#firstName-error").parent().parent().find('.new').remove();
            $("#lastName-error").parent().parent().find('.new').remove();
           
         
        }
        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
            except the current select box:*/
            var x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        var x, i, j, l, ll, selElmntAboutUs, a, b, c, d;

        selElmntAboutUs = document.querySelector("#emirate");
        if (selElmntAboutUs !== null) {

            $("#emirate option[value='*']").each(function () {
                $("#emirate option[value='*']").remove();
            });

            selElmntAboutUs = document.querySelector("#emirate");
            ll = selElmntAboutUs.length;

            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmntAboutUs.options[selElmntAboutUs.selectedIndex].innerHTML;
            selElmntAboutUs.parentElement.appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 0; j < ll; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                d = document.createElement("DIV");
                d.setAttribute("class", "selecteddiv");
                c.appendChild(d);
                d.innerHTML = selElmntAboutUs.options[j].innerHTML;

                d.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.parentElement.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.parentNode.previousSibling;
                    var elems = document.querySelectorAll(".same-as-selected");
                    [].forEach.call(elems, function(el) {
                        el.classList.remove("same-as-selected");
                      });
                    for (i = 0; i < sl; i++) {
                        
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                               // y[k].removeAttribute("class");                              
                                $(this).removeClass('same-as-selected');
                               
                            }
                            $(this).addClass('same-as-selected selecteddiv');
                            //this.setAttribute("class", "same-as-selected selecteddiv");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            selElmntAboutUs.parentElement.append(b);

            a.addEventListener("click", function (e) {
                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });

            /*if the user clicks anywhere outside the select box,
            then close all select boxes:*/
            document.addEventListener("click", closeAllSelect);
        }
      
        if(document.querySelector('[name="emirate"]') !== null)
        {
            $('[name="emirate"]').parent().removeClass("floating-label-input").addClass('floating-label-input');
                        
                document.querySelector('.select-selected').innerText = 'Emirate';
          
        }
        var excludedKeys = [
            16, 17, 18, 20, 35, 36, 37,
            38, 39, 40, 45, 144, 225
        ];
       
        var fieldRequired = '<div id="errorRequired" class="has-error alert-label">This field is required.</div>'
       

       
        var input = document.querySelector("#phone1")
      
        

        if (input !== null) {
            var iti = intlTelInput(input, {
                utilsScript: utilPath,
                separateDialCode: false,
                allowDropdown: false,
                // if there is just a dial code in the input: remove it on blur
                autoHideDialCode: true,
                // add a placeholder in the input with an example number for the selected country
                autoPlaceholder: false,

            });

            $('.iti__flag-container').addClass('hide');
            var labelHtml = document.querySelector('#phone1').parentElement.parentElement.getElementsByTagName("label")[0];
            //document.querySelector('#phone1').parentElement.parentElement.getElementsByTagName("label")[0].remove();
            document.querySelector('#phone1').parentElement.append(labelHtml);

            //var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid format"];
            var errorMap = ["Invalid number", "Invalid country code", "Please Enter At Least 10 Characters.", "Please Enter No More Than 10 Characters.", "Invalid format"];

            var errorMsg;
            if ($("#phone1") !== null) {
                $("#phone1").parent().parent().parent().parent().find('.new').remove();
            }
            if ($("#select-block-unblock") !== null) {
                $("#select-block-unblock").parent().parent().parent().find('.new').remove();
            }




            $(document).on("keyup", "#phone1", function (e) {
                if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                    return;
                } else {
                    if ($("#phone1").val().trim()) {
                        var inputVal = $('#phone1').val();
                        iti.telInput.value = inputVal;
                        if (phonevalid(inputVal) && inputVal.length == 10) {
                            $("#phone1").parent().parent().removeClass("has-error-fields").addClass('is-valid');
                            $("#phone1").parent().find(".alert-label").remove();
                            $("#phone1").parent().find(".alert-icon").remove();

                        } else {

                            var errorCode = "";
                            errorCode = iti.getValidationError();
                            errorMsg = "";
                            errorMsg = errorMap[errorCode];
                            $("#phone1").parent().parent().removeClass("has-error-fields").removeClass('is-valid');
                            $("#phone1").parent().parent().find("label").removeClass("floating-label").addClass("floating-label");

                            if (errorMsg) {
                                $("#phone1").parent().parent().addClass("has-error-fields");
                                //$("#phone1").parent().after('<div id="phone1-error" class="has-error alert-label">' + errorMsg + '</div>');
                                alertIcon = "";
                                alertIcon = contentString;

                                if ($("#phone1").parent().parent().hasClass("has-error-fields")) {
                                    $("#phone1").parent().find(".alert-label").remove();
                                    $("#phone1").parent().find(".alert-icon").remove();
                                    document.querySelector('#phone1').parentElement.innerHTML += '<div id="phone1-error" class="has-error alert-label">' + errorMsg + '</div>';
                                    //document.querySelector('#phone1').parentElement.innerHTML += alertIcon;
                                    $('#phone1').val(inputVal);
                                    $("#phone1").keyup();
                                    $("#phone1").parent().find('.iti__flag-container').after(alertIcon);
                                    $('#phone1-error').parent().parent().find('.new').remove();
                                };
                            }
                            $('#phone1').focus();
                        }
                    }
                }

            });

        }


      
        $(document).on("keyup", "#companyName", function (event) {
            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else {
                $("#companyName").parent().removeClass("has-error-fields"); // remove it 
                $("#companyName").parent().find(".alert-label").remove();
                $("#companyName").parent().find(".alert-icon").remove();
                var inputVal = $('#companyName').val();
                $("#companyName").parent().find("label").removeClass("floating-label").addClass("floating-label");
                if ($('#companyName').val()== "") {
                    $("#companyName").parent().addClass("has-error-fields").removeClass("is-valid");                   
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#companyName").parent().hasClass("has-error-fields")) {
                        document.querySelector("#companyName").parentElement.innerHTML += fieldRequired;    
                        document.querySelector('#companyName').parentElement.innerHTML += alertIcon;
                        $('#companyName').val(inputVal);
                        $("#companyName").keyup();
                        $("#companyName").parent().find("label").removeClass("floating-label");
                    };
                  return;
                }
                if (!$('#companyName').val() && $('#companyName').val() == "") {
                    $("#companyName").parent().addClass("has-error-fields").removeClass("is-valid");                   
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#companyName").parent().hasClass("has-error-fields")) {
                        document.querySelector("#companyName").parentElement.innerHTML += fieldRequired;    
                        document.querySelector('#companyName').parentElement.innerHTML += alertIcon;
                        $('#companyName').val(inputVal);
                        $("#companyName").keyup();
                        $("#companyName").parent().find("label").removeClass("floating-label");
                    };
                    $('#companyName-error').parent().parent().find('.new').remove();

                } else {
                    $("#companyName").parent().addClass("is-valid").removeClass("has-error-fields");
                    $("#companyName").parent().find("label").removeClass("floating-label").addClass("floating-label");
                }
            }
        });
        $(document).on("keyup", "#firstName", function (event) {
            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else {
                $("#firstName").parent().removeClass("has-error-fields"); // remove it 
                $("#firstName").parent().find(".alert-label").remove();
                $("#firstName").parent().find(".alert-icon").remove();
                var inputVal = $('#firstName').val();
                $("#firstName").parent().find("label").removeClass("floating-label").addClass("floating-label");
                if ($('#firstName').val()== "") {
                    $("#firstName").parent().addClass("has-error-fields").removeClass("is-valid");                   
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#firstName").parent().hasClass("has-error-fields")) {
                        document.querySelector("#firstName").parentElement.innerHTML += fieldRequired;    
                        document.querySelector('#firstName').parentElement.innerHTML += alertIcon;
                        $('#firstName').val(inputVal);
                        $("#firstName").keyup();
                        $("#firstName").parent().find("label").removeClass("floating-label");
                    };
                  return;
                }
                if (!$('#firstName').val() && $('#firstName').val() == "") {
                    $("#firstName").parent().addClass("has-error-fields").removeClass("is-valid");                   
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#firstName").parent().hasClass("has-error-fields")) {
                        document.querySelector("#firstName").parentElement.innerHTML += fieldRequired;    
                        document.querySelector('#firstName').parentElement.innerHTML += alertIcon;
                        $('#firstName').val(inputVal);
                        $("#firstName").keyup();
                        $("#firstName").parent().find("label").removeClass("floating-label");
                    };
                    $('#firstName-error').parent().parent().find('.new').remove();

                } else {
                    $("#firstName").parent().addClass("is-valid").removeClass("has-error-fields");
                    $("#firstName").parent().find("label").removeClass("floating-label").addClass("floating-label");
                }
            }
        });
        $(document).on("keyup", "#lastName", function (event) {
            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else {
                $("#lastName").parent().removeClass("has-error-fields"); // remove it 
                $("#lastName").parent().find(".alert-label").remove();
                $("#lastName").parent().find(".alert-icon").remove();
                var inputVal = $('#lastName').val();
                if ($('#lastName').val()== "") {
                    $("#lastName").parent().addClass("has-error-fields").removeClass("is-valid");                   
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#lastName").parent().hasClass("has-error-fields")) {
                        document.querySelector("#lastName").parentElement.innerHTML += fieldRequired;    
                        document.querySelector('#lastName').parentElement.innerHTML += alertIcon;
                        $('#lastName').val(inputVal);
                        $("#lastName").keyup();
                        $("#lastName").parent().find("label").removeClass("floating-label");
                    };
                  return;
                }
                $("#lastName").parent().find("label").removeClass("floating-label").addClass("floating-label");
                if (!$('#lastName').val() && $('#lastName').val() == "") {
                    $("#lastName").parent().addClass("has-error-fields").removeClass("is-valid");                   
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#lastName").parent().hasClass("has-error-fields")) {
                        document.querySelector("#lastName").parentElement.innerHTML += fieldRequired;    
                        document.querySelector('#lastName').parentElement.innerHTML += alertIcon;
                        $('#lastName').val(inputVal);
                        $("#lastName").keyup();
                        $("#lastName").parent().find("label").removeClass("floating-label");
                    };
                    $('#lastName-error').parent().parent().find('.new').remove();

                } else {
                    $("#lastName").parent().addClass("is-valid").removeClass("has-error-fields");
                    $("#lastName").parent().find("label").removeClass("floating-label").addClass("floating-label");
                }
            }
        });
      

        $(document).on("keyup", "#emailAddress", function (element) {

            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else {
                var inputVal = $('#emailAddress').val();

                $("#emailAddress").parent().removeClass("has-error-fields"); // remove it 
                $("#emailAddress").parent().find(".alert-label").remove();
                $("#emailAddress").parent().find(".alert-icon").remove();
                $("#emailAddress").parent().find("label").removeClass("floating-label").addClass("floating-label");
                if ($('#emailAddress').val()== "") {
                    $("#emailAddress").parent().addClass("has-error-fields").removeClass("is-valid");                   
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#emailAddress").parent().hasClass("has-error-fields")) {
                        document.querySelector("#emailAddress").parentElement.innerHTML += fieldRequired;    
                        document.querySelector('#emailAddress').parentElement.innerHTML += alertIcon;
                        $('#emailAddress').val(inputVal);
                        $("#emailAddress").keyup();
                        $("#emailAddress").parent().find("label").removeClass("floating-label");
                    };
                  return;
                }
                
                if (!email2($('#emailAddress').val())) {

                    $("#emailAddress").parent().addClass("has-error-fields").removeClass("is-valid");
                   // $("#emailAddress").parent().after('<div id="emailAddress-error" class="has-error alert-label">Please enter a valid email address</div>');
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#emailAddress").parent().hasClass("has-error-fields")) {
                        document.querySelector("#emailAddress").parentElement.innerHTML += '<div id="emailAddress-error" class="has-error alert-label">Please enter a valid email address</div>';  
                        document.querySelector('#emailAddress').parentElement.innerHTML += alertIcon;
                        $('#emailAddress').val(inputVal);
                        $("#emailAddress").keyup();
                    }
                    else {
                        $("#emailAddress").parent().removeClass("has-error-fields").addClass("is-valid");
                    }


                }
                else {
                    $("#emailAddress").parent().addClass("is-valid").removeClass("has-error-fields");
                    $("#emailAddress").parent().find("label").removeClass("floating-label").addClass("floating-label");
                }
                $('#emailAddress').focus();
            }
        });
      
     
      
     

        function clearForm() {
            alertIcon = "";
            $("#emailAddress").parent().find(".alert-label").remove(); // remove it        
                
            $("#companyName").parent().find(".alert-label").remove();
            
            $("#firstName").parent().find(".alert-label").remove();
           
            $("#mobileNumber").parent().parent().next(".alert-label").remove();
            
           
            $("#emailAddress").parent().removeClass("has-error-fields");
            $("#companyName").parent().removeClass("has-error-fields");
          
            $("#firstName").parent().removeClass("has-error-fields");
            
            $("#mobileNumber").parent().parent().removeClass("has-error-fields");
            

            $("#fullName").parent().find(".alert-icon").remove(); // remove it   
            $("#emailAddress").parent().find(".alert-icon").remove(); // remove it   
            $("#companyName").parent().find(".alert-icon").remove();
            $("#description").parent().find(".alert-icon").remove();
            $("#firstName").parent().find(".alert-icon").remove();
            $("#lastName").parent().find(".alert-icon").remove();
            $("#url").parent().find(".alert-icon").remove();
            $("#justification").parent().find(".alert-icon").remove();
            $("#phone1").parent().find(".alert-icon").remove();
            $("#mobileNumber").parent().find(".alert-icon").remove();
            $("#designation").parent().find(".alert-icon").remove();
            $("#accountNumber").parent().find(".alert-icon").remove();

        }

        $('.cmp-form-button').on('click', function () {

            var div = "";
            div = '<div id="error" class="has-error alert-label">This field is required.</div>'

            clearForm();



            if (!$('#emailAddress').val()) {
                $("#emailAddress").parent().removeClass("is-valid").addClass("has-error-fields");
                if ($("#emailAddress").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#emailAddress").parent().after(div);
                    alertIcon = "";
                    alertIcon = contentString;
                    if (document.querySelector('#emailAddress') != null) {
                        document.querySelector('#emailAddress').parentElement.innerHTML += alertIcon;
                    }

                } else {
                    $("#emailAddress").parent().removeClass("has-error-fields").addClass("is-valid");
                }

                $('#emailAddress').focus();

            }
            if (!$('#companyName').val()) {
                $("#companyName").parent().removeClass("is-valid").addClass("has-error-fields");
                alertIcon = "";
                alertIcon = contentString;
                if ($("#companyName").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#companyName").parent().after(div);

                    if ($("#companyName").parent().hasClass("has-error-fields")) {
                        document.querySelector('#companyName').parentElement.innerHTML += alertIcon;

                    };
                    removeunWantedParsers();
                }
                $('#companyName').focus();

            } else {
                $("#companyName").parent().removeClass("has-error-fields").addClass("is-valid");
            }
           

         
            if (!$('#firstName').val()) {
                $("#firstName").parent().removeClass("has-error-fields").addClass("has-error-fields");
                if ($("#firstName").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#firstName").parent().after(div);
                    alertIcon = "";
                    alertIcon = contentString;
                    if (document.querySelector('#firstName') != null) {
                        document.querySelector('#firstName').parentElement.innerHTML += alertIcon;
                    }

                }
                $('#firstName').focus();

            } else {
                $("#firstName").parent().removeClass("has-error-fields").addClass("is-valid");
            }

            if (!$('#lastName').val()) {
                $("#lastName").parent().removeClass("is-valid").addClass("has-error-fields");
                if ($("#lastName").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#lastName").parent().after(div);
                    alertIcon = "";
                    alertIcon = contentString;
                    if (document.querySelector('#lastName') != null) {
                        document.querySelector('#lastName').parentElement.innerHTML += alertIcon;
                    }
                    removeunWantedParsers();
                }
                $('#lastName').focus();

            } else {
                $("#lastName").parent().removeClass("has-error-fields").addClass("is-valid");
            }

            if (!$('#phoneNumber').val() || $('#phoneNumber').val() == "") {
                $("#phoneNumber").parent().parent().removeClass("has-error-fields").removeClass('is-valid');
                $("#phoneNumber").parent().parent().addClass("has-error-fields");
                
                alertIcon = "";
                alertIcon = contentString;

                if ($("#phoneNumber").parent().parent().hasClass("has-error-fields")) {
                    $("#phoneNumber").parent().find(".alert-label").remove();
                    $("#phoneNumber").parent().find(".alert-icon").remove();
                    document.querySelector('#phoneNumber').parentElement.innerHTML += div;
                    $("#phoneNumber").parent().find('.iti__flag-container').after(alertIcon);

                    $('#phoneNumber-error').parent().parent().find('.new').remove();
                };
                $('#phoneNumber').focus();

            }
            else {
                $("#phoneNumber").parent().removeClass("has-error-fields").addClass('is-valid');
            }
       
          
            //removeunWantedParsers();

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

        if (document.getElementById("mobileNumber") !== null) {
            setInputFilter(document.getElementById("mobileNumber"), function (value) {
                return /^-?\d*$/.test(value);
            });

        }
        if (document.getElementById("accountNumber") !== null) {
            setInputFilter(document.getElementById("accountNumber"), function (value) {
                return /^-?\d*$/.test(value);
            });
        }
        if (document.getElementById("phone1") !== null) {
            setInputFilter(document.getElementById("phone1"), function (value) {
                return /^-?\d*$/.test(value);
            });

        }
        if (document.getElementById(" emirate") !== null) {
            setInputFilter(document.getElementById(" emirate"), function (value) {
                return /^-?\d*$/.test(value);
            });

        }



        // these vars persist through all instances of the plugin
        var id = 0;
        var defaults = {
            // whether or not to allow the dropdown
            allowDropdown: true,
            // if there is just a dial code in the input: remove it on blur
            autoHideDialCode: true,
            // add a placeholder in the input with an example number for the selected country
            autoPlaceholder: false,
            // modify the parentClass
            customContainer: "",
            // modify the auto placeholder
            customPlaceholder: null,
            // append menu to specified element
            dropdownContainer: null,
            // don't display these countries
            excludeCountries: [],
            // format the input value during initialisation and on setNumber
            formatOnDisplay: true,
            // geoIp lookup function
            geoIpLookup: null,
            // inject a hidden input with this name, and on submit, populate it with the result of getNumber
            hiddenInput: "",
            // initial country
            initialCountry: "",
            // localized country names e.g. { 'de': 'Deutschland' }
            localizedCountries: null,
            // don't insert international dial codes
            nationalMode: true,
            // display only these countries
            onlyCountries: [],
            // number type to use for placeholders
            placeholderNumberType: "MOBILE",
            // the countries at the top of the list. defaults to united states and united kingdom
            preferredCountries: ["us", "gb"],
            // display the country dial code next to the selected flag so it's not part of the typed number
            separateDialCode: false,
            // specify the path to the libphonenumber script to enable validation/formatting
            utilsScript: ""
        };
        // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes
        var regionlessNanpNumbers = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
        // keep track of if the window.load event has fired as impossible to check after the fact
        window.addEventListener("load", function () {
            // UPDATE: use a public static field so we can fudge it in the tests
            //intlTelInputGlobals.windowLoaded = true;
        });
        // utility function to iterate over an object. can't use Object.entries or native forEach because
        // eslint-disable-next-line no-unused-vars
        var Iti = /*#__PURE__*/
            function () {
                function Iti(input, options) {
                    var _this;
                    _this = this;
                    this.activeItem = null;
                    this.highlightedItem = null;
                    // process specified options / defaults
                    // alternative to Object.assign, which isn't supported by IE11
                    var customOptions = options || {};
                    this.options = {};

                }

            }();
        /********************
 *  STATIC METHODS
 ********************/
        // get the country data object
        window.intlTelInputGlobals.getCountryData = function () {
            // return allCountries;
        };

        // default options
        window.intlTelInputGlobals.defaults = defaults;
        // version
        window.intlTelInputGlobals.version = "15.0.2";
        // convenience wrapper

    }();
});