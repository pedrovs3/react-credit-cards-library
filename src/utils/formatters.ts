import type { Issuer } from "../types/issuers";

interface CardFormat {
  digitCount: number;
  groupPattern: (cleaned: string) => string;
  maxLength: number;
}

const CARD_FORMATS: Partial<Record<Issuer, CardFormat>> = {
  amex: {
    digitCount: 15,
    groupPattern: (s) => s.replace(/(.{4})(.{6})(.{5})/, "$1 $2 $3"),
    maxLength: 17,
  },
  diners: {
    digitCount: 14,
    groupPattern: (s) => s.replace(/(.{4})(.{6})(.{4})/, "$1 $2 $3"),
    maxLength: 16,
  },
};

const DEFAULT_FORMAT: CardFormat = {
  digitCount: 16,
  groupPattern: (s) => s.replace(/(.{4})(?=.)/g, "$1 "),
  maxLength: 19,
};

/**
 * Formats a credit card number based on the issuer type.
 *
 * @param value - The raw credit card number input.
 * @param issuer - The type of the credit card issuer.
 * @returns The formatted credit card number with grouping and bullet placeholders.
 */
export const formatCardNumber = (value: string, issuer: Issuer): string => {
  const cleaned = value.replace(/\D/g, "");
  const format = CARD_FORMATS[issuer] ?? DEFAULT_FORMAT;

  const padded = cleaned.padEnd(format.digitCount, "\u2022");
  const formatted = format.groupPattern(padded).trim();

  return formatted.substring(0, format.maxLength);
};

/**
 * Formats a cardholder name to uppercase.
 */
export const formatCardName = (value: string): string => {
  return value.toUpperCase();
};

/**
 * Formats an expiry date string as MM/YY with bullet placeholders.
 */
export const formatCardExpiry = (value: string): string => {
  const formatted = value.replace(/\D/g, "").padEnd(4, "\u2022");
  return `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
};

/**
 * Formats a CVC string with bullet placeholders.
 */
export const formatCardCvc = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .padEnd(3, "\u2022")
    .substring(0, 3);
};
