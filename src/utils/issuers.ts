import { IconType } from "react-icons";
import { FaCcAmex } from "react-icons/fa6";
import {
  SiDinersclub,
  SiDiscover,
  SiJcb,
  SiMastercard,
  SiVisa,
} from "react-icons/si";
import { Issuers } from "../types/issuers";

export const ISSUERS_LOGOS: Record<Issuers, IconType | string> = {
  visa: SiVisa,
  mastercard: SiMastercard,
  amex: FaCcAmex,
  discover: SiDiscover,
  diners: SiDinersclub,
  jcb: SiJcb,
  Unknown: "Unknown",
};

export const ISSUER_COLORS: Record<Issuers, string> = {
  visa: "#1A428A", // Azul clássico da Visa
  mastercard: "#EB001B", // Vermelho icônico da Mastercard
  amex: "#016FD0", // Azul premium da Amex
  discover: "#FF5F00", // Laranja vibrante da Discover (mantido)
  diners: "#004B8D", // Azul corporativo da Diners
  jcb: "#009E60", // Verde distintivo da JCB
  Unknown: "#80868B", // Cinza neutro com melhor contraste
};

export const ISSUER_BG_COLORS: Record<Issuers, string> = {
  visa: "#1A428A0f",
  mastercard: "#EB001B0f",
  amex: "#016FD00f",
  discover: "#FF5F000f",
  diners: "#004B8D0f",
  jcb: "#009E600f",
  Unknown: "#FFFFFF", // Fundo branco para o desconhecido
};
