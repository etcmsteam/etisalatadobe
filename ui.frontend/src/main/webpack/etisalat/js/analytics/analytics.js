/* eslint-disable no-undef */
/* eslint-disable no-console */
export const ANALYTICS_FILTER = (category, type, value) => {
  window.adobeDataLayer.push({
    event: "filter",
    eventInfo: {
      filterClick: 1,
    },
    filterDetails: {
      filterCategory: category,
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
$('a.btn, a.cmp-button, a.btn-text, .link, .cmp-teaser__action-link, .cms-button').on('click', function(){
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
          region: sectionHeading,
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
