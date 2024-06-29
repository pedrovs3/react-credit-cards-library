import { FaCcAmex, FaCcDinersClub, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcVisa } from "react-icons/fa6";
import { Issuers } from "../components/CardFront";
import { IconType } from "react-icons";

export const ISSUERS_LOGOS: Record<Issuers, IconType | string> = {
  visa: FaCcVisa,
  mastercard: FaCcMastercard,
  amex: FaCcAmex,
  discover: FaCcDiscover,
  diners: FaCcDinersClub,
  jcb: FaCcJcb,
  Unknown: "Unknown",
};

export const ISSUER_COLORS: Record<Issuers, string> = {
  visa: "#1a1f71",
  mastercard: "#F79E1B",
  amex: "#007cc3",
  discover: "#ff5f00",
  diners: "#888",
  jcb: "#1a1f71",
  Unknown: "#e6e6e6",
};

export const ISSUER_BG_COLORS: Record<Issuers, string> = {
  visa: "#1a1f710f",
  mastercard: "#F79E1B0f",
  amex: "#007cc30f",
  discover: "#ff5f000f",
  diners: "#888880f",
  jcb: "#1a1f710f",
  Unknown: "#fff",
};