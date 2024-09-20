type CardIssuer =
  | "visa"
  | "mastercard"
  | "amex"
  | "diners"
  | "discover"
  | "jcb"
  | "Unknown";

/**
 * Determines the card issuer based on the provided card number.
 *
 * The function identifies the credit card issuer (e.g., Visa, MasterCard,
 * American Express, etc.) by matching the card number against known patterns
 * for each issuer.
 *
 * @param {string} cardNumber - The credit card number, which may contain spaces or hyphens.
 * @returns {string} - The name of the card issuer (e.g., 'Visa', 'MasterCard', etc.)
 *                     or 'Unknown' if no issuer matches the card number.
 */
export function getCardIssuer(cardNumber: string): CardIssuer {
  const sanitizedCardNumber = cardNumber.replace(/[\s-]/g, "");

  const cardIssuers: Record<string, RegExp> = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^(?:5[1-5][0-9]{14}|2[2-7][0-9]{14})$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  };

  for (const [issuer, pattern] of Object.entries(cardIssuers)) {
    if (pattern.test(sanitizedCardNumber)) {
      return issuer as CardIssuer;
    }
  }

  return "Unknown";
}
