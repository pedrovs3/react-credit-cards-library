import React from "react";

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
        border: "2px solid #e6e6e6",
        transform: "rotateY(180deg)",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "#000",
          textShadow: "0 1px 0 #ccc",
          padding: "10px",
          width: "100%",
          borderTop: "2px solid #e6e6e6",
          borderBottom: "2px solid #e6e6e6",
          textAlign: "end",
          marginTop: "40px",
        }}
      >
        {cvc}
      </div>
    </div>
  );
};

export default CardBack;
