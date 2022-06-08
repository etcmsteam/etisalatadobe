export const numberWithCommas = (price) => {
  let formattedPrice = price.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(formattedPrice)) formattedPrice = formattedPrice.replace(pattern, "$1,$2");
  return formattedPrice;
};
