export const helper = {
  isNumberZero(value: any) {
    return Number(value) === 0;
  },

  hasValue(value: any) {
    return value.length > 0;
  },

  isEmpty(value: any) {
    return value.length === 0;
  },

  commaToPoint(value: any) {
    //in 15,53
    //out 15.53
    return value.toString().replace(/,/g, '.');
  },

  pointToComma(value: any) {
    //in 15.53
    //out 15,53
    return value.toString().replace(/\./g, ',');
  },

  isNaN(value: any) {
    return isNaN(parseFloat(value));
  },

  isInteger(value: any) {
    return parseInt(value, 10) === value;
  },

  isPositiveNumber(value: any) {
    return Number(helper.commaToPoint(value)) > 0;
  },

  removeLastChar(value: any) {
    return value.toString().substring(0, value.length - 1);
  },
};
