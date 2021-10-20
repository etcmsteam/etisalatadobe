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
        // Array of country objects for the flag dropdown.
        // Here is the criteria for the plugin to support a given country/territory
        // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
        // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
        // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
        // Each country array has the following information:
        // [
        //    Country name,
        //    iso2 code,
        //    International dial code,
        //    Order (if >1 country with same dial code),
        //    Area codes
        // ]

        var utilPath = "https://cdn.jsdelivr.net/npm/intl-tel-input@15.0.2/build/js/utils.js";
        var allCountries = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "United States", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1]];
        // loop over all of the countries above, restructuring the data to be objects with named keys
        for (var i = 0; i < allCountries.length; i++) {
            var c = allCountries[i];
            allCountries[i] = {
                name: c[0],
                iso2: c[1],
                dialCode: c[2],
                priority: c[3] || 0,
                areaCodes: c[4] || null
            };
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
        var ele;
        ele = document.querySelector("#country-code");
        if (ele !== null) {
            for (var i = 0; i < allCountries.length; i++) {
                // POPULATE SELECT ELEMENT WITH JSON.
                if (allCountries[i]['dialCode'] !== null && allCountries[i]['dialCode'] !== null) {
                    ele.innerHTML += '<option value="' + allCountries[i]['dialCode'] + '">' + '+' + allCountries[i]['dialCode'] + '</option>';
                }

            }
            var x, i, j, l, ll, selElmnt, a, b, c, d;

            selElmnt = document.querySelector("#country-code");
            ll = selElmnt.length;
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            selElmnt.parentElement.appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                d = document.createElement("DIV");
                d.setAttribute("class", "selecteddiv");
                c.appendChild(d);
                d.innerHTML = selElmnt.options[j].innerHTML;
                d.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.parentElement.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected selecteddiv");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            selElmnt.parentElement.append(b);

            a.addEventListener("click", function (e) {
                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });


        }
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

        var ele1 = document.querySelector("#country-listbox");
        if (ele1 !== null) {
            for (var i = 0; i < allCountries.length; i++) {
                // POPULATE SELECT ELEMENT WITH JSON.
                ele1.innerHTML += '<option value="' + allCountries[i]['dialCode'] + '">' + allCountries[i]['name'] + '</option>';
            }
            var x, i, j, l, ll, selElmntCounty, a, b, c, d;
            /*look for any elements with the class "custom-select":*/

            //for (i = 0; i < l; i++) {
            //selElmnt = x[i].getElementsByTagName("select")[0];
            selElmntCounty = document.querySelector("#country-listbox");

            ll = selElmntCounty.length;
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmntCounty.options[selElmntCounty.selectedIndex].innerHTML;
            selElmntCounty.parentElement.appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                d = document.createElement("DIV");
                d.setAttribute("class", "selecteddiv");
                c.appendChild(d);
                d.innerHTML = selElmntCounty.options[j].innerHTML;
                d.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.parentElement.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected selecteddiv");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            selElmntCounty.parentElement.append(b);
            //selElmnt.parentElement.getElementsByTagName("select").addClass('select-hide');
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


        var x, i, j, l, ll, selElmntCounty, a, b, c, d;

        selElmntCounty = document.querySelector("#select2-selection__rendered");
        if (selElmntCounty !== null) {

            $("#select2-selection__rendered option[value='*']").each(function () {
                $("#select2-selection__rendered option[value='*']").remove();
            });

            selElmntCounty = document.querySelector("#select2-selection__rendered");
            ll = selElmntCounty.length;

            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmntCounty.options[selElmntCounty.selectedIndex].innerHTML;
            selElmntCounty.parentElement.appendChild(a);
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
                d.innerHTML = selElmntCounty.options[j].innerHTML;

                d.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.parentElement.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.parentNode.previousSibling;;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected selecteddiv");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            selElmntCounty.parentElement.append(b);

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
        var x, i, j, l, ll, selElmntAboutUs, a, b, c, d;

        selElmntAboutUs = document.querySelector("#select-hear-about-us");
        if (selElmntAboutUs !== null) {

            $("#select-hear-about-us option[value='*']").each(function () {
                $("#select-hear-about-us option[value='*']").remove();
            });

            selElmntAboutUs = document.querySelector("#select-hear-about-us");
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
                    h = this.parentNode.parentNode.previousSibling;;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected selecteddiv");
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


        var x, i, j, l, ll, selElmntCounty, a, b, c, d;

        selElmntCounty = document.querySelector("#select-block-unblock");
        if (selElmntCounty !== null) {

            $("#select-block-unblock option[value='*']").each(function () {
                $("#select-block-unblock option[value='*']").remove();
            });

            selElmntCounty = document.querySelector("#select-block-unblock");
            ll = selElmntCounty.length;

            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmntCounty.options[selElmntCounty.selectedIndex].innerHTML;
            selElmntCounty.parentElement.appendChild(a);
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
                d.innerHTML = selElmntCounty.options[j].innerHTML;

                d.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.parentElement.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.parentNode.previousSibling;;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected selecteddiv");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            selElmntCounty.parentElement.append(b);

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
        function email2(value) {
            var regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;

            return regex.test(value);
        };
        // accept only letters and spaces only
        function realalphabetic(value) {
            var regex = /^[a-zA-Z\s]+$/i;
            return regex.test(value);
        }
        function realnumeric(value) {
            var regex = /^[0-9]*$/;
            return regex.test(value);
        }

       
        function urlvalid(value) {
            /* eslint-disable no-control-regex, max-len */
            var regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
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
            $('#fullName-error').parent().parent().find('.new').remove();
            $("#firstName-error").parent().parent().find('.new').remove();
            $("#lastName-error").parent().parent().find('.new').remove();
            $("#lastName-error").parent().parent().find('.new').remove();
         
        }
        function autoCompleteoff() {
            $("#fullName").attr("autocomplete", "off");
            $("#url").attr("autocomplete", "off");
            $("#emailAddress").attr("autocomplete", "off");
        }
        var excludedKeys = [
            16, 17, 18, 20, 35, 36, 37,
            38, 39, 40, 45, 144, 225
        ];
        var urlString;
        var fieldRequired = '<div id="error" class="has-error alert-label">This field is required.</div>'
        var urlParams = new URLSearchParams(window.location.search);
        var product = urlParams.get('productName');
        if (product !== null) {
            if ($.urlParam('productName')) {
                urlString = 'Interested in ' + $.urlParam('productName') + '?';
                $('h2.cmp-teaser__title')[0].innerText = urlString;

            }
        }

        autoCompleteoff();
        var input = document.querySelector("#phone1")
        var input2 = document.querySelector("#contactNumber");
        var input3 = document.querySelector("#mobileNumber");
        

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
            document.querySelector('#phone1').parentElement.parentElement.getElementsByTagName("label")[0].remove();
            document.querySelector('#phone1').parentElement.append(labelHtml);

            //var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid format"];
            var errorMap = ["Invalid number", "Invalid country code", "Please Enter At Least 10 Characters.", "Please Enter No More Than 10 Characters.", "Invalid number"];

            var errorMsg;
            if ($("#phone1") !== null) {
                $("#phone1").parent().parent().parent().parent().find('.new').remove();
            }
            if ($("#select-block-unblock") !== null) {
                $("#select-block-unblock").parent().parent().parent().find('.new').remove();
            }

            $(document).on("keypress", "#phone1", function (event) {                         
                var x = event.which || event.keycode;
                // not allow alphabets
                if (x>=65 && x<=90 || x>=97 && x<=127) {
                  event.preventDefault();
                }
              });

            $(document).on("keyup", "#phone1", function (element) {
                var x = element.which || element.keycode;
                if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1 ) {
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
                            if(!realnumeric(inputVal))
                            {
                                errorCode = 0;
                            }else{
                                errorCode = iti.getValidationError();
                            }
                            
                            
                            errorMsg = "";
                            errorMsg = errorMap[errorCode];
                            $("#phone1").parent().parent().removeClass("has-error-fields").removeClass('is-valid');


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

        if (input2 !== null) {
            var iti = intlTelInput(input2, {
                utilsScript: utilPath,
                excludeCountries: ["ae"],
                autoPlaceholder: false
            });
            $('.iti__flag-container').addClass('hide');

            var labelContactNumHtml = document.querySelector('#contactNumber').parentElement.parentElement.getElementsByTagName("label")[0];
            document.querySelector('#contactNumber').parentElement.parentElement.getElementsByTagName("label")[0].remove();
            document.querySelector('#contactNumber').parentElement.append(labelContactNumHtml);
            iti.selectedFlag.children[0].textContent = '+' + iti.getSelectedCountryData().dialCode;
            //$('.contactNumber').val(iti.getSelectedCountryData().dialCode);
            //$('.selected-flag .iti-flag').text('');
            input2.addEventListener("countrychange", function (e) {
                //console.log(iti.getSelectedCountryData().dialCode);
                iti.selectedFlag.children[0].textContent = '+' + iti.getSelectedCountryData().dialCode;
                $('.contactNumber').closest('.floating-label-input').find('label').addClass('floating-label');
                //$('.contactNumber').val(iti.getSelectedCountryData().dialCode);
            });
            var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid format"];
            //var errorMap = ["Invalid number", "Invalid country code", "Please Enter At Least 10 Characters.", "Please Enter No More Than 10 Characters.", "Invalid format"];

            var errorMsg;
            if ($("#contactNumber") !== null) {
                $("#contactNumber").parent().parent().parent().parent().find('.new').remove();
            }



            $(document).on("keyup", "#contactNumber", function (element) {
                if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                    return;
                } else {
                    if ($("#contactNumber").val().trim()) {
                        var inputVal = $('#contactNumber').val();
                        iti.telInput.value = inputVal;
                        if (phonevalid(inputVal) && inputVal.length == 10) {
                            $("#contactNumber").parent().parent().removeClass("has-error-fields").addClass('is-valid');
                            $("#contactNumber").parent().find(".alert-label").remove();
                            $("#contactNumber").parent().find(".alert-icon").remove();

                        } else {

                            var errorCode = "";
                            if(!realnumeric(inputVal))
                            {
                                errorCode = 0;
                            }else{
                                errorCode = iti.getValidationError();
                            }
                            errorMsg = "";
                            errorMsg = errorMap[errorCode];
                            $("#contactNumber").parent().parent().removeClass("has-error-fields").removeClass('is-valid');


                            if (errorMsg) {
                                $("#contactNumber").parent().parent().addClass("has-error-fields");

                                alertIcon = "";
                                alertIcon = contentString;

                                if ($("#contactNumber").parent().parent().hasClass("has-error-fields")) {
                                    $("#contactNumber").parent().find(".alert-label").remove();
                                    $("#contactNumber").parent().find(".alert-icon").remove();
                                    document.querySelector('#contactNumber').parentElement.innerHTML += '<div id="contactNumber-error" class="has-error alert-label">' + errorMsg + '</div>';
                                    //document.querySelector('#phone1').parentElement.innerHTML += alertIcon;
                                    $('#contactNumber').val(inputVal);
                                    $("#contactNumber").keyup();
                                    $("#contactNumber").parent().find('.iti__flag-container').after(alertIcon);
                                    $('#contactNumber-error').parent().parent().find('.new').remove();
                                };
                            }
                            $('#contactNumber').focus();
                        }
                    }
                }

            });
        }
        if (input3 !== null) {
            var iti = intlTelInput(input3, {
                utilsScript: utilPath,
                separateDialCode: false,
                allowDropdown: false,
                // if there is just a dial code in the input: remove it on blur
                autoHideDialCode: true,
                // add a placeholder in the input with an example number for the selected country
                autoPlaceholder: false,

            });

            $('.iti__flag-container').addClass('hide');
            var labelHtml = document.querySelector('#mobileNumber').parentElement.parentElement.getElementsByTagName("label")[0];
            document.querySelector('#mobileNumber').parentElement.parentElement.getElementsByTagName("label")[0].remove();
            document.querySelector('#mobileNumber').parentElement.append(labelHtml);

            //var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid format"];
            var errorMap = ["Invalid number", "Invalid country code", "Please Enter At Least 10 Characters.", "Please Enter No More Than 10 Characters.", "Invalid format"];

            var errorMsg;
            if ($("#mobileNumber") !== null) {
                $("#mobileNumber").parent().parent().parent().parent().find('.new').remove();
            }
    
            $(document).on("keyup", "#mobileNumber", function (element) {
                if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                    return;
                } else {
                    if ($("#mobileNumber").val().trim()) {
                        var inputVal = $('#mobileNumber').val();
                        iti.telInput.value = inputVal;
                        if (phonevalid(inputVal) && inputVal.length == 10) {
                            $("#mobileNumber").parent().parent().removeClass("has-error-fields").addClass('is-valid');
                            $("#mobileNumber").parent().find(".alert-label").remove();
                            $("#mobileNumber").parent().find(".alert-icon").remove();

                        } else {

                            var errorCode = "";
                            if(!realnumeric(inputVal))
                            {
                                errorCode = 0;
                            }else{
                                errorCode = iti.getValidationError();
                            }
                            errorMsg = "";
                            errorMsg = errorMap[errorCode];
                            $("#mobileNumber").parent().parent().removeClass("has-error-fields").removeClass('is-valid');


                            if (errorMsg) {
                                $("#mobileNumber").parent().parent().addClass("has-error-fields");
                                //$("#phone1").parent().after('<div id="phone1-error" class="has-error alert-label">' + errorMsg + '</div>');
                                alertIcon = "";
                                alertIcon = contentString;

                                if ($("#mobileNumber").parent().parent().hasClass("has-error-fields")) {
                                    $("#mobileNumber").parent().find(".alert-label").remove();
                                    $("#mobileNumber").parent().find(".alert-icon").remove();
                                    document.querySelector('#mobileNumber').parentElement.innerHTML += '<div id="phone1-error" class="has-error alert-label">' + errorMsg + '</div>';
                                    //document.querySelector('#phone1').parentElement.innerHTML += alertIcon;
                                    $('#mobileNumber').val(inputVal);
                                    $("#mobileNumber").keyup();
                                    $("#mobileNumber").parent().find('.iti__flag-container').after(alertIcon);
                                    $('#mobileNumber-error').parent().parent().find('.new').remove();
                                };
                            }
                            $('#mobileNumber').focus();
                        }
                    }
                }

            });

        }

        $(document).on("keyup", "#companyName", function (element) {
            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else {
                $("#companyName").parent().removeClass("has-error-fields"); // remove it 
                $("#companyName").parent().next(".alert-label").remove();
                $("#companyName").parent().find(".alert-icon").remove();
                var inputVal = $('#companyName').val();
                if (!realalphabetic($('#companyName').val())) {
                    $("#companyName").parent().addClass("has-error-fields").removeClass('is-valid');
                    $("#companyName").parent().after('<div id="companyName-error" class="has-error alert-label">Letters, and spaces only please.</div>');
                    alertIcon = "";
                    alertIcon = contentString;
                   
                    if ($("#companyName").parent().hasClass("has-error-fields")) {                      
                        document.querySelector('#companyName').parentElement.innerHTML += alertIcon;
                        $('#companyName').val(inputVal);
                        $("#companyName").keyup();
                    };

                } else {
                    $("#companyName").parent().addClass("is-valid").removeClass('has-error-fields');
                }
                $('#companyName').focus();
            }
        });

        $(document).on("keyup", "#url", function (element) {
            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else {
                $("#url").parent().removeClass("has-error-fields"); // remove it 
                $("#url").parent().next(".alert-label").remove();
                $("#url").parent().find(".alert-icon").remove();
                var inputVal = $('#url').val();
                if (!urlvalid($('#url').val())) {
                    $("#url").parent().addClass("has-error-fields");
                    $("#url").parent().after('<div id="url-error" class="has-error alert-label">Please Enter A Valid URL</div>');
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#url").parent().hasClass("has-error-fields")) {
                        document.querySelector('#url').parentElement.innerHTML += alertIcon;
                        $('#url').val(inputVal);
                        $("#url").keyup();
                    }

                } else {

                    $("#url").parent().addClass("is-valid").removeClass("has-error-fields");

                }
                $('#url').focus();
            }
        });
        $(document).on("keyup", "#fullName", function (element) {
            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else {
                $("#fullName").parent().removeClass("has-error-fields"); // remove it 
                $("#fullName").parent().next(".alert-label").remove();
                $("#fullName").parent().find(".alert-icon").remove();

                var inputVal = $('#fullName').val();
                if (!realalphabetic($('#fullName').val())) {

                    $("#fullName").parent().addClass("has-error-fields");
                    $("#fullName").parent().after('<div id="fullName-error" class="has-error alert-label">Letters, and spaces only please.</div>');
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#fullName").parent().hasClass("has-error-fields")) {
                        document.querySelector('#fullName').parentElement.innerHTML += alertIcon;
                        $('#fullName').val(inputVal);
                        $("#fullName").keyup();
                    };
                    $('#fullName-error').parent().parent().find('.new').remove();
                } else {

                    $("#fullName").parent().addClass("is-valid").removeClass("has-error-fields");

                }
            }
        });

        $(document).on("keyup", "#firstName", function (element) {
            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else {
                $("#firstName").parent().removeClass("has-error-fields"); // remove it 
                $("#firstName").parent().next(".alert-label").remove();
                $("#firstName").parent().find(".alert-icon").remove();
                var inputVal = $('#firstName').val();
                if (!realalphabetic($('#firstName').val()) && $('#firstName').val() != "") {
                    $("#firstName").parent().addClass("has-error-fields").removeClass("is-valid");
                    $("#firstName").parent().after('<div id="firstName-error" class="has-error alert-label">Letters, and spaces only please.</div>');
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#firstName").parent().hasClass("has-error-fields")) {
                        document.querySelector('#firstName').parentElement.innerHTML += alertIcon;
                        $('#firstName').val(inputVal);
                        $("#firstName").keyup();
                    };
                    $('#firstName-error').parent().parent().find('.new').remove();

                } else {
                    $("#firstName").parent().addClass("is-valid").removeClass("has-error-fields");;
                }
            }
        });
        $(document).on("keyup", "#lastName", function (element) {
            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else {
                $("#lastName").parent().removeClass("has-error-fields"); // remove it 
                $("#lastName").parent().next(".alert-label").remove();
                $("#lastName").parent().find(".alert-icon").remove();
                var inputVal = $('#lastName').val();
                if (!realalphabetic($('#lastName').val()) && $('#lastName').val() != "") {
                    $("#lastName").parent().addClass("has-error-fields").removeClass("is-valid");
                    $("#lastName").parent().after('<div id="lastName-error" class="has-error alert-label">Letters, and spaces only please.</div>');
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#lastName").parent().hasClass("has-error-fields")) {
                        document.querySelector('#lastName').parentElement.innerHTML += alertIcon;
                        $('#lastName').val(inputVal);
                        $("#lastName").keyup();
                    };
                    removeunWantedParsers();
                } else {
                    $("#lastName").parent().addClass("is-valid").removeClass("has-error-fields");
                }
            }
        });

        $(document).on("keyup", "#emailAddress", function (element) {

            if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                return;
            } else {


                $("#emailAddress").parent().removeClass("has-error-fields"); // remove it 
                $("#emailAddress").parent().next(".alert-label").remove();
                $("#emailAddress").parent().find(".alert-icon").remove();
                var inputVal = $('#emailAddress').val();
                if (!email2($('#emailAddress').val())) {

                    $("#emailAddress").parent().addClass("has-error-fields").removeClass("is-valid");
                    $("#emailAddress").parent().after('<div id="emailAddress-error" class="has-error alert-label">Please enter a valid email address</div>');
                    alertIcon = "";
                    alertIcon = contentString;
                    if ($("#emailAddress").parent().hasClass("has-error-fields")) {
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
                }
                $('#emailAddress').focus();
            }
        });
        $(document).on("keyup", "#justification", function (e) {
            $("#justification").parent().removeClass("has-error-fields"); // remove it 
            $("#justification").parent().next(".alert-label").remove();
            $("#justification").parent().find(".alert-icon").remove();
            if ($("#justification").val()) {
                $("#justification").parent().removeClass("has-error-fields").addClass('is-valid');
                $("#justification").parent().next(".alert-label").remove();
                alertIcon = "";
                alertIcon = contentString;
                if ($("#justification").parent().hasClass("has-error-fields")) {
                    document.querySelector('#justification').parentElement.innerHTML += alertIcon;
                };
                $('#justification-error').parent().parent().find('.new').remove();
                $("#justification").parent().addClass("is-valid").removeClass("has-error-fields");
            } else {
                $("#justification").parent().addClass("has-error-fields").removeClass('is-valid');
                var div = "";
                div = fieldRequired;
                if ($("#justification").parent().hasClass("has-error-fields")) {
                    $("#justification").parent().after(div);
                    document.querySelector('#justification').parentElement.innerHTML += alertIcon;
                };
            }
        });
        $(document).on("keyup", "#description", function (e) {
            $("#description").parent().removeClass("has-error-fields"); // remove it 
            $("#description").parent().next(".alert-label").remove();
            $("#description").parent().find(".alert-icon").remove();
            if ($("#description").val()) {
                $("#description").parent().removeClass("has-error-fields").addClass('is-valid');
                $("#description").parent().next(".alert-label").remove();
                alertIcon = "";
                alertIcon = contentString;
                var div = "";
                div = fieldRequired;
                if ($("#description").parent().hasClass("has-error-fields")) {
                    $("#description").parent().after(div);
                    document.querySelector('#description').parentElement.innerHTML += alertIcon;
                };
                $('#description-error').parent().parent().find('.new').remove();
                $("#description").parent().addClass("is-valid").removeClass("has-error-fields");
            } else {
                $("#description").parent().addClass("has-error-fields").removeClass('is-valid');
                var div = "";
                div = fieldRequired;
                if ($("#description").parent().hasClass("has-error-fields")) {
                    $("#description").parent().after(div);
                    document.querySelector('#description').parentElement.innerHTML += alertIcon;
                };
            }
        });
        $(document).on("keyup", "#accountNumber", function (e) {
            $("#accountNumber").parent().removeClass("has-error-fields"); // remove it 
            $("#accountNumber").parent().next(".alert-label").remove();
            $("#accountNumber").parent().find(".alert-icon").remove();
            if ($("#accountNumber").val()) {
                $("#accountNumber").parent().removeClass("has-error-fields").addClass('is-valid');
                $("#accountNumber").parent().next(".alert-label").remove();
               
                $('#accountNumber-error').parent().parent().find('.new').remove();
                $("#accountNumber").parent().addClass("is-valid").removeClass("has-error-fields");
            } else {
                
                $("#accountNumber").parent().addClass("has-error-fields").removeClass('is-valid');
                alertIcon = "";
                alertIcon = contentString;
                var div = "";
                div = fieldRequired;
                if ($("#accountNumber").parent().hasClass("has-error-fields")) {
                    $("#accountNumber").parent().after(div);
                    document.querySelector('#accountNumber').parentElement.innerHTML += alertIcon;                    
                   
                };
            }
        });
        $(document).on("keyup", "#designation", function (e) {
            $("#designation").parent().removeClass("has-error-fields"); // remove it 
            $("#designation").parent().next(".alert-label").remove();
            $("#designation").parent().find(".alert-icon").remove();
            if ($("#designation").val()) {
                $("#designation").parent().removeClass("has-error-fields").addClass('is-valid');
                $("#designation").parent().next(".alert-label").remove();
                alertIcon = "";
                alertIcon = contentString;
                if ($("#designation").parent().hasClass("has-error-fields")) {
                    document.querySelector('#designation').parentElement.innerHTML += alertIcon;
                };
                $('#designation-error').parent().parent().find('.new').remove();
                $("#designation").parent().addClass("is-valid").removeClass("has-error-fields");
            } else {
                $("#designation").parent().addClass("has-error-fields").removeClass('is-valid');
                alertIcon = "";                
                alertIcon = contentString;
                var div = "";
                div = fieldRequired;
                div = '<div id="error" class="has-error alert-label">This field is required.</div>'
                if ($("#designation").parent().hasClass("has-error-fields")) {
                    $("#designation").parent().after(div);
                    document.querySelector('#designation').parentElement.innerHTML += alertIcon;
                };
            }
        });

      
        $(document).on("keyup", "#select-hear-about-us", function (e) {
            if ($("#select-hear-about-us").val()) {
                $("#select-hear-about-us").parent().removeClass("has-error-fields").addClass('is-valid');
                $("#select-hear-about-us").parent().next(".alert-label").remove();
            }
            else {
                $("#select-hear-about-us").parent().addClass("has-error-fields").removeClass('is-valid');
            }

        });


        function clearForm() {
            alertIcon = "";
            $("#emailAddress").parent().next(".alert-label").remove(); // remove it        
            $("#fullName").parent().next(".alert-label").remove(); // remove it         
            $("#companyName").parent().next(".alert-label").remove();
            $("#description").parent().next(".alert-label").remove(); // remove it
            $("#select2-selection__rendered").parent().next(".alert-label").remove(); // remove it
            $("#firstName").parent().next(".alert-label").remove();
            $("#url").parent().next(".alert-label").remove();
            $("#justification").parent().next(".alert-label").remove();
            $("#phone1").parent().parent().next(".alert-label").remove();
            $("#designation").parent().next(".alert-label").remove();
            $("#accountNumber").parent().next(".alert-label").remove();
            $("#mobileNumber").parent().parent().next(".alert-label").remove();
            
            $("#fullName").parent().removeClass("has-error-fields");
            $("#emailAddress").parent().removeClass("has-error-fields");
            $("#companyName").parent().removeClass("has-error-fields");
            $("#description").parent().removeClass("has-error-fields");
            $("#select2-selection__rendered").parent().removeClass("has-error-fields");
            $("#firstName").parent().removeClass("has-error-fields");
            $("#url").parent().removeClass("has-error-fields");
            $("#justification").parent().removeClass("has-error-fields");
            $("#phone1").parent().parent().removeClass("has-error-fields");
            $("#designation").parent().removeClass("has-error-fields");
            $("#select-hear-about-us").parent().removeClass("has-error-fields");
            $("#accountNumber").parent().removeClass("has-error-fields");
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


            if (!$('#fullName').val()) {
                $("#fullName").parent().removeClass("is-valid").addClass("has-error-fields");
                if ($("#fullName").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#fullName").parent().after(div);
                    alertIcon = "";
                    alertIcon = contentString;
                    if (document.querySelector('#fullName') != null) {
                        document.querySelector('#fullName').parentElement.innerHTML += alertIcon;
                    }
                    $('#error').parent().parent().find('.new').remove();
                }
                $('#fullName').focus();

            } else {
                $("#fullName").parent().addClass("is-valid").removeClass("has-error-fields");
            }

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
            if (!$('#companyName').val() && $('#companyName').val() !== undefined ) {
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
            if (!$('#description').val()  && $('#description').val() !== undefined ) {
                if ($("#description").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#description").parent().next(".alert-label").remove();
                    $("#description").parent().removeClass("is-valid").addClass("has-error-fields");
                    $("#description").parent().after(div);
                    alertIcon = "";
                    alertIcon = contentString;
                    if (document.querySelector('#description') != null) {
                        document.querySelector('#description').parentElement.innerHTML += alertIcon;
                    }
                    removeunWantedParsers();
                }

                $('#description').focus();

            } else {
                $("#description").parent().removeClass("has-error-fields").addClass("is-valid");
            }
            if (!$('#justification').val() && $('#justification').val() !== undefined ) {
                $("#justification").parent().next(".alert-label").remove();
                if ($("#justification").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#justification").parent().removeClass("is-valid").addClass("has-error-fields");
                    $("#justification").parent().after(div);
                    alertIcon = "";
                    alertIcon = contentString;
                    if (document.querySelector('#justification') != null) {
                        document.querySelector('#justification').parentElement.innerHTML += alertIcon;
                    }
                    removeunWantedParsers();
                }

                $('#justification').focus();

            } else {
                $("#justification").parent().removeClass("has-error-fields").addClass("is-valid");
            }

            if (!$('#select2-selection__rendered').val()) {
                if ($("#select2-selection__rendered").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#select2-selection__rendered").parent().removeClass("is-valid").addClass("has-error-fields");
                    $("#select2-selection__rendered").parent().after(div);

                }

                $('#select2-selection__rendered').focus();

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

            if (!$('#url').val()) {
                $("#url").parent().removeClass("is-valid").addClass("has-error-fields");
                if ($("#url").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#url").parent().after(div);
                    alertIcon = "";
                    alertIcon = contentString;
                    if (document.querySelector('#url') != null) {
                        document.querySelector('#url').parentElement.innerHTML += alertIcon;
                    }

                }
                $('#url').focus();

            }
            else {
                $("#url").parent().removeClass("has-error-fields").addClass("is-valid");
            }

         


            if (!$('#phone1').val() || $('#phone1').val() == "") {
                $("#phone1").parent().parent().removeClass("has-error-fields").removeClass('is-valid');
                $("#phone1").parent().parent().addClass("has-error-fields");
                //$("#phone1").parent().after('<div id="phone1-error" class="has-error alert-label">' + errorMsg + '</div>');
                alertIcon = "";
                alertIcon = contentString;

                if ($("#phone1").parent().parent().hasClass("has-error-fields")) {
                    $("#phone1").parent().find(".alert-label").remove();
                    $("#phone1").parent().find(".alert-icon").remove();
                    document.querySelector('#phone1').parentElement.innerHTML += div;
                    $("#phone1").parent().find('.iti__flag-container').after(alertIcon);

                    $('#phone1-error').parent().parent().find('.new').remove();
                };
                $('#phone1').focus();

            }
            else {
                $("#phone1").parent().removeClass("has-error-fields").addClass('is-valid');
            }

            
            if (!$('#mobileNumber').val() || $('#mobileNumber').val() == "") {
                $("#mobileNumber").parent().parent().removeClass("has-error-fields").removeClass('is-valid');
                $("#mobileNumber").parent().parent().addClass("has-error-fields");
                //$("#phone1").parent().after('<div id="phone1-error" class="has-error alert-label">' + errorMsg + '</div>');
                alertIcon = "";
                alertIcon = contentString;

                if ($("#mobileNumber").parent().parent().hasClass("has-error-fields")) {
                    $("#mobileNumber").parent().find(".alert-label").remove();
                    $("#mobileNumber").parent().find(".alert-icon").remove();
                    document.querySelector('#mobileNumber').parentElement.innerHTML += div;
                    $("#mobileNumber").parent().find('.iti__flag-container').after(alertIcon);

                    $('#mobileNumber-error').parent().parent().find('.new').remove();
                };
                $('#mobileNumber').focus();

            }
            else {
                $("#mobileNumber").parent().removeClass("has-error-fields").addClass('is-valid');
            }
            if (!$('#contactNumber').val() || $('#contactNumber').val() == "") {
                $("#contactNumber").parent().parent().removeClass("has-error-fields").removeClass('is-valid');
                $("#contactNumber").parent().parent().addClass("has-error-fields");
                
                alertIcon = "";
                alertIcon = contentString;

                if ($("#contactNumber").parent().parent().hasClass("has-error-fields")) {
                    $("#contactNumber").parent().find(".alert-label").remove();
                    $("#contactNumber").parent().find(".alert-icon").remove();
                    document.querySelector('#contactNumber').parentElement.innerHTML += div;
                    $("#contactNumber").parent().find('.iti__flag-container').after(alertIcon);

                    $('#contactNumber-error').parent().parent().find('.new').remove();
                };
                $('#contactNumber').focus();

            }
            else {
                $("#contactNumber").parent().removeClass("has-error-fields").addClass('is-valid');
            }
            if (!$('#accountNumber').val() || $('#accountNumber').val() == "") {
                $("#accountNumber").parent().parent().removeClass("has-error-fields").removeClass('is-valid');
                $("#accountNumber").parent().parent().addClass("has-error-fields");
                
                alertIcon = "";
                alertIcon = contentString;

                if ($("#accountNumber").parent().parent().hasClass("has-error-fields")) {
                    $("#accountNumber").parent().find(".alert-label").remove();
                    $("#accountNumber").parent().find(".alert-icon").remove();
                    document.querySelector('#accountNumber').parentElement.innerHTML += div;
                    $("#accountNumber").parent().find('.iti__flag-container').after(alertIcon);

                    $('#accountNumber-error').parent().parent().find('.new').remove();
                };
                $('#accountNumber').focus();

            }
            else {
                $("#accountNumber").parent().removeClass("has-error-fields").addClass('is-valid');
            }
            if ((!$('#designation').val() || $('#designation').val() == "") && $('#designation').val() !== undefined ) {
                $("#designation").parent().addClass("has-error-fields");
                alertIcon = "";
                alertIcon = contentString;
                if ($("#designation").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#designation").parent().after(div);

                    if (document.querySelector('#designation') != null) {

                        $("#designation").parent().removeClass("is-valid").addClass("has-error-fields");
                    }
                    $("#designation").parent().removeClass("is-valid").addClass("has-error-fields");
                    document.querySelector('#designation').parentElement.innerHTML += alertIcon;
                } else {
                    $("#designation").parent().parent().removeClass("has-error-fields").addClass('is-valid');
                }
                $('#designation').focus();
                removeunWantedParsers();
            }

            if (!$('#select-hear-about-us').val()) {
                $("#select-hear-about-us").parent().addClass("has-error-fields");
                if ($("#select-hear-about-us").parent().next(".alert-label").length == 0) // only add if not added
                {
                    $("#select-hear-about-us").parent().after(div);

                }
                $('#select-hear-about-us').focus();

            }
            removeunWantedParsers();

        });

        $('input[name="existingAccount"]').change(function () {
            if (this.value == 'no') {
                $('.account-number').removeClass('showBusiness').addClass('hideBusiness')
            }
            else {
                $('.account-number').removeClass('hideBusiness').addClass('showBusiness')
            }
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
        if (document.getElementById("select-hear-about-us") !== null) {
            setInputFilter(document.getElementById("select-hear-about-us"), function (value) {
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