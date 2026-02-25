import {
  type CSSProperties,
  createElement,
  isValidElement,
  cloneElement,
  memo,
  useMemo,
} from "react";
import { FormattedMessage } from "react-intl";
import type { Focused, Issuer } from "../types/issuers";
import {
  formatCardExpiry,
  formatCardName,
  formatCardNumber,
} from "../utils/formatters";
import { getCardIssuer } from "../utils/get-card-issuer";
import {
  ISSUERS_LOGOS,
  ISSUER_BG_COLORS,
  ISSUER_COLORS,
  ISSUER_GRADIENTS,
} from "../utils/issuers";

interface CardFrontProps {
  number?: string;
  name?: string;
  expiry?: string;
  focus?: Focused;
  richColors?: boolean;
  cardSizes: {
    width?: string;
    height?: string;
  };
}

/** Gold/silver metallic chip icon */
const ChipIcon = ({ premium }: { premium: boolean }) => {
  const fillColor = premium ? "#c9a84c" : "#b0b0b0";
  const highlightColor = premium ? "#e8d48b" : "#d4d4d4";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="28"
      viewBox="0 0 39 29"
      fill="none"
    >
      <defs>
        <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlightColor} />
          <stop offset="45%" stopColor={fillColor} />
          <stop offset="100%" stopColor={highlightColor} />
        </linearGradient>
      </defs>
      <path
        d="M2.96606 0.120117C1.32959 0.120117 0 1.44969 0 3.08615V9.63254V18.6069V25.154C0 26.7905 1.32959 28.1201 2.96606 28.1201H35.2719C36.9083 28.1201 38.2387 26.7905 38.2387 25.154V18.6069V9.63254V3.08615C38.2387 1.44969 36.9083 0.120117 35.2719 0.120117H23.6065H14.6321H2.96606ZM2.96606 0.900498H14.242V6.73735C13.1079 7.22228 12.1955 8.11821 11.7065 9.24235H0.780381V3.08615C0.780381 1.86852 1.74842 0.900498 2.96606 0.900498ZM15.0223 0.900498H23.2163V6.96523C23.2164 7.0457 23.2413 7.1242 23.2877 7.18995C23.3341 7.25571 23.3997 7.30552 23.4755 7.33256C24.6073 7.735 25.5011 8.62588 25.9058 9.75677C25.9065 9.75912 25.9073 9.76146 25.9081 9.7638C25.9454 9.86837 25.9783 9.975 26.0072 10.0831C26.0076 10.0831 26.0083 10.087 26.0087 10.0886C26.0359 10.1911 26.0582 10.2955 26.0773 10.401C26.0789 10.4096 26.0812 10.4182 26.0827 10.4268C26.0982 10.5154 26.1089 10.6052 26.1185 10.6958C26.1212 10.7227 26.1261 10.7488 26.1284 10.7758C26.1379 10.8879 26.1429 11.0017 26.1429 11.1165V17.1233C26.1429 17.2381 26.1379 17.3518 26.1284 17.4639C26.1261 17.4909 26.1213 17.5171 26.1185 17.544C26.1089 17.6345 26.0982 17.7244 26.0827 17.813C26.0811 17.8215 26.0788 17.8301 26.0773 17.8387C26.0582 17.9442 26.0359 18.0487 26.0087 18.1512C26.0083 18.1512 26.0076 18.1551 26.0072 18.1566C25.9783 18.2648 25.9454 18.3714 25.9081 18.476C25.9076 18.4781 25.907 18.4801 25.9065 18.4822C25.502 19.6135 24.6077 20.5046 23.4755 20.9072C23.3997 20.9342 23.3341 20.984 23.2877 21.0498C23.2413 21.1155 23.2164 21.194 23.2164 21.2745V27.3392H15.0224V21.2745C15.0223 21.194 14.9974 21.1155 14.951 21.0498C14.9046 20.984 14.839 20.9342 14.7632 20.9072C13.6314 20.5047 12.7376 19.6138 12.3329 18.483C12.3327 18.483 12.3325 18.483 12.3322 18.4791C12.3316 18.4775 12.3311 18.4759 12.3306 18.4744C12.2933 18.3698 12.2604 18.2632 12.2315 18.155C12.2311 18.155 12.2304 18.1511 12.23 18.1496C12.2028 18.0471 12.1805 17.9426 12.1614 17.8371C12.1598 17.8285 12.1575 17.8199 12.156 17.8114C12.1405 17.7228 12.1298 17.6329 12.1202 17.544C12.1175 17.5171 12.1126 17.4909 12.1103 17.4639C12.1007 17.3518 12.0958 17.2381 12.0958 17.1233V11.1165C12.0958 11.0017 12.1007 10.8879 12.1103 10.7758C12.1126 10.7488 12.1175 10.7227 12.1202 10.6958C12.1298 10.6052 12.1405 10.5154 12.156 10.4268C12.1575 10.4182 12.1598 10.4096 12.1614 10.401C12.1805 10.2955 12.2028 10.1911 12.23 10.0886C12.2304 10.087 12.2311 10.0831 12.2315 10.0831C12.2604 9.975 12.2933 9.86837 12.3306 9.7638C12.3311 9.76146 12.3316 9.75912 12.3322 9.75677C12.7376 8.62588 13.6314 7.735 14.7632 7.33256C14.839 7.30552 14.9046 7.25571 14.951 7.18995C14.9974 7.1242 15.0223 7.0457 15.0223 6.96523V0.900498ZM23.9967 0.900498H35.2719C36.4895 0.900498 37.4583 1.86852 37.4583 3.08615V9.24235H26.5322C26.0432 8.11821 25.1308 7.22228 23.9967 6.73735V0.900498ZM0.780381 10.0227H11.5956C11.5373 10.2832 11.4935 10.5483 11.4663 10.8181H0.780381V10.0227ZM26.6431 10.0227H37.4583V10.8181H26.7724C26.7452 10.5483 26.7014 10.2832 26.6431 10.0227ZM0.780381 11.5985H11.3291C11.3198 11.7701 11.3154 11.9431 11.3154 12.1173V16.1224C11.3154 16.2966 11.3198 16.4696 11.3291 16.6412H0.780381V11.5985ZM26.9096 11.5985H37.4583V16.6412H26.9096C26.9189 16.4696 26.9233 16.2966 26.9233 16.1224V12.1173C26.9233 11.9431 26.9189 11.7701 26.9096 11.5985ZM0.780381 17.4216H11.4663C11.4935 17.6914 11.5373 17.9565 11.5956 18.217H0.780381V17.4216ZM26.6431 17.4216H37.4583V18.217H26.7724C26.7452 17.9565 26.7014 17.6914 26.6431 17.4216ZM0.780381 18.9974H11.7065C12.1955 20.1215 13.1079 21.0174 14.242 21.5023V27.3392H2.96606C1.74842 27.3392 0.780381 26.3712 0.780381 25.154V18.9974ZM26.5322 18.9974H37.4583V25.154C37.4583 26.3712 36.4895 27.3392 35.2719 27.3392H23.9967V21.5023C25.1308 21.0174 26.0432 20.1215 26.5322 18.9974Z"
        fill="url(#chipGrad)"
      />
    </svg>
  );
};

