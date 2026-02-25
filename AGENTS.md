# AGENTS.md - Developer Guidelines for react-credit-cards-library

## Project Overview

A lightweight React component library for rendering credit card forms with dynamic card issuer detection, input formatting, and responsive design. Built with TypeScript 5, targeting ES2020, using the modern `react-jsx` transform.

## Build Commands

```bash
# Install dependencies
npm install

# Build the library (outputs to dist/)
npm run build

# Publish to npm (requires changesets)
npm run publish
```

**Note:** No test framework is currently configured. Do not add tests unless explicitly requested.

## Code Style Guidelines

### TypeScript

- Use `strict` mode (enabled in tsconfig.json)
- Target: `es2020`, module resolution: `bundler`, JSX: `react-jsx`
- Always define explicit types for function parameters and return values
- Use `interface` for component props; use `type` for unions, primitives, and utility types
- Use `type` imports (`import type { ... }`) when importing only types
- Use `as const` arrays to derive union types (see `src/types/issuers.ts`)
- Use `CSSProperties` from React for inline style objects

### React Patterns

- Do NOT use `React.FC` -- use plain function components with typed props
- Do NOT import the `React` namespace unless needed (JSX transform handles it)
- Import hooks and utilities directly: `import { memo, useMemo } from "react"`
- Use `useMemo` for expensive calculations, derived values, and style objects
- Use `memo()` (not `React.memo`) for component memoization
- Destructure props with default values in component parameters
- Use `IntlProvider` from `react-intl` for internationalization

### Imports

```typescript
// React hooks/utilities (no React namespace import needed)
import { type CSSProperties, memo, useMemo } from "react";

// External libraries
import { IntlProvider } from "react-intl";

// Internal types (use type-only imports)
import type { Issuer } from "../types/issuers";

// Internal modules
import { getCardIssuer } from "../utils/get-card-issuer";
import CardBack from "./CardBack";
```

- Group imports: React internals -> external libs -> internal types -> internal modules
- Use `import type` for type-only imports
- Use named exports; use default exports only for components

### Naming Conventions

- **Components**: PascalCase (e.g., `CreditCard`, `CardFront`)
- **Utils/Formatters**: camelCase (e.g., `formatCardNumber`, `getCardIssuer`)
- **Types/Interfaces**: PascalCase (e.g., `Issuer`, `CreditCardProps`)
- **Constants**: UPPER_SNAKE_CASE for static configs (e.g., `ISSUER_COLORS`)
- **Files**: PascalCase for components (e.g., `CardFront.tsx`), kebab-case for utils (e.g., `get-card-issuer.ts`)

### Component Structure

```typescript
import { type CSSProperties, memo, useMemo } from "react";
import type { SomeType } from "../types/some-type";
import { someUtil } from "../utils/some-util";

interface ComponentNameProps {
  requiredProp: string;
  optionalProp?: boolean;
}

const ComponentName = ({
  requiredProp,
  optionalProp = false,
}: ComponentNameProps) => {
  const derivedValue = useMemo(() => computeValue(requiredProp), [requiredProp]);

  const containerStyle = useMemo<CSSProperties>(() => ({
    display: "flex",
  }), []);

  return (
    <div style={containerStyle}>
      {/* JSX */}
    </div>
  );
};

export default memo(ComponentName);
```

### Error Handling

- Return safe default values rather than throwing errors
- Validate inputs at function entry points
- Use union types for exhaustive checking

```typescript
export function getCardIssuer(cardNumber: string): Issuer {
  if (!cardNumber || typeof cardNumber !== "string") {
    return "Unknown";
  }
  // ...
}
```

### Inline Styles

- Use `useMemo<CSSProperties>` for style objects
- Use numeric values for `fontWeight` (e.g., `600` not `"semibold"`)
- Use string values for dimension CSS properties (e.g., `"1rem"`)

### SVG Components

- Always use React camelCase SVG attributes: `fillRule`, `clipRule`, `clipPath`
- Never use HTML-style attributes: ~~`fill-rule`~~, ~~`clip-rule`~~, ~~`clip-path`~~
- Icon components do not need to import `React` (automatic JSX transform)

### Internationalization

- Use `react-intl` with `FormattedMessage` for user-facing strings
- Define locale messages in `src/lib/intl.ts`
- Supported locales: `"en" | "pt-BR" | "es"`

### Types (src/types/issuers.ts)

Types are derived from const arrays for runtime + compile-time safety:

```typescript
export const ISSUERS = ["visa", "mastercard", ...] as const;
export type Issuer = (typeof ISSUERS)[number];

export const FOCUSED_FIELDS = ["number", "name", "expiry", "cvc", ""] as const;
export type Focused = (typeof FOCUSED_FIELDS)[number];
```

## File Organization

```
src/
├── assets/icons/       # SVG icon components (one per card brand)
├── components/         # React components (CreditCard, CardFront, CardBack)
├── lib/                # Internationalization messages
├── types/              # TypeScript type definitions (Issuer, Focused)
├── utils/              # Utility functions (formatters, issuer detection, issuer config)
└── index.tsx           # Public API barrel exports
```

## What NOT To Do

- Do not add ESLint/Prettier unless explicitly requested
- Do not add test files or test frameworks
- Do not change the build tool (tsup)
- Do not modify the package.json scripts
- Do not import the `React` namespace -- use direct imports from "react"
- Do not use `React.FC` for component typing
- Do not use HTML-cased SVG attributes (e.g., `fill-rule`)
- Avoid adding new dependencies without consultation
