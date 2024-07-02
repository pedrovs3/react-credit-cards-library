import { useState } from "react";
import "./App.css";
import { CreditCard } from "../..";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <CreditCard
        cvc="123"
        expiry="12/23"
        name="John Doe"
        number="1234 5678 9012 3456"
        focus="number"
        cardSizes={{
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
}

export default App;
