
export const numberWithCommas = (price) => {
  let formattedPrice = price.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(formattedPrice)) formattedPrice = formattedPrice.replace(pattern, "$1,$2");
  return formattedPrice;
};

export const getParameterByName = (name, href) => {
  const paramName = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  const regexS = "[\\?&]" + paramName + "=([^&#]*)";
  const regex = new RegExp(regexS);
  const results = regex.exec(href);
  if (results == null) return "";
  return decodeURIComponent(results[1].replace(/-/g, " "));
};
