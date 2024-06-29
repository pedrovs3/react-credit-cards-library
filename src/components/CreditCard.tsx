import React, { useState } from "react";
import CardFront, { Issuers } from "./CardFront";
import CardBack from "./CardBack";
import { IntlProvider } from "react-intl";
import messages, { Locale } from "../lib/intl";
import { Focused } from "..";

interface CreditCardProps {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focus: Focused;
  locale?: Locale;
  richColors?: boolean;
}

const CreditCard: React.FC<CreditCardProps> = ({
  number,
  name,
  expiry,
  cvc,
  focus,
  locale = "en",
  richColors = false,
}) => {
  const [issuerLogo, setIssuerLogo] = useState<Issuers>("Unknown");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        perspective: "1000px",
      }}
    >
      <div
        style={{
          position: "relative",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: "320px",
          maxHeight: "180px",
          borderRadius: "12px",
          transformStyle: "preserve-3d",
          transform: focus === "cvc" ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s",
        }}
      >
        <IntlProvider locale={locale} messages={messages[locale]}>
          <CardFront
            number={number}
            name={name}
            expiry={expiry}
            focus={focus}
            issuer={issuerLogo}
            setIssuer={setIssuerLogo}
            richColors={richColors}
          />
        </IntlProvider>

        <CardBack cvc={cvc} issuer={issuerLogo} richColors={richColors} />
      </div>
    </div>
  );
};

export default CreditCard;
