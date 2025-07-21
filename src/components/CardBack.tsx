import React, { CSSProperties, useMemo } from "react";
import { HiOutlineSignal } from "react-icons/hi2";
import { Issuers } from "../types/issuers";
import { formatCardCvc } from "../utils/formatters";
import { ISSUER_BG_COLORS, ISSUER_COLORS } from "../utils/issuers";

interface CardBackProps {
  cvc: string;
  issuer?: Issuers;
  richColors?: boolean;
  cardSizes: {
    width?: string;
    height?: string;
  };
}

const getDynamicColor = (
  baseColor: string,
  issuer: Issuers,
  richColors?: boolean
) => {
  if (richColors && issuer !== "Unknown") {
    return ISSUER_COLORS[issuer];
  }
  return baseColor;
};

const CardBack: React.FC<CardBackProps> = ({
  cvc,
  issuer = "Unknown",
  richColors = false,
  cardSizes,
}) => {
  const borderColor = getDynamicColor("#e6e6e6", issuer, richColors);

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      position: "absolute",
      width: cardSizes.width,
      height: cardSizes.height,
      maxWidth: "320px",
      maxHeight: "180px",
      backfaceVisibility: "hidden",
      backgroundColor: richColors ? ISSUER_BG_COLORS[issuer] : "#FFF",
      color: "#000",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      transform: "rotateY(180deg)",
      border: "2px solid",
      borderColor: borderColor,
      fontFamily: "monospace",
      overflow: "hidden",
    }),
    [richColors, issuer, cardSizes, borderColor]
  );

  const magneticStripeStyle = useMemo<CSSProperties>(
    () => ({
      borderTop: "2px solid",
      borderBottom: "2px solid",
      borderColor: richColors
        ? ISSUER_COLORS[issuer as keyof typeof ISSUER_COLORS]
        : "#e6e6e6",
      height: "40px",
      width: "100%",
      marginTop: "20px",
    }),
    [issuer, richColors]
  );

  const cvcSectionStyle = useMemo<CSSProperties>(
    () => ({
      width: "100%",
      backgroundColor: "#FFF",
      marginTop: "20px",
      textAlign: "end",
      color: "#000",
      fontStyle: "italic",
      fontWeight: "semibold",
      fontSize: "1rem",
      transition: "all 0.2s ease-in-out",
    }),
    []
  );

  return (
    <div style={containerStyle}>
      <div style={magneticStripeStyle} />
      <div style={cvcSectionStyle}>
        <span
          style={{
            padding: "10px 15px",
          }}
        >
          {formatCardCvc(cvc || "")}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          padding: "10px 15px",
          flex: 1,
        }}
      >
        <HiOutlineSignal
          size={32}
          color={getDynamicColor("#808080", issuer, richColors)}
        />
      </div>
    </div>
  );
};

export default React.memo(CardBack);
