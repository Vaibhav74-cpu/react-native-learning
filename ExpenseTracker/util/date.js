export function gatFomattedDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${String(date.getDate())}`;
}
