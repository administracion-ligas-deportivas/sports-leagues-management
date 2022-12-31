const isStringInObjectValues = (obj, str) => {
  return Object.values(obj).includes(str);
  // return Object.values(obj).some((value) => value === str);
};

module.exports = {
  isStringInObjectValues,
};
