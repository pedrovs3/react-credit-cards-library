import React, { useCallback, useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa6";
import { getCardIssuer } from "../utils/get-card-issuer";
import {
  formatCardExpiry,
  formatCardName,
  formatCardNumber,
} from "../utils/formatters";
import { FormattedMessage } from "react-intl";
import { Focused } from "..";
import {
  ISSUERS_LOGOS,
  ISSUER_BG_COLORS,
  ISSUER_COLORS,
} from "../utils/issuers";

export type Issuers =
  | "visa"
  | "mastercard"
  | "amex"
  | "discover"
  | "diners"
  | "jcb"
  | "Unknown";

interface CardFrontProps {
  number?: string;
  name?: string;
  expiry?: string;
  focus?: Focused;
  richColors?: boolean;
  issuer: Issuers;
  setIssuer: React.Dispatch<React.SetStateAction<Issuers>>;
  cardSizes: {
    width: string;
    height: string;
  };
}

const CardFront: React.FC<CardFrontProps> = ({
  number = "",
  name = "YOUR NAME HERE",
  expiry = "",
  focus,
  richColors = false,
  issuer,
  setIssuer,
  cardSizes,
}) => {
  const [cardData, setCardData] = useState({
    number: formatCardNumber(number, getCardIssuer(number) as Issuers),
    name,
    expiry: formatCardExpiry(expiry),
  });

  useEffect(() => {
    const flag = getCardIssuer(number);
    setIssuer(flag as keyof typeof ISSUERS_LOGOS);
  }, [number]);

  useEffect(() => {
    setCardData({
      number: formatCardNumber(number, getCardIssuer(number) as Issuers),
      name: formatCardName(name),
      expiry: formatCardExpiry(expiry),
    });
  }, [number, name, expiry]);

  return (
    <div
      style={{
        position: "absolute",
        backfaceVisibility: "hidden",
        backgroundColor: richColors ? ISSUER_BG_COLORS[issuer] : "#FFF",
        color: "#000",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 20px",
        border: "2px solid",
        borderColor: richColors ? ISSUER_COLORS[issuer] : "#e6e6e6",
        transition: "all 0.2s ease-in-out",
        maxWidth: "320px",
        maxHeight: "180px",
        fontFamily: "monospace",
        ...cardSizes,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5px",
          transition: "all 0.2s ease-in-out",
        }}
      >
        {issuer && issuer !== "Unknown" ? (
          React.createElement(ISSUERS_LOGOS[issuer], {
            size: 40,
            color: richColors ? ISSUER_COLORS[issuer] : "#808080",
          })
        ) : (
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "transparent",
            }}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "5px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="29"
          viewBox="0 0 39 29"
          fill="none"
        >
          <path
            d="M2.96606 0.120117C1.32959 0.120117 0 1.44969 0 3.08615V9.63254V18.6069V25.154C0 26.7905 1.32959 28.1201 2.96606 28.1201H35.2719C36.9083 28.1201 38.2387 26.7905 38.2387 25.154V18.6069V9.63254V3.08615C38.2387 1.44969 36.9083 0.120117 35.2719 0.120117H23.6065H14.6321H2.96606ZM2.96606 0.900498H14.242V6.73735C13.1079 7.22228 12.1955 8.11821 11.7065 9.24235H0.780381V3.08615C0.780381 1.86852 1.74842 0.900498 2.96606 0.900498ZM15.0223 0.900498H23.2163V6.96523C23.2164 7.0457 23.2413 7.1242 23.2877 7.18995C23.3341 7.25571 23.3997 7.30552 23.4755 7.33256C24.6073 7.735 25.5011 8.62588 25.9058 9.75677C25.9065 9.75912 25.9073 9.76146 25.9081 9.7638C25.9454 9.86837 25.9783 9.975 26.0072 10.0831C26.0076 10.0831 26.0083 10.087 26.0087 10.0886C26.0359 10.1911 26.0582 10.2955 26.0773 10.401C26.0789 10.4096 26.0812 10.4182 26.0827 10.4268C26.0982 10.5154 26.1089 10.6052 26.1185 10.6958C26.1212 10.7227 26.1261 10.7488 26.1284 10.7758C26.1379 10.8879 26.1429 11.0017 26.1429 11.1165V17.1233C26.1429 17.2381 26.1379 17.3518 26.1284 17.4639C26.1261 17.4909 26.1213 17.5171 26.1185 17.544C26.1089 17.6345 26.0982 17.7244 26.0827 17.813C26.0811 17.8215 26.0788 17.8301 26.0773 17.8387C26.0582 17.9442 26.0359 18.0487 26.0087 18.1512C26.0083 18.1512 26.0076 18.1551 26.0072 18.1566C25.9783 18.2648 25.9454 18.3714 25.9081 18.476C25.9076 18.4781 25.907 18.4801 25.9065 18.4822C25.502 19.6135 24.6077 20.5046 23.4755 20.9072C23.3997 20.9342 23.3341 20.984 23.2877 21.0498C23.2413 21.1155 23.2164 21.194 23.2164 21.2745V27.3392H15.0224V21.2745C15.0223 21.194 14.9974 21.1155 14.951 21.0498C14.9046 20.984 14.839 20.9342 14.7632 20.9072C13.6314 20.5047 12.7376 19.6138 12.3329 18.483C12.3327 18.483 12.3325 18.483 12.3322 18.4791C12.3316 18.4775 12.3311 18.4759 12.3306 18.4744C12.2933 18.3698 12.2604 18.2632 12.2315 18.155C12.2311 18.155 12.2304 18.1511 12.23 18.1496C12.2028 18.0471 12.1805 17.9426 12.1614 17.8371C12.1598 17.8285 12.1575 17.8199 12.156 17.8114C12.1405 17.7228 12.1298 17.6329 12.1202 17.5424C12.1175 17.5154 12.1126 17.4894 12.1103 17.4623C12.1008 17.3502 12.0958 17.2365 12.0958 17.1217V11.1149C12.0958 11.0001 12.1008 10.8863 12.1103 10.7742C12.1126 10.7473 12.1174 10.7211 12.1202 10.6942C12.1298 10.6036 12.1405 10.5138 12.156 10.4252C12.1576 10.4166 12.1599 10.408 12.1614 10.3994C12.1805 10.2939 12.2028 10.1895 12.23 10.087C12.2304 10.087 12.2311 10.0831 12.2315 10.0815C12.2604 9.97341 12.2933 9.86677 12.3306 9.7622C12.3311 9.76012 12.3317 9.75803 12.3322 9.75595C12.7367 8.62463 13.631 7.73356 14.7632 7.331C14.839 7.30396 14.9046 7.25415 14.951 7.18839C14.9974 7.12264 15.0223 7.04414 15.0223 6.96367V0.898939V0.900498ZM23.9967 0.900498H35.2719C36.4895 0.900498 37.4583 1.86852 37.4583 3.08615V9.24235H26.5322C26.0432 8.11821 25.1307 7.22228 23.9967 6.73735V0.900498ZM0.780381 10.0227H11.4436C11.3603 10.3731 11.3155 10.7388 11.3155 11.1163V17.1231C11.3155 17.5007 11.3603 17.8664 11.4436 18.2167H0.780381V10.0227ZM26.7951 10.0227H37.4583V18.2167H26.7951C26.8784 17.8664 26.9232 17.5007 26.9232 17.1231V11.1163C26.9232 10.7388 26.8784 10.3731 26.7951 10.0227ZM0.780381 18.9971H11.7065C12.1955 20.1213 13.1079 21.0171 14.242 21.5021V27.3397H2.96606C1.74842 27.3397 0.780381 26.3717 0.780381 25.154V18.9971ZM26.5322 18.9971H37.4583V25.154C37.4583 26.3717 36.4895 27.3397 35.2719 27.3397H23.9967V21.5021C25.1307 21.0171 26.0432 20.1213 26.5322 18.9971Z"
            fill={
              richColors && issuer !== "Unknown"
                ? ISSUER_COLORS[issuer as keyof typeof ISSUER_COLORS]
                : "#808080"
            }
          />
        </svg>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div
          style={{
            fontSize: "1.3rem",
            color:
              focus === "number"
                ? richColors && issuer !== "Unknown"
                  ? ISSUER_COLORS[issuer]
                  : "#000"
                : "#808080",
            fontWeight: "normal",
            textShadow: "0 1px 0 #ccc",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            gap: "4px",
            fontFamily: "monospace",
            transition: "all 0.2s ease-in-out",
          }}
        >
          {cardData.number}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            maxWidth: "100%",
            gap: "12px",
          }}
        >
          <div
            style={{
              flex: 1,
              maxWidth: "80%",
              fontSize: "1rem",
              color:
                focus === "name"
                  ? richColors && issuer !== "Unknown"
                    ? ISSUER_COLORS[issuer]
                    : "#000"
                  : "#808080",
              textShadow: "0 1px 0 #ccc",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "start",
              transition: "all 0.2s ease-in-out",
            }}
          >
            {cardData.name || "YOUR NAME HERE"}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              maxWidth: "20%",
              transition: "all 0.2s ease-in-out",
              fontFamily: "monospace",
            }}
          >
            <span
              style={{
                fontSize: "0.6rem",
                color:
                  focus === "expiry"
                    ? richColors && issuer !== "Unknown"
                      ? ISSUER_COLORS[issuer]
                      : "#000"
                    : "#808080",
                textShadow: "0 1px 0 #ccc",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <FormattedMessage id="validThru" defaultMessage="VALID THRU" />
            </span>
            <span
              style={{
                fontSize: "1.1rem",
                color:
                  focus === "expiry"
                    ? richColors && issuer !== "Unknown"
                      ? ISSUER_COLORS[issuer]
                      : "#000"
                    : "#808080",
                textShadow: "0 1px 0 #ccc",
                transition: "all 0.2s ease-in-out",
                fontWeight: "semibold",
              }}
            >
              {cardData.expiry}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
