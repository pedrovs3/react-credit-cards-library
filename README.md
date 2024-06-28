# React Credit Cards Library

[![npm version](https://badge.fury.io/js/react-credit-cards-library.svg)](https://badge.fury.io/js/react-credit-card-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A React library for displaying credit card components with flip animations, issuer recognition, and customizable appearance.

## Installation

Install the library using npm:

```bash
npm install react-credit-cards-library
```

## Usage

Here's an example of how to use the `CreditCard` component in your project:

```tsx
import React from "react";
import { CreditCard } from "react-credit-cards-library";

const App: React.FC = () => {
  const [cardData, setCardData] = React.useState<{
    number: string;
    name?: string;
    expiry: string;
    cvc: string;
    focus: "" | "number" | "name" | "expiry" | "cvc";
  }>({
    number: "",
    name: undefined,
    expiry: "",
    cvc: "",
    focus: "",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        height: "100vh",
      }}
    >
      <CreditCard
        number={cardData.number}
        name={cardData.name || ""}
        expiry={cardData.expiry}
        cvc={cardData.cvc}
        focus={cardData.focus}
      />

      <div>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={cardData.number}
          onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
          onFocus={() => setCardData({ ...cardData, focus: "number" })}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={cardData.name}
          onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
          onFocus={() => setCardData({ ...cardData, focus: "name" })}
        />

        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={cardData.expiry}
          onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
          onFocus={() => setCardData({ ...cardData, focus: "expiry" })}
        />

        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={cardData.cvc}
          onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
          onFocus={() => setCardData({ ...cardData, focus: "cvc" })}
        />

        <button onClick={() => setCardData({ ...cardData, focus: "" })}>
          Focus None
        </button>
      </div>
    </div>
  );
};

export default App;
```

## Props

The `CreditCard` component accepts the following props:

| Prop        | Type                       | Description                                  |
|-------------|----------------------------|----------------------------------------------|
| `number`    | `string`                   | Credit card number                           |
| `name`      | `string`                   | Cardholder's name                            |
| `expiry`    | `string`                   | Expiry date                                  |
| `cvc`       | `string`                   | CVC code                                     |
| `focus`     | `string`                   | Field to focus on (`number`, `name`, `expiry`, `cvc`) |
| `customStyle` | `React.CSSProperties`    | Custom styles for the card component         |

## Development

To develop and build the library locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/pedrovs3/react-credit-card-library.git
    cd react-credit-card-library
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Build the library:
    ```bash
    npm run build
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, improvements, or new features.

## Author

**Pedro Silva**
- [GitHub](https://github.com/pedrovs3)
- [LinkedIn](https://www.linkedin.com/in/pedrovs3)