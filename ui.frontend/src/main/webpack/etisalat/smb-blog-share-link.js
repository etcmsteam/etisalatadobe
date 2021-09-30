
 (function(define, window) {
  
      "use strict";
  
      return function() {
  
        var getLink = window.location.href;
        var linkInput = document.getElementById("linkText");
        linkInput.value = getLink;
  
        $('.copyLink').click(function() {
          linkInput.select();
          document.execCommand('copy');
          $('.form-share').addClass('copied');
        });
        var getWindowOptions;
        getWindowOptions = function() {
              var width = 500;
              var height = 350;
              var left = (window.innerWidth / 2) - (width / 2);
              var top = (window.innerHeight / 2) - (height / 2);
  
              return [
                  'resizable,scrollbars,status',
                  'height=' + height,
                  'width=' + width,
                  'left=' + left,
                  'top=' + top,
              ].join();
          };
          var shareLink;
          shareLink = function(title, text, url, target){
            var text = encodeURIComponent(text);
            var shareUrl = url + getLink + '&text=' + text;
            target.href = shareUrl; // 1
  
            var win = window.open(shareUrl, title, getWindowOptions());
            win.opener = null; // 2
          }
          $('.shareFacebookk').click(function(e){
            e.preventDefault();
            shareLink('ShareOnFb','Hey everyone, come & see this link!','https://www.facebook.com/sharer/sharer.php?u=',e.target)
          });
          $('.shareLinkedIn').click(function(e){
            e.preventDefault();
            shareLink('ShareOnLinkedIn','Hey everyone, come & see this link!','http://www.linkedin.com/shareArticle?mini=true&url=',e.target)
          });
          $('.shareTwitter').click(function(e){
            e.preventDefault();
            shareLink('ShareOnTwitter','Hey everyone, come & see this link!','https://twitter.com/intent/tweet?url=',e.target)
          });
  
  
      };
   
  })(define, window);