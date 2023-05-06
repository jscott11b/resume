export const formatDateMonthYear = (date: Date) => {
  return date.toLocaleDateString("en-US", {month: "short", year: "numeric"});
};
