import React from "react";
import { formatCardCvc } from "../utils/formatters";
import { HiOutlineSignal } from "react-icons/hi2";
import { ISSUER_BG_COLORS, ISSUER_COLORS } from "../utils/issuers";
import { Issuers } from "./CardFront";

interface CardBackProps {
  cvc: string;
  issuer?: Issuers;
  richColors?: boolean;
  cardSizes: {
    width?: string;
    height?: string;
  };
}

const CardBack: React.FC<CardBackProps> = ({
  cvc,
  issuer,
  richColors = false,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "calc(100% - 4px)",
        height: "100%",
        backfaceVisibility: "hidden",
        backgroundColor: richColors
          ? ISSUER_BG_COLORS[issuer as keyof typeof ISSUER_BG_COLORS]
          : "#FFF",
        color: "#000",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transform: "rotateY(180deg)",
        border: "2px solid",
        borderColor: richColors
          ? ISSUER_COLORS[issuer as keyof typeof ISSUER_COLORS]
          : "#e6e6e6",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          color:
            richColors && issuer !== "Unknown"
              ? ISSUER_COLORS[issuer as keyof typeof ISSUER_COLORS]
              : "#000",
          textShadow: "0 1px 0 #ccc",
          padding: "10px 20px",
          borderTop: "2px solid",
          borderBottom: "2px solid",
          borderColor: richColors
            ? ISSUER_COLORS[issuer as keyof typeof ISSUER_COLORS]
            : "#e6e6e6",
          textAlign: "end",
          marginTop: "40px",
        }}
      >
        {formatCardCvc(cvc || "")}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          padding: "10px 15px",
          width: "100%",
          height: "100%",
        }}
      >
        <HiOutlineSignal
          size={32}
          color={
            richColors && issuer !== "Unknown"
              ? ISSUER_COLORS[issuer as keyof typeof ISSUER_COLORS]
              : "#808080"
          }
        />
      </div>
    </div>
  );
};

export default CardBack;
