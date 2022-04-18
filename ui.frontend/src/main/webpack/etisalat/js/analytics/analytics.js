/* eslint-disable no-undef */
/* eslint-disable no-console */
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
    if (data) {
      let accNumber = data.accountNumber;
      let custName = data.params[0].CUSTOMER_NAME;
      let emailId = data.params[0].EMAIL;
      let contact = data.params[0].CONTACT;
      let compName = data.params[0].COMPANY;
      let detail = data.params[0].DETAIL;

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

export const FORM_ERROR = (form) => {
  let name = form.attr('name');
  if (window.adobeDataLayer) {
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
  }
};
  
