export const ISSUERS = [
  "visa",
  "mastercard",
  "amex",
  "diners",
  "elo",
  "discover",
  "jcb",
  "sodexo",
  "vr",
  "ticket_vr",
  "ticket_va",
  "alelo",
  "Unknown",
] as const;

export type Issuer = (typeof ISSUERS)[number];

export const FOCUSED_FIELDS = ["number", "name", "expiry", "cvc", ""] as const;

export type Focused = (typeof FOCUSED_FIELDS)[number];
