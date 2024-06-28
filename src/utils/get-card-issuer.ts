export function getCardIssuer(cardNumber: string): string {
  cardNumber = cardNumber.replace(/[\s-]/g, '');

  const cardPatterns: { [issuer: string]: RegExp } = {
      'visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
      'mastercard': /^(?:5[1-5][0-9]{14}|2[2-7][0-9]{14})$/,
      'amex': /^3[47][0-9]{13}$/,
      'diners': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      'discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      'jcb': /^(?:2131|1800|35\d{3})\d{11}$/
  };

  for (const issuer in cardPatterns) {
      if (cardPatterns[issuer].test(cardNumber)) {
          return issuer;
      }
  }

  return 'Unknown';
}