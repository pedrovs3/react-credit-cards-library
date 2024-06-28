import { Issuers } from "../components/CardFront";

export const formatCardNumber = (value: string, issuer: Issuers): string => {
  const cleaned = value.replace(/\D+/g, '');
  let formatted = '';
  let maxLength = 19; // 16 digits + 3 spaces 

  switch (issuer.toLowerCase()) {
    case 'jcb':
      formatted = cleaned.padEnd(16, '•').replace(/(\d{4})(?=\d)/g, '$1 ').trim();
      break;
    case 'amex':
      formatted = cleaned.padEnd(15, '•').replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3').trim();
      maxLength = 17; // 15 digits + 2 spaces
      break;
    case 'diners':
      formatted = cleaned.padEnd(14, '•').replace(/(\d{4})(\d{6})(\d{4})/, '$1 $2 $3').trim();
      maxLength = 16; // 14 digits + 2 spaces
      break;
    default:
      formatted = cleaned.padEnd(16, '•').replace(/(\d{4})/g, '$1 ').trim();
      break;
  }

  return formatted.substring(0, maxLength);
};


export const formatCardName = (value: string) => {
  return value.toUpperCase();
};

export const formatCardExpiry = (value: string): string => {
  const cleaned = value.replace(/\D+/g, '');
  let formatted = cleaned.padEnd(4, '•').replace(/(\d{2})(\d{2})/, '$1/$2');
  return formatted.substring(0, 5);
};

export const formatCardCvc = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})/, "$1")
    .trim().substring(0, 3);
};
