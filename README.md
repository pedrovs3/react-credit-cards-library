![image](https://github.com/pedrovs3/react-credit-cards-library/assets/86010036/c6921809-e172-4faa-b205-d7fbb117a12e)
![image](https://github.com/pedrovs3/react-credit-cards-library/assets/86010036/d8e18ce0-8a18-473e-9ee9-18660564b6ed)


# React Credit Cards Library

[![npm version](https://badge.fury.io/js/react-credit-cards-library.svg)](https://badge.fury.io/js/react-credit-cards-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, lightweight React library for displaying credit card components with flip animations, automatic issuer recognition, and a premium visual design.

## Features

- **Premium Visuals**: Includes a stunning "dark mode" with rich gradients and metallic chip effects.
- **Responsive**: Fully responsive with customizable size constraints.
- **Flip Animation**: Smooth 3D flip animation to show the CVC on the back.
- **Issuer Detection**: Automatically detects and displays logos for major card issuers.
- **TypeScript**: Built with modern TypeScript 5 for robust type safety.
- **Zero CSS Import**: All styles are inline/JS-based, so no need to import extra CSS files.

## Installation

Install the library using npm:

```bash
npm install react-credit-cards-library
```

## Usage

Here's a modern example of how to use the `CreditCard` component:

```tsx
import { useState } from "react";
import { CreditCard, type Focused } from "react-credit-cards-library";

const App = () => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "" as Focused,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
      <CreditCard
        number={cardData.number}
        name={cardData.name}
        expiry={cardData.expiry}
        cvc={cardData.cvc}
        focus={cardData.focus}
        richColors={true} // Enable the premium dark gradient look
      />

      <form>
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
          placeholder="MM/YY"
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
      </form>
    </div>
  );
};

export default App;
```

## Props

The `CreditCard` component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `number` | `string` | **Required** | The credit card number. |
| `name` | `string` | **Required** | The cardholder's name. |
| `expiry` | `string` | **Required** | The expiry date (e.g. "12/25"). |
| `cvc` | `string` | **Required** | The CVC/CVV code. |
| `focus` | `Focused` | **Required** | The field currently focused (`"number"`, `"name"`, `"expiry"`, `"cvc"`, or `""`). |
| `richColors` | `boolean` | `false` | Enables the premium dark gradient theme. |
| `locale` | `"en" \| "pt-BR" \| "es"` | `"en"` | Language for static text ("VALID THRU"). |
| `cardSizes` | `CardSizes` | *See below* | Custom dimensions for the card. |

### CardSizes Type

Use the `cardSizes` prop to override default dimensions:

```typescript
interface CardSizes {
  width?: string;     // Default: "320px"
  height?: string;    // Default: "180px"
  maxWidth?: string;  // Default: "100%"
  maxHeight?: string; // Default: undefined
}
```

## Supported Issuers

The library automatically detects the following card brands:

- Visa
- Mastercard
- American Express (Amex)
- Diners Club
- Discover
- JCB
- Elo
- Alelo
- Sodexo
- VR
- Ticket (Restaurante/Alimentação)

## Development

To develop and build the library locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/pedrovs3/react-credit-card-library.git
    cd react-credit-cards-library
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
