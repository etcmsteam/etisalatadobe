(function (window, document) {

  if (!window.adobeDataLayer) {
    return false;
  }

  function isValidHttpUrl(string) {
    try {
      return new URL(string);
    } catch (e) {
      return false;
    }
  }
  
  // CTA and Hero Banner CTA Events
  $("a").on("click", function (e) {
    e.preventDefault();

    let $this = $(this);
    let trgt = e.target;
    let ctaName = "";
    const currrentURL = window.location.href;
    const pagePathName = window.location.pathname;
    const dataLayerPathName = pagePathName.split(".html")[0];
    const currentOrigin = window.location.origin;
    let sectionHeading = "";
    let btnAction = "";
    let totalVal = "";
    let productCat = "";
    let lnkRegion = "";

    const pathArr = dataLayerPathName.split("/");
    sectionHeading = pathArr.pop();

    if (trgt.tagName.toLowerCase() === "a") {
      ctaName = trgt.innerText ? trgt.innerText.toLowerCase().trim() : "";
    } else if (trgt.tagName.toLowerCase() === "img") {
      ctaName = $(trgt).attr("alt") ? $(trgt).attr("alt").toLowerCase().trim() : "";
    } else {
      let title = $(trgt).closest("a").attr("title");
      ctaName = title ? title.toLowerCase().trim() : "";
    }

    if ($this.attr("href") && $this.attr("href") !== "#") {
      const anchorOrigin = isValidHttpUrl($this.attr("href")).origin;
      let chkLink = $this.attr("href").split('.');

      if ($this.closest("body")) {
        lnkRegion = "main";
      } else if ($this.closest("header")) {
        lnkRegion = "header";
      } else if ($this.closest("footer")) {
        let quickLinks = $this.closest(".quick-links-head");
        if (quickLinks.length > 0 && quickLinks.find('.links-title').length > 0) {
          btnAction = quickLinks.find('.links-title')[0].text();
        }
        lnkRegion = "footer";
      }

      // Exit link click tracking
      if (anchorOrigin && currentOrigin !== anchorOrigin) {
        window.adobeDataLayer.push({
          event: "linkClicked",
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: "exit",
                region: lnkRegion,
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
            eventInfo: {
              exitClick: 1,
            },
          },
        });

        return false;
      }

      // Download link tracking
      if (chkLink[1].toLowerCase() === "pdf") {
        window.adobeDataLayer.push({
          event: "linkClicked",
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: "download",
                region: lnkRegion,
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
            eventInfo: {
              downloadClick: 1,
            },
          },
        });
      }


    }

    if ($this.closest(".etisalatherobanner").length > 0) {
      btnAction = $this.closest(".etisalatherobanner").find(".hero-title");
      if (btnAction.length > 0) {
        btnAction = btnAction.text().toLowerCase().trim();
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
                value: 1,
              },
            },
          },
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
          },
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
    } else if ($this.closest(".producttile").length > 0 && $this.hasClass("cms-button")) {
      productCat = pathArr.pop();

      let btnAct = $this.closest(".tiles-box.content").find(".tiles-box-title");
      if (btnAct.length > 0) {
        btnAct = btnAct.text().toLowerCase().trim();
      } else {
        btnAct = "";
      }

      let productPriceVal = $this.closest(".tiles-box.content").find(".tiles-box-list .detail-price-new .price");
      let currVal = $this.closest(".tiles-box.content").find(".tiles-box-list .detail-price-new small");
      if (productPriceVal.length > 0) {
        productPriceVal = productPriceVal.text().toLowerCase().trim();
        currVal = currVal.text().trim();
        totalVal = productPriceVal + " " + currVal;
      } else {
        productPriceVal = "";
        currVal = "";
        totalVal = "";
      }

      let descriptionVal = $this.closest(".tiles-box.content").find(".tiles-box-list .featureList");
      if (descriptionVal.length > 0) {
        descriptionVal = descriptionVal.text().toLowerCase().trim().replace(/\n|\r/g, "");
      } else {
        descriptionVal = "";
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
                value: 1,
              },
            },
          },
          linkInfo: {
            sectionHeading: sectionHeading,
            action: btnAct,
            name: ctaName,
          },
          product: {
            productDetails: {
              productName: btnAct,
              productPrice: totalVal,
              productType: sectionHeading,
              productCategory: productCat,
              productDescription: descriptionVal,
            },
          },
        },
      });
    } else if ($this.closest("header").length > 0) {
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
    } else if ($this.closest("footer").length > 0) {
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
    } else {
      btnAction = ctaName;
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
          },
          linkInfo: {
            sectionHeading: sectionHeading,
            action: btnAction,
            name: ctaName,
          },
        },
      });
    }
  });

  // Form start tracking
  function formStart(name) {
    window.adobeDataLayer.push({
      event: "form start",
      formDetails: {
        formName: name,
      },
      eventInfo: {
        formStart: 1,
      },
    });
  }

  // Form Complete
  function formComplete(name) {
    window.adobeDataLayer.push({
      event: "form submit",
      formDetails: {
        formName: name,
      },
      eventInfo: {
        formSubmit: 1,
      },
    });
  }

  let formObj = $(document).find("form");
  if (formObj.length > 0) {
    formObj.each(function () {
      let dirty = false;
      let inputEle = $(this).find("input");
      let textArea = $(this).find("textarea");
      let formName = $(this).attr("name");

      inputEle.each(function () {
        $(this).on("input", function () {
          if (!dirty) {
            dirty = true;
            formStart(formName);
          }
        });
      });
      textArea.each(function () {
        $(this).on("input", function () {
          if (!dirty) {
            dirty = true;
            formStart(formName);
          }
        });
      });

      $(this).on("submit", function () {
        formComplete(formName);
      });
    });
  }
})(window, document);

