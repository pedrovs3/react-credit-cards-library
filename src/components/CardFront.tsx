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

export type Issuers =
  | "visa"
  | "mastercard"
  | "amex"
  | "discover"
  | "diners"
  | "jcb"
  | "Unknown";

const ISSUERS_LOGOS: Record<Issuers, IconType | string> = {
  visa: FaCcVisa,
  mastercard: FaCcMastercard,
  amex: FaCcAmex,
  discover: FaCcDiscover,
  diners: FaCcDinersClub,
  jcb: FaCcJcb,
  Unknown: "Unknown",
};

interface CardFrontProps {
  number?: string;
  name?: string;
  expiry?: string;
  focus?: "number" | "name" | "expiry" | "cvc" | string;
}

const CardFront: React.FC<CardFrontProps> = ({
  number = "",
  name = "YOUR NAME HERE",
  expiry = "",
  focus,
}) => {
  const [cardData, setCardData] = useState({
    number: formatCardNumber(number, getCardIssuer(number) as Issuers),
    name,
    expiry: formatCardExpiry(expiry),
  });

  const [issuerLogo, setIssuerLogo] = useState<Issuers>("Unknown");

  useEffect(() => {
    const flag = getCardIssuer(number);
    setIssuerLogo(flag as keyof typeof ISSUERS_LOGOS);
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
        width: "100%",
        height: "100%",
        maxHeight: "203px",
        maxWidth: "340px",
        backfaceVisibility: "hidden",
        backgroundColor: "#FFF",
        color: "#000",
        borderRadius: "12px",
        border: "2px solid #e6e6e6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 20px",
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
        {issuerLogo && issuerLogo !== "Unknown" ? (
          React.createElement(ISSUERS_LOGOS[issuerLogo], {
            size: 40,
            color: "#808080",
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
          width="52"
          height="39"
          viewBox="0 0 52 39"
          fill="none"
        >
          <path
            d="M4.02536 0.120117C1.80444 0.120117 0 1.92454 0 4.14545V13.0298V25.2094V34.0947C0 36.3156 1.80444 38.1201 4.02536 38.1201H47.869C50.0899 38.1201 51.8954 36.3156 51.8954 34.0947V25.2094V13.0298V4.14545C51.8954 1.92454 50.0899 0.120117 47.869 0.120117H32.0374H19.8579H4.02536ZM4.02536 1.17921H19.3284V9.10065C17.7893 9.75877 16.5511 10.9747 15.8874 12.5003H1.05909V4.14545C1.05909 2.49295 2.37285 1.17921 4.02536 1.17921ZM20.3875 1.17921H31.5079V9.40991C31.508 9.51913 31.5418 9.62565 31.6047 9.71489C31.6677 9.80414 31.7567 9.87174 31.8595 9.90843C33.3957 10.4546 34.6086 11.6637 35.1578 13.1984C35.1588 13.2016 35.1599 13.2048 35.161 13.208C35.2116 13.3499 35.2563 13.4946 35.2954 13.6413C35.296 13.6413 35.297 13.6466 35.2976 13.6488C35.3345 13.7879 35.3646 13.9296 35.3906 14.0728C35.3928 14.0844 35.3959 14.0961 35.3979 14.1077C35.4189 14.228 35.4335 14.3499 35.4465 14.4728C35.4502 14.5094 35.4569 14.5447 35.46 14.5814C35.4729 14.7336 35.4796 14.8879 35.4796 15.0437V23.1959C35.4796 23.3517 35.4729 23.506 35.46 23.6581C35.4568 23.6947 35.4503 23.7303 35.4465 23.7668C35.4335 23.8897 35.4189 24.0116 35.3979 24.1318C35.3958 24.1435 35.3926 24.1551 35.3906 24.1668C35.3646 24.31 35.3345 24.4517 35.2976 24.5908C35.297 24.5908 35.296 24.5961 35.2954 24.5982C35.2563 24.745 35.2116 24.8897 35.161 25.0316C35.1603 25.0345 35.1596 25.0373 35.1589 25.0401C34.6099 26.5755 33.3961 27.7848 31.8596 28.3311C31.7567 28.3678 31.6677 28.4354 31.6048 28.5247C31.5418 28.6139 31.508 28.7204 31.5079 28.8296V37.0603H20.3875V28.8296C20.3874 28.7204 20.3536 28.6139 20.2907 28.5247C20.2277 28.4354 20.1387 28.3678 20.0358 28.3311C18.4997 27.785 17.2868 26.5759 16.7376 25.0411C16.7372 25.0411 16.737 25.0411 16.7365 25.0358C16.7358 25.0337 16.7351 25.0316 16.7344 25.0295C16.6838 24.8875 16.6391 24.7428 16.5999 24.5961C16.5994 24.5961 16.5983 24.5908 16.5978 24.5887C16.5609 24.4496 16.5307 24.3078 16.5047 24.1646C16.5026 24.153 16.4994 24.1413 16.4975 24.1297C16.4764 24.0095 16.4618 23.8875 16.4489 23.7646C16.4452 23.7281 16.4385 23.6927 16.4354 23.656C16.4225 23.5038 16.4158 23.3495 16.4158 23.1937V15.0416C16.4158 14.8858 16.4225 14.7314 16.4354 14.5793C16.4386 14.5427 16.4451 14.5071 16.4489 14.4707C16.4618 14.3478 16.4764 14.2258 16.4975 14.1055C16.4996 14.0939 16.5028 14.0822 16.5047 14.0706C16.5307 13.9274 16.5609 13.7857 16.5978 13.6466C16.5983 13.6466 16.5994 13.6413 16.5999 13.6392C16.6391 13.4924 16.6838 13.3477 16.7344 13.2058C16.7351 13.203 16.7358 13.2001 16.7365 13.1973C17.2855 11.662 18.4993 10.4526 20.0358 9.90631C20.1387 9.86962 20.2277 9.80202 20.2906 9.71278C20.3536 9.62353 20.3874 9.51701 20.3875 9.4078V1.17709V1.17921ZM32.567 1.17921H47.869C49.5215 1.17921 50.8363 2.49295 50.8363 4.14545V12.5003H36.008C35.3443 10.9747 34.106 9.75877 32.567 9.10065V1.17921ZM1.05909 13.5594H15.5305C15.4176 14.0349 15.3568 14.5312 15.3568 15.0435V23.1957C15.3568 23.708 15.4176 24.2043 15.5305 24.6798H1.05909V13.5594ZM36.3648 13.5594H50.8363V24.6798H36.3648C36.4778 24.2043 36.5386 23.708 36.5386 23.1957V15.0435C36.5386 14.5312 36.4778 14.0349 36.3648 13.5594ZM1.05909 25.7389H15.8874C16.5511 27.2645 17.7893 28.4803 19.3284 29.1385V37.061H4.02536C2.37285 37.061 1.05909 35.7472 1.05909 34.0947V25.7389ZM36.008 25.7389H50.8363V34.0947C50.8363 35.7472 49.5215 37.061 47.869 37.061H32.567V29.1385C34.106 28.4803 35.3443 27.2645 36.008 25.7389Z"
            fill="#808080"
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
            fontSize: "1.4rem",
            color: focus === "number" ? "#000" : "#808080",
            fontWeight: focus === "number" ? "semibold" : "normal",
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
            alignItems: "center",
            maxWidth: "100%",
            gap: "12px",
          }}
        >
          <div
            style={{
              flex: 1,
              maxWidth: "80%",
              fontSize: "1rem",
              color: focus === "name" ? "#000" : "#808080",
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
                color: focus === "expiry" ? "#000" : "#808080",
                textShadow: "0 1px 0 #ccc",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <FormattedMessage id="validThru" defaultMessage="VALID THRU" />
            </span>
            <span
              style={{
                fontSize: "1.2rem",
                color: focus === "expiry" ? "#000" : "#808080",
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
