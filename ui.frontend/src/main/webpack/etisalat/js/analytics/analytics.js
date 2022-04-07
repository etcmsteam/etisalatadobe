/* eslint-disable no-undef */
/* eslint-disable no-console */
export const ANALYTICS_FILTER = (category, type, value) => {
  const pagePathName = window.location.pathname;
  const dataLayerPathName = pagePathName.split('.html')[0];
  let fltrCategory = '';

  const pathArr = dataLayerPathName.split('/');
  fltrCategory = pathArr.pop();

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
};

export const ANALYTICS_LINKS_TABS = (name,url,heading) => {
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
  };
  
// CTA and Hero Banner CTA Events
$('a.btn, a.cmp-button, a.btn-text, .link, .cmp-teaser__action-link').on('click', function(){
  let $this = $(this);
  const ctaName = $this.text() ? $this.text().toLowerCase().trim() : '';
  const currrentURL = window.location.href;
  const pagePathName = window.location.pathname;
  const dataLayerPathName = pagePathName.split('.html')[0];
  let sectionHeading = '';
  let btnAction = '';

  const pathArr = dataLayerPathName.split('/');
  sectionHeading = pathArr.pop();

  window.adobeDataLayer.push({
    event: "linkClicked",
    xdmActionDetails: {
      web: {
        webInteraction: {
          name: ctaName,
          URL: currrentURL,
          type: "other",
          region: "main",
          linkClicks: {
            value: 1,
          },
        },
      }
    }
  });

  if ($this.closest(".etisalatherobanner").length > 0) {
    btnAction = $this.closest(".etisalatherobanner").find(".hero-title");
    if (btnAction.length > 0) {
      btnAction = btnAction.text().toLowerCase().trim();
    }
    window.adobeDataLayer.push({
      xdmActionDetails: {
        linkInfo: {
          sectionHeading: sectionHeading,
          action: btnAction,
          name: ctaName,
        },
        eventInfo: {
          bannerClick: 1,
        },
      },
    });
  } else if ($this.closest(".teaser").length > 0) {
    btnAction = $this.closest(".teaser").find(".cmp-teaser__title");
    if (btnAction.length > 0) {
      btnAction = btnAction.text().toLowerCase().trim();
    }
    window.adobeDataLayer.push({
      xdmActionDetails: {
        linkInfo: {
          sectionHeading: sectionHeading,
          action: btnAction,
          name: ctaName,
        },
        eventInfo: {
          intCampaign: 1,
        },
      },
    });
  } else {
    btnAction = ctaName;
    window.adobeDataLayer.push({
      xdmActionDetails: {
        linkInfo: {
          sectionHeading: sectionHeading,
          action: btnAction,
          name: ctaName,
        },
      },
    });
  }
});

// Buy Now CTA click
$("a.cms-button").on("click", function () {
  let $this = $(this);
  const ctaName = $this.text() ? $this.text().toLowerCase().trim() : '';
  const currrentURL = window.location.href;
  const pagePathName = window.location.pathname;
  const dataLayerPathName = pagePathName.split('.html')[0];
  let sectionHeading = '';
  let totalVal = '';

  const pathArr = dataLayerPathName.split('/');
  sectionHeading = pathArr.pop();

  let btnAct = $this.closest(".tiles-box.content").find(".tiles-box-title h2");
  if (btnAct.length > 0) {
    btnAct = btnAct.text().toLowerCase().trim();
  } else {
    btnAct = '';
  }

  let productPriceVal = $this.closest(".tiles-box.content").find(".tiles-box-list .detail-price-new .price");
  let currVal = $this.closest(".tiles-box.content").find(".tiles-box-list .detail-price-new small");
  if (productPriceVal.length > 0) {
    productPriceVal = productPriceVal.text().toLowerCase().trim();
    currVal = currVal.text().trim();
    totalVal = productPriceVal + ' ' + currVal;
  } else {
    productPriceVal = '';
    currVal = '';
    totalVal = '';
  }

  let descriptionVal = $this.closest(".tiles-box.content").find(".tiles-box-list .featureList");
  if (descriptionVal.length > 0) {
    descriptionVal = descriptionVal.text().toLowerCase().trim().replace(/\n|\r/g, "");
  } else {
    descriptionVal = '';
  }

  window.adobeDataLayer.push({
    event: "linkClicked",
    xdmActionDetails: {
      web: {
        webInteraction: {
          name: ctaName,
          URL: currrentURL,
          type: "other",
          region: "main",
          linkClicks: {
            value: 1
          },
        },
      },
      linkInfo: {
        sectionHeading: sectionHeading,
        action: btnAct,
        name: ctaName
      },
      product: {
        productDetails: {
          productName: btnAct,
          productPrice: totalVal,
          productType: sectionHeading,
          productCategory: btnAct,
          productDescription: descriptionVal
        }
      }
    }
  });
});

