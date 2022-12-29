const DATE_FORMAT_LOCALES = {
  "YYYY-MM-DD": "en-ca",
};

// https://twitter.com/midudev/status/1478747159138873350
const formatDate = (date, locale = "es", options) => {
  return new Intl.DateTimeFormat(locale, options).format(date);
};

// Obtener fecha en formato YYYY-MM-DD
const getOnlyDate = (date) => {
  return formatDate(date, DATE_FORMAT_LOCALES["YYYY-MM-DD"]);
};

export { formatDate, getOnlyDate };
