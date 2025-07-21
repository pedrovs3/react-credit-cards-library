import React from "react";
import { IconType } from "react-icons";
import { FaCcAmex } from "react-icons/fa6";
import {
  SiDinersclub,
  SiDiscover,
  SiJcb,
  SiMastercard,
  SiVisa,
} from "react-icons/si";
import {
  AleloLogo,
  EloLogo,
  SodexoLogo,
  TicketLogo,
  VrLogo,
} from "../assets/icons/";
import { Issuer } from "../types/issuers";

export const ISSUERS_LOGOS: Record<
  Issuer,
  IconType | React.ReactElement | String
> = {
  visa: SiVisa,
  mastercard: SiMastercard,
  amex: FaCcAmex,
  elo: EloLogo,
  discover: SiDiscover,
  diners: SiDinersclub,
  jcb: SiJcb,
  sodexo: SodexoLogo,
  vr: VrLogo,
  ticket_vr: TicketLogo,
  ticket_va: TicketLogo,
  alelo: AleloLogo,
  Unknown: "../assets/icons/unknown.svg",
};

export const ISSUER_COLORS: Record<Issuer, string> = {
  visa: "#1A428A", // Classic blue of Visa
  mastercard: "#EB001B", // Iconic red of Mastercard
  amex: "#016FD0", // Premium blue of Amex
  elo: "#1A428A", // Light blue for Elo (unchanged)
  discover: "#FF5F00", // Vibrant orange of Discover (unchanged)
  diners: "#004B8D", // Corporate blue of Diners
  jcb: "#009E60", // Distinctive green of JCB
  sodexo: "#FFB300", // Bright yellow for Sodexo
  vr: "#FF6F00", // Bright orange for VR
  ticket_vr: "#FF6F00", // Bright orange for Ticket VR
  ticket_va: "#FF6F00", // Bright orange for Ticket VA
  alelo: "#FF6F00", // Bright orange for Alelo
  Unknown: "#80868B", // Neutral gray with better contrast
};

export const ISSUER_BG_COLORS: Record<Issuer, string> = {
  visa: "#1A428A0f",
  mastercard: "#EB001B0f",
  amex: "#016FD00f",
  elo: "#1A428A0f", // Fundo azul claro para Elo
  discover: "#FF5F000f",
  diners: "#004B8D0f",
  jcb: "#009E600f",
  sodexo: "#FFB3000f", // Fundo amarelo claro para Sodexo
  vr: "#FF6F000f", // Fundo laranja claro para VR
  ticket_vr: "#FF6F000f", // Fundo laranja claro para Ticket
  ticket_va: "#FF6F000f", // Fundo laranja claro para Ticket VA
  alelo: "#FF6F000f", // Fundo laranja claro para Alelo
  Unknown: "#FFFFFF", // Fundo branco para o desconhecido
};
