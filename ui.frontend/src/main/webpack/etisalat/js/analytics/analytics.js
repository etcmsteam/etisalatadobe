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
