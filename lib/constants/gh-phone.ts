export function formatGhanaPhone(numberInNumber: number): string {
  const number = numberInNumber.toString();
  let cleaned = number.replace(/\D/g, ''); // remove non-digits

  if (cleaned.length <= 10) {
    // 10 digit number, format as (xxx) xxx-xxxx
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length >= 11) {
    // 14 digit number, format as +233 (xxx) xxx-xxxx
    return `+233 (${cleaned.slice(4, 7)}) ${cleaned.slice(7, 10)}-${cleaned.slice(10)}`;
  } else {
    // invalid length
    return number;
  }
}
