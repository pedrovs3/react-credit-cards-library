import type { ComponentType } from "react";
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
} from "../assets/icons";
import type { Issuer } from "../types/issuers";

type LogoEntry = ComponentType<{ size?: number; color?: string }> | null;

export const ISSUERS_LOGOS: Record<Issuer, LogoEntry> = {
  visa: SiVisa,
  mastercard: SiMastercard,
  amex: FaCcAmex,
  elo: EloLogo as unknown as LogoEntry,
  discover: SiDiscover,
  diners: SiDinersclub,
  jcb: SiJcb,
  sodexo: SodexoLogo as unknown as LogoEntry,
  vr: VrLogo as unknown as LogoEntry,
  ticket_vr: TicketLogo as unknown as LogoEntry,
  ticket_va: TicketLogo as unknown as LogoEntry,
  alelo: AleloLogo as unknown as LogoEntry,
  Unknown: null,
};

/** Primary brand accent color per issuer */
export const ISSUER_COLORS: Record<Issuer, string> = {
  visa: "#1A428A",
  mastercard: "#EB001B",
  amex: "#016FD0",
  elo: "#1A428A",
  discover: "#FF6F00",
  diners: "#004B8D",
  jcb: "#009E60",
  sodexo: "#FFB300",
  vr: "#FF6F00",
  ticket_vr: "#FF6F00",
  ticket_va: "#FF6F00",
  alelo: "#FF6F00",
  Unknown: "#80868B",
};

/** Dark gradient backgrounds for richColors mode */
export const ISSUER_GRADIENTS: Record<Issuer, string> = {
  visa: "linear-gradient(135deg, #0f2044 0%, #1a3a6e 40%, #264d8e 100%)",
  mastercard: "linear-gradient(135deg, #1a0a0e 0%, #5c1520 40%, #8b1a2b 100%)",
  amex: "linear-gradient(135deg, #041e3a 0%, #0a3d6b 40%, #106eb5 100%)",
  elo: "linear-gradient(135deg, #0f1b2e 0%, #1a3461 40%, #1f4b8e 100%)",
  discover: "linear-gradient(135deg, #1a1008 0%, #4d2e0f 40%, #8b5418 100%)",
  diners: "linear-gradient(135deg, #051a30 0%, #0b3460 40%, #15508e 100%)",
  jcb: "linear-gradient(135deg, #041a12 0%, #0d3d2a 40%, #157a4e 100%)",
  sodexo: "linear-gradient(135deg, #1a1400 0%, #4d3d00 40%, #8b6d00 100%)",
  vr: "linear-gradient(135deg, #1a1008 0%, #4d2e0f 40%, #8b5418 100%)",
  ticket_vr: "linear-gradient(135deg, #1a1008 0%, #4d2e0f 40%, #8b5418 100%)",
  ticket_va: "linear-gradient(135deg, #1a1008 0%, #4d2e0f 40%, #8b5418 100%)",
  alelo: "linear-gradient(135deg, #1a1008 0%, #4d2e0f 40%, #8b5418 100%)",
  Unknown: "linear-gradient(135deg, #1a1d21 0%, #2d3238 40%, #3d4450 100%)",
};

/** Subtle shadow glow matching issuer color for richColors mode */
export const ISSUER_SHADOWS: Record<Issuer, string> = {
  visa: "0 8px 32px rgba(26, 66, 138, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)",
  mastercard: "0 8px 32px rgba(235, 0, 27, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
  amex: "0 8px 32px rgba(1, 111, 208, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)",
  elo: "0 8px 32px rgba(26, 66, 138, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)",
  discover: "0 8px 32px rgba(255, 111, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
  diners: "0 8px 32px rgba(0, 75, 141, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)",
  jcb: "0 8px 32px rgba(0, 158, 96, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
  sodexo: "0 8px 32px rgba(255, 179, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
  vr: "0 8px 32px rgba(255, 111, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
  ticket_vr: "0 8px 32px rgba(255, 111, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
  ticket_va: "0 8px 32px rgba(255, 111, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
  alelo: "0 8px 32px rgba(255, 111, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
  Unknown: "0 8px 32px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)",
};

// Kept for backward compatibility
export const ISSUER_BG_COLORS: Record<Issuer, string> = {
  visa: "#1A428A0f",
  mastercard: "#EB001B0f",
  amex: "#016FD00f",
  elo: "#1A428A0f",
  discover: "#FF5F000f",
  diners: "#004B8D0f",
  jcb: "#009E600f",
  sodexo: "#FFB3000f",
  vr: "#FF6F000f",
  ticket_vr: "#FF6F000f",
  ticket_va: "#FF6F000f",
  alelo: "#FF6F000f",
  Unknown: "#FFFFFF",
};
