import { type CSSProperties, memo, useMemo } from "react";
import { IntlProvider } from "react-intl";
import type { Focused } from "../types/issuers";
import messages, { type Locale } from "../lib/intl";
import { getCardIssuer } from "../utils/get-card-issuer";
import { ISSUER_SHADOWS } from "../utils/issuers";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

interface CardSizes {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

interface CreditCardProps {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focus: Focused;
  locale?: Locale;
  richColors?: boolean;
  cardSizes?: CardSizes;
}

const CreditCard = ({
  number,
  name,
  expiry,
  cvc,
  focus,
  locale = "en",
  richColors = false,
  cardSizes = {
    width: "320px",
    height: "180px",
    maxWidth: "100%",
  },
}: CreditCardProps): JSX.Element => {
  const issuer = useMemo(() => getCardIssuer(number), [number]);

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      perspective: "1000px",
      perspectiveOrigin: "center",
    }),
    [],
  );

  const cardStyle = useMemo<CSSProperties>(
    () => ({
      position: "relative",
      transformStyle: "preserve-3d",
      transition: "transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)",
      width: cardSizes.width,
      height: cardSizes.height,
      maxWidth: cardSizes.maxWidth,
      maxHeight: cardSizes.maxHeight,
      transform: focus === "cvc" ? "rotateY(180deg)" : "rotateY(0deg)",
      boxShadow: richColors
        ? ISSUER_SHADOWS[issuer]
        : "0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)",
      borderRadius: "14px",
    }),
    [focus, cardSizes, richColors, issuer],
  );

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <CardFront
            number={number}
            name={name}
            expiry={expiry}
            focus={focus}
            richColors={richColors}
            cardSizes={cardSizes}
          />
          <CardBack
            cvc={cvc}
            issuer={issuer}
            richColors={richColors}
            cardSizes={cardSizes}
          />
        </IntlProvider>
      </div>
    </div>
  );
};

/** Memoized, typed as a plain function component for cross-version @types/react compat */
export default memo(CreditCard) as unknown as (
  props: CreditCardProps,
) => JSX.Element;
