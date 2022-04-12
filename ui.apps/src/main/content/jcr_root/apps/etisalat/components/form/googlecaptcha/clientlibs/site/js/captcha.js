 // Captcha Version 2
 var doSubmit = false;

 function reCaptchaVerify(response) {
     if (response === document.querySelector('.g-recaptcha-response').value) {
         doSubmit = true;
         $('#submitBtn').removeClass('hide');
         $('#disableBtn').removeClass('btn-disabled');

     }
 }

 function reCaptchaExpired() {
     alert('Verify Google Captcha again');
     $('#submitBtn').addClass('hide');
     $('#disableBtn').addClass('btn-disabled');

 }

 function reCaptchaCallback() {
     $('#submitBtn').addClass('hide');
     $('#disableBtn').addClass('btn-disabled');
     grecaptcha.render('rcaptcha', {
         'sitekey': document.getElementById('gcaptchaKeyV2').value,
         'callback': reCaptchaVerify,
         'expired-callback': reCaptchaExpired
     });

     trackCaptcha();
 }

function trackCaptcha() {
  const currrentURL = window.location.href;
  const pagePathName = window.location.pathname;
  const dataLayerPathName = pagePathName.split(".html")[0];
  let sectionHeading = "";
  let btnAction = "";

  const pathArr = dataLayerPathName.split("/");
  sectionHeading = pathArr.pop();
  
  window.adobeDataLayer.push({
    event: "linkClicked",
    xdmActionDetails: {
      web: {
        webInteraction: {
          name: "reCaptcha",
          URL: currrentURL,
          type: "other",
          region: "main",
          linkClicks: {
            value: 1,
          },
        },
      },
      linkInfo: {
        sectionHeading: sectionHeading,
        action: btnAction,
        name: ctaName,
      },
    },
  });
}