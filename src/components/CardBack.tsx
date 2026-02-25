import { type CSSProperties, memo, useMemo } from "react";
import { HiOutlineSignal } from "react-icons/hi2";
import type { Issuer } from "../types/issuers";
import { formatCardCvc } from "../utils/formatters";
import { ISSUER_COLORS, ISSUER_GRADIENTS } from "../utils/issuers";

interface CardBackProps {
  cvc: string;
  issuer?: Issuer;
  richColors?: boolean;
  cardSizes: {
    width?: string;
    height?: string;
  };
}

const CardBack = ({
  cvc,
  issuer = "Unknown",
  richColors = false,
  cardSizes,
}: CardBackProps) => {
  const isDark = richColors;

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      position: "absolute",
      width: cardSizes.width,
      height: cardSizes.height,
      maxWidth: "320px",
      maxHeight: "180px",
      backfaceVisibility: "hidden",
      background: isDark ? ISSUER_GRADIENTS[issuer] : "#fff",
      borderRadius: "14px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      transform: "rotateY(180deg)",
      border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #e0e0e0",
      fontFamily:
        "'SF Mono', 'Cascadia Code', 'Fira Code', 'Consolas', monospace",
      overflow: "hidden",
    }),
    [isDark, issuer, cardSizes],
  );

  const magneticStripeStyle = useMemo<CSSProperties>(
    () => ({
      width: "100%",
      height: "38px",
      marginTop: "18px",
      background: isDark
        ? "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 100%)"
        : "#2a2a2a",
    }),
    [isDark],
  );

  const signatureStripStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      margin: "14px 20px 0",
      padding: "0 12px",
      height: "28px",
      borderRadius: "4px",
      background: isDark ? "rgba(255,255,255,0.08)" : "#f5f5f5",
    }),
    [isDark],
  );

  const cvcStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: "0.9rem",
      fontWeight: 600,
      fontStyle: "italic",
      letterSpacing: "0.1em",
      color: isDark ? "rgba(255,255,255,0.85)" : "#333",
      transition: "color 0.25s ease",
    }),
    [isDark],
  );

  const signalColor = isDark
    ? "rgba(255,255,255,0.4)"
    : ISSUER_COLORS[issuer] !== "#80868B"
      ? ISSUER_COLORS[issuer]
      : "#999";

  return (
    <div style={containerStyle}>
      {/* Magnetic stripe */}
      <div style={magneticStripeStyle} />

      {/* Signature strip with CVC */}
      <div style={signatureStripStyle}>
        <span style={cvcStyle}>{formatCardCvc(cvc || "")}</span>
      </div>

      {/* Contactless icon */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          padding: "0 20px 14px",
          flex: 1,
        }}
      >
        <HiOutlineSignal size={28} color={signalColor} />
      </div>
    </div>
  );
};

export default memo(CardBack);
