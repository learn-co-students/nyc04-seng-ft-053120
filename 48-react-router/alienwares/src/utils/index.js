export const formatPrice = price => {
  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
