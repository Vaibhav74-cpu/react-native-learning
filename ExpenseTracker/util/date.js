export function gatFomattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${String(date.getDate())}`;
}

export function getRecentDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
