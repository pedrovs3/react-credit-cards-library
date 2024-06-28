import React, { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { IntlProvider } from "react-intl";
import messages, { Locale } from "../lib/intl";

interface CreditCardProps {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  customStyle?: React.CSSProperties;
  focus: "number" | "name" | "expiry" | "cvc" | string;
  locale?: Locale;
}

const CreditCard: React.FC<CreditCardProps> = ({
  number,
  name,
  expiry,
  cvc,
  customStyle,
  focus,
  locale = "en",
}) => {
  return (
    <div style={{ ...customStyle }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "290px",
          height: "180px",
          borderRadius: "12px",
          position: "relative",
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
          />
        </IntlProvider>

        <CardBack cvc={cvc} />
      </div>
    </div>
  );
};

export default CreditCard;
