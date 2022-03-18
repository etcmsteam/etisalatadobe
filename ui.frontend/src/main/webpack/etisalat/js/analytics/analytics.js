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

// CTA and Hero Banner CTA Events
$('a.btn, a.cmp-button, a.btn-text, .etisalatherobanner .hero-bg-cta, .link').on('click', function(){
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
      },
      linkInfo: {
        sectionHeading: sectionHeading,
        action: btnAction,
        name: ctaName,
      },
    },
  });
});