const CardFront = ({
  number = "",
  name = "",
  expiry = "",
  focus,
  richColors = false,
  cardSizes,
}: CardFrontProps) => {
  const issuer = useMemo(() => getCardIssuer(number), [number]);
  const isDark = richColors;

  const formattedNumber = useMemo(
    () => formatCardNumber(number, issuer),
    [number, issuer],
  );
  const formattedName = useMemo(() => formatCardName(name), [name]);
  const formattedExpiry = useMemo(() => formatCardExpiry(expiry), [expiry]);

  // --- Color logic ---
  const baseTextColor = isDark ? "rgba(255,255,255,0.55)" : "#999";
  const focusedTextColor = isDark ? "#fff" : "#1a1a1a";
  const numberColor = focus === "number" ? focusedTextColor : baseTextColor;
  const nameColor = focus === "name" ? focusedTextColor : baseTextColor;
  const expiryColor = focus === "expiry" ? focusedTextColor : baseTextColor;

  const logoColor = isDark ? "rgba(255,255,255,0.8)" : ISSUER_COLORS[issuer];

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      position: "absolute",
      backfaceVisibility: "hidden",
      background: isDark ? ISSUER_GRADIENTS[issuer] : "#fff",
      borderRadius: "14px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #e0e0e0",
      transition: "all 0.3s ease",
      maxWidth: "320px",
      maxHeight: "180px",
      fontFamily:
        "'SF Mono', 'Cascadia Code', 'Fira Code', 'Consolas', monospace",
      width: cardSizes.width,
      height: cardSizes.height,
      overflow: "hidden",
    }),
    [isDark, issuer, cardSizes],
  );

  const topRowStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 20px 0",
    }),
    [],
  );

  const numberStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: "1.2rem",
      fontWeight: 500,
      color: numberColor,
      textAlign: "start",
      letterSpacing: "0.12em",
      padding: "0 20px",
      transition: "color 0.25s ease, text-shadow 0.25s ease",
      textShadow:
        isDark && focus === "number"
          ? "0 0 8px rgba(255,255,255,0.2)"
          : "none",
    }),
    [numberColor, isDark, focus],
  );

  const bottomSectionStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      padding: "0 20px 14px",
      gap: "12px",
    }),
    [],
  );

  const nameStyle = useMemo<CSSProperties>(
    () => ({
      maxWidth: "65%",
      fontSize: "0.82rem",
      fontWeight: 500,
      color: nameColor,
      textAlign: "start",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      transition: "color 0.25s ease",
    }),
    [nameColor],
  );

  const expiryLabelStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: "0.45rem",
      color: isDark ? "rgba(255,255,255,0.35)" : "#bbb",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    }),
    [isDark],
  );

  const expiryValueStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: "0.95rem",
      color: expiryColor,
      fontWeight: 600,
      letterSpacing: "0.06em",
      transition: "color 0.25s ease",
    }),
    [expiryColor],
  );

  const renderIssuerLogo = useMemo(() => {
    const logo = ISSUERS_LOGOS[issuer];

    if (!logo) {
      return <div style={{ width: "36px", height: "36px" }} />;
    }

    if (isValidElement(logo)) {
      return cloneElement(logo);
    }

    if (typeof logo === "function") {
      return createElement(logo, {
        size: 36,
        color: logoColor,
      });
    }

    return <div style={{ width: "36px", height: "36px" }} />;
  }, [issuer, logoColor]);

  return (
    <div style={containerStyle}>
      {/* Top row: Logo left, Chip right */}
      <div style={topRowStyle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {renderIssuerLogo}
        </div>
        <ChipIcon premium={isDark} />
      </div>

      {/* Card number */}
      <div style={numberStyle}>{formattedNumber}</div>

      {/* Bottom row: Name left, Expiry right */}
      <div style={bottomSectionStyle}>
        <div style={nameStyle}>
          {formattedName || (
            <FormattedMessage
              id="namePlaceholder"
              defaultMessage="YOUR NAME HERE"
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            flexShrink: 0,
          }}
        >
          <span style={expiryLabelStyle}>
            <FormattedMessage id="validThru" defaultMessage="VALID THRU" />
          </span>
          <span style={expiryValueStyle}>{formattedExpiry}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(CardFront);
