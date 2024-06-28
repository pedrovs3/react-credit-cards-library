import React from "react";
import { formatCardCvc } from "../utils/formatters";
import { HiOutlineSignal } from "react-icons/hi2";

interface CardBackProps {
  cvc: string;
}

const CardBack: React.FC<CardBackProps> = ({ cvc }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        backgroundColor: "#FFF",
        color: "#000",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transform: "rotateY(180deg)",
        border: "2px solid #e6e6e6",
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "#000",
          textShadow: "0 1px 0 #ccc",
          padding: "10px 20px",
          width: "100%",
          borderTop: "2px solid #e6e6e6",
          borderBottom: "2px solid #e6e6e6",
          textAlign: "end",
          marginTop: "40px",
        }}
      >
        {formatCardCvc(cvc) || "•••"}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          padding: "10px",
          width: "100%",
          height: "100%",
        }}
      >
        <HiOutlineSignal size={32} color="#808080" />
      </div>
    </div>
  );
};

export default CardBack;
