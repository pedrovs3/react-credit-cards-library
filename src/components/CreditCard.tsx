import React, { CSSProperties, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import { Focused } from "..";
import messages, { Locale } from "../lib/intl";
import CardBack from "./CardBack";
import CardFront, { Issuers } from "./CardFront";

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
    width: "calc(100% - 44px)",
    height: "calc(100% - 24px)",
  },
}) => {
  const [issuerLogo, setIssuerLogo] = useState<Issuers>("Unknown");

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
      alignItems: "center",
      height: "auto",
      width: "auto",
      maxWidth: "320px",
      maxHeight: "180px",
      minWidth: "320px",
      minHeight: "180px",
      borderRadius: "12px",
      transformStyle: "preserve-3d",
      transform: focus === "cvc" ? "rotateY(180deg)" : "rotateY(0deg)",
      transition: "transform 0.6s",
    }),
    [focus]
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
            issuer={issuerLogo}
            setIssuer={setIssuerLogo}
            richColors={richColors}
            cardSizes={cardSizes}
          />
        </IntlProvider>

        <CardBack
          cvc={cvc}
          issuer={issuerLogo}
          richColors={richColors}
          cardSizes={cardSizes}
        />
      </div>
    </div>
  );
};

export default React.memo(CreditCard);
