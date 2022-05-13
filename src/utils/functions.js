import { DateTime } from "luxon";

export const shortenText = (text, len) => {
  if (text.length <= len) {
    return text;
  }
  return text.substr(0, len) + "...";
};

export const commaDelineation = (text) => {
  const str = text.split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
};

export const formatDate = (date, currentLocale) => {
  const fullDate = new Date(date);
  const locale = currentLocale === "fr" ? "fr-ca" : "en-ca";
  return DateTime.fromJSDate(fullDate).setLocale(locale).toLocaleString(DateTime.DATE_FULL);
};
