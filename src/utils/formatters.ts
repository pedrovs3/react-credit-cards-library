import { Issuer } from "../types/issuers";

/**
 * Formats a credit card number based on the issuer type.
 *
 * @param {string} value - The raw credit card number input.
 * @param {Issuer} issuer - The type of the credit card issuer. (you can use value returned of getCardIssuer function)
 * @returns {string} - The formatted credit card number.
 */
export const formatCardNumber = (value: string, issuer: Issuer): string => {
  const cleaned = value.replace(/\D+/g, "");
  let formatted = "";
  let maxLength = 19; // 16 digits + 3 spaces

  switch (issuer.toLowerCase()) {
    case "jcb":
      formatted = cleaned
        .padEnd(16, "•")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .trim();
      break;
    case "amex":
      formatted = cleaned
        .padEnd(15, "•")
        .replace(/(\d{4})(\d{6})(\d{5})/, "$1 $2 $3")
        .trim();
      maxLength = 17; // 15 digits + 2 spaces
      break;
    case "diners":
      formatted = cleaned
        .padEnd(14, "•")
        .replace(/(\d{4})(\d{6})(\d{4})/, "$1 $2 $3")
        .trim();
      maxLength = 16; // 14 digits + 2 spaces
      break;
    case "discover":
      formatted = cleaned
        .padEnd(16, "•")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .trim();

      maxLength = 19; // 16 digits + 3 spaces
      break;
    case "sodexo":
      formatted = cleaned
        .padEnd(16, "•")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .trim();
      maxLength = 19; // 16 digits + 3 spaces
      break;
    case "vr":
      formatted = cleaned
        .padEnd(16, "•")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .trim();
      maxLength = 19; // 16 digits + 3 spaces
      break;
    case "ticket_vr":
      formatted = cleaned
        .padEnd(16, "•")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .trim();
      maxLength = 19; // 16 digits + 3 spaces
      break;
    case "ticket_va":
      formatted = cleaned
        .padEnd(16, "•")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .trim();
      maxLength = 19; // 16 digits + 3 spaces
      break;
    case "alelo":
      formatted = cleaned
        .padEnd(16, "•")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .trim();
      maxLength = 19; // 16 digits + 3 spaces
      break;

    default:
      formatted = cleaned.padEnd(16, "•").replace(/(.{4})(?=.)/g, "$1 ");
      break;
  }

  return formatted.substring(0, maxLength);
};

export const formatCardName = (value: string) => {
  return value.toUpperCase();
};

export const formatCardExpiry = (value: string): string => {
  const formatted = value.replace(/\D+/g, "").padEnd(4, "•");
  return `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
};

export const formatCardCvc = (value: string) => {
  return value
    .replace(/\D/g, "")
    .padEnd(3, "•")
    .replace(/(\d{3})/, "$1")
    .trim()
    .substring(0, 3);
};