// Footer click Events
$(".footer").on("click", function (e) {
  let trgt = e.target;
  if (trgt.tagName.toLowerCase() === "a" || trgt.tagName.toLowerCase() === "img" || $(trgt).closest("svg").length > 0) {
    let ctaName = "";
    if (trgt.tagName.toLowerCase() === "a") {
      ctaName = trgt.innerText ? trgt.innerText.toLowerCase().trim() : "";
    } else if (trgt.tagName.toLowerCase() === "img") {
      ctaName = $(trgt).attr("alt") ? $(trgt).attr("alt").toLowerCase().trim() : "";
    } else {
      let title = $(trgt).closest("a").attr("title");
      ctaName = title ? title.toLowerCase().trim() : "";
    }
    const currrentURL = window.location.href;
    const pagePathName = window.location.pathname;
    const dataLayerPathName = pagePathName.split(".html")[0];
    let sectionHeading = "";

    const pathArr = dataLayerPathName.split('/');
    sectionHeading = pathArr.pop();

    window.adobeDataLayer.push({
      event: "linkClicked",
      xdmActionDetails: {
        web: {
          webInteraction: {
            name: ctaName,
            URL: currrentURL,
            type: "other",
            region: "footer",
            linkClicks: {
              value: 1,
            },
          },
        },
        linkInfo: {
          sectionHeading: sectionHeading,
          action: "footer",
          name: ctaName,
        },
        eventInfo: {
          footerClick: 1,
        },
      },
    });
  }
});

$("header").on("click", function (e) {
  let headerTrgt = e.target;
  if (headerTrgt.tagName.toLowerCase() === "a" ||
  headerTrgt.tagName.toLowerCase() === "img" ||
  headerTrgt.tagName.toLowerCase() === "svg" ||
  headerTrgt.tagName.toLowerCase() === "span" ||
  $(headerTrgt).closest("svg").length > 0) {
    let ctaName = "";
    if (headerTrgt.tagName.toLowerCase() === "a" || headerTrgt.tagName.toLowerCase() === "span") {
      ctaName = headerTrgt.innerText ? headerTrgt.innerText.toLowerCase().trim() : "";
    } else if (headerTrgt.tagName.toLowerCase() === "img") {
      ctaName = $(headerTrgt).attr("alt") ? $(headerTrgt).attr("alt").toLowerCase().trim() : "";
    } else {
      let title = $(headerTrgt).closest("a").attr("title");
      ctaName = title ? title.toLowerCase().trim() : "";
    }
    const currrentURL = window.location.href;
    const pagePathName = window.location.pathname;
    const dataLayerPathName = pagePathName.split(".html")[0];
    let sectionHeading = "";

    const pathArr = dataLayerPathName.split('/');
    sectionHeading = pathArr.pop();

    window.adobeDataLayer.push({
      event: "linkClicked",
      xdmActionDetails: {
        web: {
          webInteraction: {
            name: ctaName,
            URL: currrentURL,
            type: "other",
            region: "header",
            linkClicks: {
              value: 1,
            },
          },
        },
        linkInfo: {
          sectionHeading: sectionHeading,
          action: "header",
          name: ctaName,
        },
        eventInfo: {
          headerClick: 1,
        },
      },
    });
  }
});
