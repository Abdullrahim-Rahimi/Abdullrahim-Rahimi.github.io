export function formatNumberToTwoDigits(number: any) {
  return number.toString().padStart(2, '0');
}
