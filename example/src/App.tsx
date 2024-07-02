import { useState } from "react";
import "./App.css";
import { CreditCard } from "../..";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        width: "fit-content",
      }}
    >
      <h1>Vite + React</h1>
      <CreditCard
        cvc="123"
        expiry="12/23"
        name="John Doe"
        number="1234 5678 9012 3456"
        focus="cvc"
      />
    </section>
  );
}

export default App;
