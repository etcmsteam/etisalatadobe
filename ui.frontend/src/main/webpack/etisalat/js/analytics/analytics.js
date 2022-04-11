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

export const FORM_SUCCESS = (form, data) => {
  const name = form.attr('name');
  const formId = form.attr('id');
  console.log(form);
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
        email: data.emailAddress ? data.emailAddress : "",
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
    window.adobeDataLayer.push({
      event: "form success",
      formDetails: {
        formName: name,
        referenceNumber: "",
      },
      user: {
        accountNumber: data.accountNumber ? data.accountNumber : "",
        name: data.contactFirstName + data.contactLastName,
        email: data.emailAddress ? data.emailAddress : "",
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
  } else if (formId === "newsletterSubscription") {
    console.log('newsletter');
    window.adobeDataLayer.push({
      event: "form success",
      formDetails: {
        formName: name,
        referenceNumber: "",
      },
      user: {
        accountNumber: data.accountNumber ? data.accountNumber : "",
        name: data.contactFirstName + data.contactLastName,
        email: data.emailAddress ? data.emailAddress : "",
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
  }
};

export const FORM_ERROR = (form) => {
  let name = form.attr('name');
  window.adobeDataLayer.push({
    event: "form error",
    formDetails: {
      formName: name,
      stepName: "",
    },
    errorInfo: {
      formError: 1,
      errorName: "Render Error 404",
      rootCause: "formLoadError",
    },
  });
};
  
