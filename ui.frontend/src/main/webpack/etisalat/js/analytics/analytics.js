/* eslint-disable no-undef */
/* eslint-disable no-console */

var n = 0;
var tag = document.createElement("script");
var firstScriptTag = document.getElementsByTagName("script")[0];
var player;
var mileStones = [25, 50, 75];
var videoTitle;
var pauseFlag;

export const ANALYTICS_FILTER = (category, type, value) => {
  const pagePathName = window.location.pathname;
  const dataLayerPathName = pagePathName.split('.html')[0];
  let fltrCategory = '';

  const pathArr = dataLayerPathName.split('/');
  fltrCategory = pathArr.pop();

  if (window.adobeDataLayer) {
  window.adobeDataLayer.push({
    event: "filter",
    eventInfo: {
      filterClick: 1,
    },
    filterDetails: {
      filterCategory: fltrCategory,
      filterType: type,
      filterValue: value,
    },
  });
  }
};

export const ANALYTICS_LINKS_TABS = (name,url,heading) => {
  if (window.adobeDataLayer) {
  window.adobeDataLayer.push({
     event: "linkClicked",
     xdmActionDetails: {
      web: {
          webInteraction: {
          name:name,		
          URL:url,	
          type:"other",	
          region: "main",
          linkClicks: {
            value: 1
            }
                }
          },
    linkInfo: {
           sectionHeading: heading,
           action: "tab change",
           name: name
    },
    }
    });
  }
  };

export const FORM_SUCCESS = (form, data) => {
  const name = form.attr('name');
  const formId = form.attr('id');
  if (window.adobeDataLayer) {
  if (formId === "leadOrder") {
    window.adobeDataLayer.push({
      event: "form success",
      formDetails: {
        formName: name,
        referenceNumber: "",
      },
      user: {
        accountNumber: data.accountNumber ? data.accountNumber : "",
        name: data.contactFirstName + data.contactLastName,
        email: data.email ? data.email : "",
        contactNumber: data.mobileNo ? data.mobileNo : "",
        companyName: data.companyName ? data.companyName : "",
        requestRequirements: data.description ? data.description : "",
      },
      productDetails: {
        productName: "",
        expectedRevenue: "",
      },
      eventInfo: {
        formSuccess: 1,
      },
    });
  } else if (formId === "cwsNeedHelp") {
    if (data) {
      let accNumber = data.accountNumber;
      let custName = data.params[0].value;
      let emailId = data.params[1].value;
      let contact = data.params[2].value;
      let compName = data.params[4].value;
      let detail = data.params[6].value;

      window.adobeDataLayer.push({
        event: "form success",
        formDetails: {
          formName: name,
          referenceNumber: "",
        },
        user: {
          accountNumber: accNumber,
          name: custName,
          email: emailId,
          contactNumber: contact,
          companyName: compName,
          requestRequirements: detail,
        },
        productDetails: {
          productName: "",
          expectedRevenue: "",
        },
        eventInfo: {
          formSuccess: 1,
        },
      });
    }
  } else if (formId === "newsletterSubscription") {
    if (data) {
      let jsonData = JSON.parse(data);
      let customerName = jsonData.CustomerName;
      let emailAdd = jsonData.EmailAddress;
      window.adobeDataLayer.push({
        event: "form success",
        formDetails: {
          formName: name,
          referenceNumber: "",
        },
        user: {
          accountNumber: "",
          name: customerName,
          email: emailAdd,
          contactNumber: "",
          companyName: "",
          requestRequirements: "",
        },
        productDetails: {
          productName: "",
          expectedRevenue: "",
        },
        eventInfo: {
          formSuccess: 1,
        },
      });
    }
  }
  }
};

export const FORM_ERROR = (form, type, errResponse) => {
  let name = form.attr('name');
  const currrentURL = window.location.href;
  let errType = type;
  let errMsg;
  let errCode;
  let errField;
  let resArr = [];
  if (type === "validation error") {
    errMsg = "";
    errCode = "";
    errField = "";
    let fld = form.find('.has-error-fields');
    if (fld.length > 0) {
      fld.each(function () {
        resArr.push($(this).find("label").text());
      });
      errField = resArr.join(' | ');
    }
  } else {
    errField = "";
    errMsg = "";
    errCode = "";
  }
  if (window.adobeDataLayer) {
    window.adobeDataLayer.push({
        event: "form error",
        xdmActionDetails: {
            web: {
                webInteraction: {
                    name: name,
                    URL: currrentURL,
                    type: "other",
                    region: "form",
                    linkClicks: {
                        value: 1
                    }
                }
            },
            linkInfo: {
                sectionHeading: "",
                action: "submit",
                name: name
            },

            formDetails: {
                formName: name
            },
            errorInfo: {
                error: 1,
                errorMessage: errMsg, 
                errorCode: errCode,
                errorField: errField,
                errorType: errType
            }
        }
    });
  }
};

// Youtube video tracking
$("iframe").each(function () {
  var src = $(this).attr("src");

  if (src) {
    if (src.indexOf("youtube.com") > -1) {
      if (src.indexOf("?") > -1) {
        if (src.indexOf("enablejsapi") === -1) {
          src += "&enablejsapi=1";
        }
      } else {
        src += "?enablejsapi=1";
      }

      $(this).attr("src", src);
      $(this).attr("id", "player" + n);
      $(this).addClass("youtubeplayer");
      n++;
    }
  }
});

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function mileStoneCheck() {
  var nextMs;
  var percComplete = (player.getCurrentTime() / player.getDuration()) * 100;
  var msLen = mileStones.length;
  
  if (msLen > 0) {
    nextMs = mileStones[0];
    if (nextMs <= percComplete) { 
      mileStones.shift(); 
      window.adobeDataLayer.push({
        event: "video milestone",
        videoDetails: {
          videoName: videoTitle,
          videoMileStone: nextMs + "%",
          videoTime: Math.floor(player.getCurrentTime()),
        },
        eventInfo: {
          videoMilestone: 1,
        },
      });
    }        
  }
}

function onPlayerStateChange(e) {
  videoTitle = e.target.playerInfo.videoData.title ? e.target.playerInfo.videoData.title : "";
  if (e.data === YT.PlayerState.PLAYING) {
    window.adobeDataLayer.push({
      event: "video start",
      videoDetails: {
        videoName: videoTitle,
      },
      eventInfo: {
        videoStart: 1,
      },
    });
    setInterval(mileStoneCheck, 100);
    pauseFlag = true;
  }
  if (e.data === YT.PlayerState.ENDED) {
    window.adobeDataLayer.push({
      event: "video complete",

      videoDetails: {
        videoName: videoTitle,
      },

      eventInfo: {
        videoComplete: 1,
      },
    });
  } else if (e.data === YT.PlayerState.PAUSED && pauseFlag) {
    window.adobeDataLayer.push({
      event: "video pause",

      videoDetails: {
        videoName: videoTitle,
      },

      eventInfo: {
        videoPause: 1,
      },
    });
    pauseFlag = false;
  }
}

window.onYouTubeIframeAPIReady = function (){
  $("iframe.youtubeplayer").each(function () {
    var youtubeiframeClass = $(this).attr("id");
    player = new YT.Player(youtubeiframeClass, {
      events: {
        onStateChange: onPlayerStateChange
      },
    });
  });
};
