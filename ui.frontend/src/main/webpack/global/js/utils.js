export const numberWithCommas = (price) => {
  let formattedPrice = price.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(formattedPrice)) formattedPrice = formattedPrice.replace(pattern, '$1,$2');
  return formattedPrice;
};

export const getParameterByName = (name, href) => {
  const paramName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regexS = '[\\?&]' + paramName + '=([^&#]*)';
  const regex = new RegExp(regexS);
  const results = regex.exec(href);
  if (results == null) return '';
  return decodeURIComponent(results[1].replace(/-/g, ' '));
};

export const getURLParameter = (sParam) => {
  const sPageURL = window.location.search.substring(1);
  const sURLVariables = sPageURL.split('&');
  const paramMap = {};

  sURLVariables.forEach((urlVars) => {
    const [key, value] = urlVars.split('=');
    paramMap[key] = value;
  });
  return paramMap[sParam];
};
