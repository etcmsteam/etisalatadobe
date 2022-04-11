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
  
