/* eslint-disable */
import { getParameterByName } from '../../../global/js/utils';

(function (window, document, $) {
  let num = 0;
  let count = 0;

  function isValidHttpUrl(string) {
    try {
      return new URL(string);
    } catch (e) {
      return false;
    }
  }

  // CTA and Hero Banner CTA Events
  $('a').on('click', function (e) {
    if (window.adobeDataLayer) {
      let $this = $(this);
      let trgt = e.target;
      let ctaName = '';
      const currrentURL = $this.attr('href') ? $this.attr('href') : '';
      const pagePathName = window.location.pathname;
      const dataLayerPathName = pagePathName.split('.html')[0];
      const currentOrigin = window.location.origin;
      let sectionHeading = '';
      let btnAction = '';
      let totalVal = '';
      let productCat = '';
      let linkType = 'other';
      let chkLink = '';

      const pathArr = dataLayerPathName.split('/');
      sectionHeading = pathArr.pop();

      if (trgt.tagName.toLowerCase() === 'a' || trgt.tagName.toLowerCase() === 'span') {
        ctaName = trgt.innerText ? trgt.innerText.toLowerCase().trim() : '';
      } else if (trgt.tagName.toLowerCase() === 'img') {
        ctaName = $(trgt).attr('alt') ? $(trgt).attr('alt').toLowerCase().trim() : '';
      } else {
        let title = $(trgt).closest('a').attr('title');
        ctaName = title ? title.toLowerCase().trim() : '';
      }
      const anchorOrigin = isValidHttpUrl($this.attr('href')).origin;
      if ($this.attr('href') && $this.attr('href') !== '#') {
        chkLink = $this.attr('href').split('.');
        chkLink = chkLink[1] ? chkLink[1] : '';
      }

      if (anchorOrigin && currentOrigin !== anchorOrigin) {
        if ($this.attr('href') && $this.attr('href') !== '#') {
          linkType = 'exit';
        }
      }

      if (chkLink.toLowerCase() === 'pdf') {
        let tabElement = $this.closest('.tabs');
        let teaserElement = $this.closest('.teaser.cross-promotion-plain');
        if (tabElement.length > 0) {
          sectionHeading = $this.closest('.tabs').find('> h3').text().toLowerCase().trim();
        } else if (teaserElement.length > 0) {
          sectionHeading = $this.closest('.teaser').find('.cmp-teaser__title').text().toLowerCase().trim();
        }
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: 'download',
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: "download pdf",
              name: ctaName,
            },
            eventInfo: {
              downloadClick: 1,
            },
          },
        });
      } else if ($this.closest('.etisalatherobanner').length > 0) {
        btnAction = $this.closest('.etisalatherobanner').find('.hero-title');
        if (btnAction.length > 0) {
          btnAction = btnAction.text().toLowerCase().trim();
        } else {
          btnAction = '';
        }
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: btnAction,
              action: 'hero banner click',
              name: ctaName,
            },
            eventInfo: {
              bannerClick: 1,
            },
          },
        });
      } else if ($this.closest('.teaser.teaseretisalat').length > 0 && $this.closest('.cross-promotion-plain').length === 0) {
        let teaserTitle = $this.closest('.teaser').find('.cmp-teaser__title');
        let teaserDescTitle1 = $this.closest('.teaser').find('.cmp-teaser__description > h4');
        let teaserDescTitle2 = $this.closest('.teaser').find('.cmp-teaser__description > h3');
        let teaserDescTitle3 = $this.closest('.tabs').find('.cmp-tabs__tablist .cmp-tabs__tab--active');
        let teaserDescTitle =  teaserDescTitle1.length > 0 ? teaserDescTitle1 : teaserDescTitle2;
        if (teaserTitle.length > 0) {
          btnAction = teaserTitle.text().toLowerCase().trim();
        } else if (teaserDescTitle.length > 0) {
          btnAction = teaserDescTitle.text().toLowerCase().trim();
        } else if (teaserDescTitle3.length > 0) {
          btnAction = teaserDescTitle3.text().toLowerCase().trim();
        } else {
          btnAction = ctaName + ' clicked';
        }

        let tabElement = $this.closest('.tabs');
        if (tabElement.length > 0) {
          sectionHeading = $this.closest('.tabs').find('> h3').text().toLowerCase().trim();
        }
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
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
      } else if ($this.closest('.producttile').length > 0) {
        productCat = pathArr.pop();

        let btnAct = $this.closest('.tiles-box.content').find('.tiles-box-title h2');
        if (btnAct.length > 0) {
          btnAct = btnAct.text().toLowerCase().trim();
        } else {
          btnAct = '';
        }

        let prodName = $this.closest('.tiles-box.content').find('.tiles-box-title .catagory');
        if (prodName.length > 0) {
          prodName = prodName.text().toLowerCase().trim() + ':';
          prodName += btnAct;
        } else {
          prodName = btnAct;
        }

        let productPriceVal = $this.closest('.tiles-box.content').find('.tiles-box-list .detail-price-new .price');
        let currVal = $this.closest('.tiles-box.content').find('.tiles-box-list .detail-price-new small');
        if (productPriceVal.length > 0) {
          productPriceVal = productPriceVal.text().toLowerCase().trim();
          currVal = currVal.text().trim();
          totalVal = productPriceVal + ' ' + currVal;
        } else {
          productPriceVal = '';
          currVal = '';
          totalVal = '';
        }

        let descriptionVal = $this.closest('.tiles-box.content').find('.tiles-box-list .featureList');
        if (descriptionVal.length > 0) {
          descriptionVal = descriptionVal.text().toLowerCase().trim().replace(/\n|\r/g, '');
        } else {
          descriptionVal = '';
        }

        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
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
                productName: prodName,
                productPrice: totalVal,
                productType: sectionHeading,
                productCategory: productCat,
                productDescription: descriptionVal,
              },
            },
          },
        });
      } else if ($this.closest('.media-cta-module-section').length > 0) {
        productCat = pathArr.pop();

        let prodName = $this.closest('.mod-content').find('.media-cta-4-title');
        prodName = prodName.text().toLowerCase().trim();

        let productPriceVal = $this.closest('.content-bottom').find('.media-cta-4-price .price .value');
        productPriceVal = productPriceVal.text().toLowerCase().trim();

        let currVal = $this.closest('.content-bottom').find('.media-cta-4-price .price .aed');
        currVal = currVal = currVal.text().trim();

        let descriptionVal = $this.closest('.mod-content').find('.media-cta-4-desc p');
        descriptionVal = descriptionVal.text().toLowerCase().trim().replace(/\n|\r/g, '');

        if(ctaName === 'buy now') {
          btnAction = 'buy ' + prodName;
        } else if (ctaName === 'view plans') {
          btnAction = 'view more plans';
        } else {
          btnAction = ctaName + 'clicked';
        }

        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: prodName,
              action: btnAction,
              name: ctaName,
            },
            product: {
              productDetails: {
                productName: prodName,
                productPrice: productPriceVal + currVal,
                productType: sectionHeading,
                productCategory: productCat,
                productDescription: descriptionVal,
              },
            },
          },
        });
      } else if ($this.closest('.meganavigation').length > 0) {
        if ($this.closest('.main-mega-menu-desktop').length > 0) {
          sectionHeading = 'main menu';
          btnAction = 'main menu item clicked';
          if ($(trgt).hasClass('etisalat-logo-en') || $(trgt).closest('svg').hasClass('etisalat-logo-en')) {
            ctaName = 'goto home';
          } else if (trgt.tagName.toLowerCase() === 'img') {
            if ($(trgt).attr('src')) {
              let srcArr = $(trgt).attr('src').split('/');
              if (srcArr.length > 0) {
                ctaName = srcArr[srcArr.length - 1].split('.')[0] || '';
              }
            }
          }
          if ($this.closest('.menu-promotion-wrapper').length > 0) {
            let ctaHead = $this.closest('.sub-menu-wrap').parent().find('.mega-menu-link');
            let ctaContent = $this.closest('.content').find('h4');
            if (ctaHead.length > 0 && ctaContent.length > 0) {
              ctaHead = ctaHead.text().trim().toLowerCase() + ':';
              ctaContent = ctaContent.text().trim().toLowerCase() + ':';
              ctaName = ctaHead + ctaContent + ctaName;
            }
          }
          if ($this.hasClass('clearSearch')) {
            ctaName = 'search:clear';
          }
          if ($this.closest('.search-items-wrapper').length > 0) {
            if ($this.closest('.list.quick-links').length > 0) {
              let searchHeading = $this.closest('.list.quick-links').find('.list-item-heading');
              searchHeading = searchHeading.text().trim().toLowerCase() + ':' || '';
              ctaName = 'search:' + searchHeading + ctaName;
            } else if ($this.closest('.list.trends').length > 0) {
              let searchHeading = $this.closest('.list.trends').find('.list-item-heading');
              searchHeading = searchHeading.text().trim().toLowerCase() + ':' || '';
              let searchSubHead = $this.closest('.content').find('h4');
              searchSubHead = searchSubHead.text().trim().toLowerCase() + ':' || '';
              ctaName = 'search:' + searchHeading + searchSubHead + ctaName;
            }
          }
        }
        if ($this.closest('.sub-menu').length > 0) {
          let subMenu = $this.closest('.sub-menu').find('.sub-menu-heading');
          if (subMenu.length === 1) {
          let subMenuTxt = subMenu.first().text().trim().toLowerCase() + ':';
          let subMenuSec = $this.closest('.sub-menu-wrap').parent().find('.mega-menu-link');
          let subMenuSecTxt = subMenuSec.text().trim().toLowerCase() + ':';
          ctaName = subMenuSecTxt + subMenuTxt + ctaName;
          } else if (subMenu.length > 1) {
            let subMenuSec = $this.closest('.sub-menu-wrap').parent().find('.mega-menu-link');
            let subMenuSecTxt = subMenuSec.text().trim().toLowerCase() + ':';
            ctaName = subMenuSecTxt + ctaName;
          }
        }
        if ($this.closest('.sub-account-menu').length > 0) {
          let subAccMenu = $this.closest('.sub-account-menu-wrap').parent().find('.mega-menu-link');
          let subMenuSecTxt = subAccMenu.text().trim().toLowerCase() + ':';
          ctaName = subMenuSecTxt + ctaName;
        }

        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'header',
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
              headerClick: 1,
            },
          },
        });
      } else if ($this.closest('.top-nav-section').length > 0) {
        sectionHeading = 'nav menu';
        btnAction = 'nav menu item clicked';
        if ($this.closest('.inc-push-meu-icon').length > 0) {
          num++;
          sectionHeading = 'push menu';
          btnAction = 'push menu item clicked';

          if (num % 2 === 0) {
            ctaName = 'close push menu';
          } else {
            ctaName = 'open push menu';
          }
        } else if ($this.closest('.push-nav-container').length > 0) {
          sectionHeading = 'push menu';
          btnAction = 'push menu item clicked';
        }
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'header',
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
              headerClick: 1,
            },
          },
        });
      } else if ($this.closest('.footer').length > 0) {
        sectionHeading = 'footer links';
        btnAction = 'quick link clicked';
        if ($this.closest('.footer-social-dwonload').length > 0) {
          btnAction = 'social network interaction';
        } else if ($this.closest('.footer-links-logo-section').length > 0) {
          btnAction = 'footer item clicked';
        }
        let quickLinks = $this.closest('.links');
        let ctaName1 = '';
        if (quickLinks.length > 0 && quickLinks.find('.links-title').length > 0) {
          ctaName1 = quickLinks.find('.links-title').first().text().toLowerCase() + ':';
        } else if ($this.closest('.icons-wrap').length > 0) {
          ctaName1 = $this.closest('.icons-wrap').parent().find('.footer-heading').first().text().toLowerCase() + ':';
        }
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName1 + ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'footer',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: btnAction,
              name: ctaName1 + ctaName,
            },
            eventInfo: {
              footerClick: 1,
            },
          },
        });
      } else if ($this.closest('.blogtile').length > 0) {
        ctaName = $this.find('.box-title').text().trim().toLowerCase();
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: 'featured offer',
              action: 'view offer',
              name: ctaName,
            },
          },
        });
      } else if ($this.closest('.text').length > 0 && $this.closest('.accordion').length === 0) {
        let sectionHeadingTitle = $this.closest('.text').find('.title');
        let secHead = $this.closest('.text').find('.cmp-text > h3');
        if (sectionHeadingTitle.length > 0) {
          sectionHeading = sectionHeadingTitle.text().trim().toLowerCase();
        } else if (secHead.length > 0) {
          sectionHeading = secHead.first().text().toLowerCase().trim();
        }
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: ctaName + ' ' + sectionHeading,
              name: ctaName,
            },
          },
        });
      } else if ($this.closest('.iconcardlist').length > 0) {
        sectionHeading = $this.closest('.need-help-section').find('.need-help-content h2');
        if (sectionHeading.length > 0) {
          sectionHeading = sectionHeading.text().trim().toLowerCase();
        }
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: sectionHeading + ' clicked',
              name: ctaName,
            },
          },
        });
      } else if ($this.closest('.config-section-wrap').length > 0) {
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: 'tab change',
              name: ctaName,
            },
          },
        });
      } else if ($this.closest('.cross-promo-background').length > 0) {
        btnAction = $this.closest('.cta-content-wrap').find('.cont h4');
        btnAction = btnAction.text().toLowerCase().trim();
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
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
      } else if ($this.closest('.accordion').length > 0) {
        sectionHeading = $this.closest('.accordion').find('.cmp-accordion__title').text().toLowerCase().trim();
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: 'accordion link click',
              name: ctaName,
            },
          },
        });
      } else if ($this.closest('.context-navigation-4-0').length > 0) {
        btnAction = $this.closest('.context-tile').find('.wst-main-headings').text().toLowerCase().trim();
        let heading = $this.closest('.context-navigation-4-0').find('.content .wst-main-headings');
        let heading1 = $this.closest('.context-navigation-4-0').find('.content-detail h3');
        if (heading.length > 0) {
          sectionHeading = heading.text().toLowerCase().trim();
        } else if (heading1.length > 0) {
          sectionHeading = heading1.text().toLowerCase().trim();
        }
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
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
      } else if ($this.closest('.features-4-0').length > 0) {
        sectionHeading = $this.closest('.features-4-0').find('.content .wst-secondary-headings').text().toLowerCase().trim();
        ctaName = $this.find('img').attr('title').toLowerCase().trim();
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: 'view in ' + ctaName,
              name: ctaName,
            },
          },
        });
      } else if ($this.closest('.benefit-section').length > 0) {
        sectionHeading = $this.closest('.benefit-section').find('.benefits-main-title').text().toLowerCase().trim();

        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: 'benefits',
              name: ctaName,
            },
          },
        });
      } else if ($this.closest('.current-promotions-wrraper').length > 0) {
        sectionHeading = $this.closest('.current-promotions-wrraper').find('.promotions-title-wrap').text().toLowerCase().trim();
        btnAction = $this.closest('.current-promotions-box').find('.title-wrap').text().toLowerCase().trim();

        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
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
      } else if ($this.closest('.cross-promotion-plain').length > 0) {
        sectionHeading = sectionHeading = $this.closest('.cross-promotion-plain').find('.cmp-teaser__title').text().toLowerCase().trim();

        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: ctaName,
              name: ctaName,
            },
          },
        });
      } else if ($this.closest('.media-cta-section').length > 0) {
        sectionHeading = sectionHeading = $this.closest('.media-cta-section').find('.body-standard.text-left .col-xs-12 > h4').text().toLowerCase().trim();

        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: ctaName,
              name: ctaName,
            },
          },
        });
      } else {
        btnAction = ctaName;
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: linkType,
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: 'main',
              action: btnAction,
              name: ctaName,
            },
          },
        });
      }
    }
  });

  // Form start tracking
  function formStart(name) {
    if (!window.adobeDataLayer) {
      return false;
    }

    window.adobeDataLayer.push({
      event: 'form start',
      formDetails: {
        formName: name,
      },
      eventInfo: {
        formStart: 1,
      },
    });

    return true;
  }

  // Form Complete
  function formComplete(name) {
    if (!window.adobeDataLayer) {
      return false;
    }

    window.adobeDataLayer.push({
      event: 'form submit',
      formDetails: {
        formName: name,
      },
      eventInfo: {
        formSubmit: 1,
      },
    });

    return true;
  }

  function getFormName() {
    let currentURL = window.location.href;
    const productName = queryParamValue('productName', currentURL);
    const targetElementValue = $(".teaser-form").find(".cmp-teaser__title").text().toLowerCase().trim() || '';
    if (productName) {
      const valueWithProductName = targetElementValue + " " + productName.toLowerCase() + "?";
      return valueWithProductName;
    } else {
      return targetElementValue;
    }
  }

  function queryParamValue(name, url) {
    if (!name || !url) return undefined;

    return getParameterByName(name, url)
      .replace(/_/g, " ")
      .replace(/[\_\"\'\>\<\?\=\/\/]/g, " ");
  }

  let formObj = $(document).find('form');
  if (formObj.length > 0) {
    formObj.each(function () {
      let dirty = false;
      let inputEle = $(this).find('input');
      let textArea = $(this).find('textarea');
      let formName = getFormName();

      inputEle.each(function () {
        $(this).on('input', function () {
          if (!dirty) {
            dirty = true;
            formStart(formName);
          }
        });
      });
      textArea.each(function () {
        $(this).on('input', function () {
          if (!dirty) {
            dirty = true;
            formStart(formName);
          }
        });
      });

      $(this).on('submit', function () {
        formComplete(formName);
      });
    });
  }

  // Hero Banner next click
  $('.hero-banner-section .hero-next').on('click', function (e) {
    if (window.adobeDataLayer) {
      window.adobeDataLayer.push({
        event: 'linkClicked',
        xdmActionDetails: {
          web: {
            webInteraction: {
              name: 'next',
              URL: '',
              type: 'other',
              region: 'main',
              linkClicks: {
                value: 1,
              },
            },
          },
          linkInfo: {
            sectionHeading: 'hero banner section',
            action: 'hero banner click',
            name: 'next',
          },
          eventInfo: {
            bannerClick: 1,
          },
        },
      });
    }
  });

  // Hero Banner prev click
  $('.hero-banner-section .hero-prev').on('click', function (e) {
    if (window.adobeDataLayer) {
      window.adobeDataLayer.push({
        event: 'linkClicked',
        xdmActionDetails: {
          web: {
            webInteraction: {
              name: 'previous',
              URL: '',
              type: 'other',
              region: 'main',
              linkClicks: {
                value: 1,
              },
            },
          },
          linkInfo: {
            sectionHeading: 'hero banner section',
            action: 'hero banner click',
            name: 'previous',
          },
          eventInfo: {
            bannerClick: 1,
          },
        },
      });
    }
  });

  //Accordion
  let accordionBtn = $(".accordion .cmp-accordion__button");
  if (accordionBtn.hasClass('cmp-accordion__button--expanded')) {
    count++;
  }
  accordionBtn.on("click", function (e) {
    let $this = $(this);
    let ctaName = '';
    let sectionHeading = $this.find('.cmp-accordion__title').text().toLowerCase().trim();
    count++;
    if (count % 2 === 0) {
      ctaName = 'collapse';
    } else {
      ctaName = 'expand';
    }
    window.adobeDataLayer.push({
      event: 'linkClicked',
      xdmActionDetails: {
        web: {
          webInteraction: {
            name: ctaName,
            URL: '',
            type: "other",
            region: 'main',
            linkClicks: {
              value: 1,
            },
          },
        },
        linkInfo: {
          sectionHeading: sectionHeading,
          action: 'accordion click',
          name: ctaName,
        },
      },
    });
  });

  // modal popup
  $(document).on('AA_MODAL_LOADED', (event) => {
    $('.modal-popup-wrapper .nv-modal-dialog .offer-details-wrapper a').on("click", function (e) {
      let $this = $(this);
      let trgt = e.target;
      let ctaName = trgt.innerText ? trgt.innerText.toLowerCase().trim() : '';
      const currrentURL = $this.attr('href') ? $this.attr('href') : '';
      let sectionHeading = $this.closest('.modal-popup-wrapper').find('.nv-modal-header .nv-modal-title');
      sectionHeading = sectionHeading.text().trim().toLowerCase();

      if (window.adobeDataLayer) {
        window.adobeDataLayer.push({
          event: 'linkClicked',
          xdmActionDetails: {
            web: {
              webInteraction: {
                name: ctaName,
                URL: currrentURL,
                type: 'download',
                region: 'main',
                linkClicks: {
                  value: 1,
                },
              },
            },
            linkInfo: {
              sectionHeading: sectionHeading,
              action: "more info clicked",
              name: ctaName,
            },
            eventInfo: {
              downloadClick: 1,
            },
          },
        });
      }
    });
  });

})(window, document, jQuery);
