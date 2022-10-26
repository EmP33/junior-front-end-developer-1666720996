const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthShortcuts = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * It takes a date string and returns the name of the month.
 * @param month - The month you want to get the name of.
 * @returns The month name of the month passed in.
 */
export const getMonthName = (month) => {
  return monthNames[new Date(month).getMonth()];
};

/**
 * It takes a month in the format of a string, and returns the month's shortcut.
 * @param month - The month you want to get the shortcut for.
 * @returns The monthShortcuts array.
 */
export const getMonthShortcut = (month) => {
  return monthShortcuts[new Date(month).getMonth()];
};

/**
 * If the date is less than 10, add a zero to the beginning of the date, otherwise return the date.
 * @param date - The date to be formatted.
 * @returns a string.
 */
export const addZeroToDate = (date) => {
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};

export const formatDisplayData = (data) => {
  return new Date(new Date().getTime() - data);
};
