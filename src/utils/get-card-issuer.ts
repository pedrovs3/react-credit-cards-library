import { Issuer } from "../types/issuers";

const CARD_ISSUERS: Record<string, RegExp> = {
  // --- BANDEIRAS DE BENEFÍCIOS (MAIS ESPECÍFICAS) ---
  sodexo: /^(606071|603389)/,
  vr: /^(637036|627416)/,
  ticket_vr: /^603342/,
  ticket_va: /^602651/,
  alelo: /^(5067|5090|5041|4312|6362|6363)/,

  // --- REDES PRINCIPAIS (MAIS GENÉRICAS) ---
  visa: /^4/,
  mastercard: /^(5[1-5]|2[2-7])/,
  amex: /^3[47]/,
  diners: /^3(?:0[0-5]|[68])/,
  elo: /^(401178|438935|457631|504175|627780|636297|636368|650|6516|6550)/,
  discover: /^6(?:011|5)/,
  jcb: /^(?:2131|1800|35)/,
};

/**
 * Identifies the issuer of a credit, debit, or benefit card.
 *
 * @param {string} cardNumber - The credit card number, which may contain spaces or hyphens.
 * @returns {string} - The name of the card issuer (e.g., 'Visa', 'MasterCard', etc.)
 *                     or 'Unknown' if no issuer matches the card number.
 */
export function getCardIssuer(cardNumber: string): Issuer {
  if (!cardNumber || typeof cardNumber !== "string") {
    return "Unknown";
  }

  const sanitizedCardNumber = cardNumber.replace(/[^\d]/g, "");

  for (const [issuer, pattern] of Object.entries(CARD_ISSUERS)) {
    if (pattern.test(sanitizedCardNumber)) {
      return issuer as Issuer;
    }
  }

  return "Unknown";
}
