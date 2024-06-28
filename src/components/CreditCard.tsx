import React, { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

interface CreditCardProps {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  customStyle?: React.CSSProperties;
  focus: "number" | "name" | "expiry" | "cvc" | string;
}

const CreditCard: React.FC<CreditCardProps> = ({
  number,
  name,
  expiry,
  cvc,
  customStyle,
  focus,
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
        <CardFront number={number} name={name} expiry={expiry} focus={focus} />
        <CardBack cvc={cvc} />
      </div>
    </div>
  );
};

export default CreditCard;
