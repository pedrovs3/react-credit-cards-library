import "./App.css";
import { CreditCard, Focused } from "../..";
import { useState } from "react";

function App() {
  const [cardData, setCardData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
    focus: "",
  });

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          colorScheme: "dark",
        }}
      >
        <h1
          style={{
            marginBottom: "0rem",
            textShadow: "0 5px 10px #e6e6e6",
          }}
        >
          react-credit-cards-library
        </h1>
        <h3
          style={{
            marginTop: "0.1rem",
            marginBottom: "0.2rem",
            textShadow: "0 2px 5px #e6e6e6",
          }}
        >
          A simple credit card component for React
          <a
            href="https://www.npmjs.com/package/react-credit-cards-library?activeTab=readme"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "inherit",
              textDecoration: "none",
              fontSize: "0.8rem",
            }}
          >
            {" "}
            (npm)
          </a>
        </h3>

        <h2>Example form</h2>
        <form
          action=""
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <input
            type="text"
            name="number"
            id="number"
            placeholder="Card number"
            value={cardData.number}
            onChange={(e) =>
              setCardData({ ...cardData, number: e.target.value })
            }
            onFocus={() => {
              setCardData({ ...cardData, focus: "number" });
            }}
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={cardData.name}
            onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
            onFocus={() => {
              setCardData({ ...cardData, focus: "name" });
            }}
          />
          <input
            type="text"
            name="expiry"
            id="expiry"
            placeholder="Expiry"
            value={cardData.expiry}
            onChange={(e) =>
              setCardData({ ...cardData, expiry: e.target.value })
            }
            onFocus={() => {
              setCardData({ ...cardData, focus: "expiry" });
            }}
          />
          <input
            type="text"
            name="cvc"
            id="cvc"
            placeholder="CVC"
            value={cardData.cvc}
            onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
            onFocus={() => {
              setCardData({ ...cardData, focus: "cvc" });
            }}
          />
        </form>

        <CreditCard
          cvc={cardData.cvc}
          expiry={cardData.expiry}
          name={cardData.name}
          number={cardData.number}
          focus={cardData.focus as Focused}
        />
      </section>
      <code
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          border: "2px solid rgba(0, 0, 0, 0.07)",
          padding: "10px 20px",
          borderRadius: "0.5rem",
          fontSize: "0.8rem",
        }}
      >
        <pre
          style={{
            margin: 0,
            padding: 0,
            whiteSpace: "pre-wrap",
            textShadow: "0 1px 0 #fff",
          }}
        >
          npm install react-credit-cards-library
          <br />
          yarn add react-credit-cards-library
        </pre>
      </code>
    </>
  );
}

export default App;
