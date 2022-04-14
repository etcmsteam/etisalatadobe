(function (window, document) {

  // CTA and Hero Banner CTA Events
  $("a.btn, a.cmp-button, a.btn-text, a.link, .cmp-teaser__action-link").on("click", function () { 
    let $this = $(this);
    const ctaName = $this.text() ? $this.text().toLowerCase().trim() : "";
    const currrentURL = window.location.href;
    const pagePathName = window.location.pathname;
    const dataLayerPathName = pagePathName.split(".html")[0];
    let sectionHeading = "";
    let btnAction = "";

    const pathArr = dataLayerPathName.split("/");
    sectionHeading = pathArr.pop();

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

  // Buy Now CTA click
  $("a.cms-button").on("click", function () {
    let $this = $(this);
    const ctaName = $this.text() ? $this.text().toLowerCase().trim() : "";
    const currrentURL = window.location.href;
    const pagePathName = window.location.pathname;
    const dataLayerPathName = pagePathName.split(".html")[0];
    let sectionHeading = "";
    let totalVal = "";
    let productCat = "";

    const pathArr = dataLayerPathName.split("/");
    sectionHeading = pathArr.pop();

    productCat = pathArr.pop();
    
    let btnAct = $this.closest(".tiles-box.content").find(".tiles-box-title h2");
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
  });

  // Footer click Events
  $(".footer").on("click", function (e) {
    let trgt = e.target;
    if (trgt.tagName.toLowerCase() === "a" ||
    trgt.tagName.toLowerCase() === "img" ||
    $(trgt).closest("svg").length > 0) {
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

      const pathArr = dataLayerPathName.split("/");
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
    if (
      headerTrgt.tagName.toLowerCase() === "a" ||
      headerTrgt.tagName.toLowerCase() === "img" ||
      headerTrgt.tagName.toLowerCase() === "svg" ||
      headerTrgt.tagName.toLowerCase() === "span" ||
      $(headerTrgt).closest("svg").length > 0
    ) {
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

      const pathArr = dataLayerPathName.split("/");
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

