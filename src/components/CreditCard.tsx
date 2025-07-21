import React, { CSSProperties, useMemo } from "react";
import { IntlProvider } from "react-intl";
import { Focused } from "..";
import messages, { Locale } from "../lib/intl";
import { getCardIssuer } from "../utils/get-card-issuer";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

interface CreditCardProps {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focus: Focused;
  locale?: Locale;
  richColors?: boolean;
  cardSizes?: {
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
  };
}

const CreditCard: React.FC<CreditCardProps> = ({
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
}) => {
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
    []
  );

  const cardStyle = useMemo<CSSProperties>(
    () => ({
      position: "relative",
      transformStyle: "preserve-3d",
      transition: "transform 0.6s",
      width: cardSizes.width,
      height: cardSizes.height,
      maxWidth: cardSizes.maxWidth,
      maxHeight: cardSizes.maxHeight,
      transform: focus === "cvc" ? "rotateY(180deg)" : "rotateY(0deg)",
    }),
    [focus, cardSizes]
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

export default React.memo(CreditCard);
