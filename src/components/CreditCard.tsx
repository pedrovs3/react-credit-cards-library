import React, { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

interface CreditCardProps {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  issuer: string;
  customStyle?: React.CSSProperties;
  focus: "number" | "name" | "expiry" | "cvc" | string;
}

const CreditCard: React.FC<CreditCardProps> = ({
  number,
  name,
  expiry,
  cvc,
  issuer,
  customStyle,
  focus,
}) => {
  return (
    <div style={{ ...customStyle }}>
      <div
        style={{
          width: "300px",
          height: "180px",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: focus === "cvc" ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s",
        }}
      >
        <CardFront
          number={number}
          name={name}
          expiry={expiry}
          issuer={issuer}
          focus={focus}
        />
        <CardBack cvc={cvc} />
      </div>
    </div>
  );
};

export default CreditCard;
