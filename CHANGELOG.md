# Changelog

## 0.3.0

### Minor Changes

- # Release v0.3.0

  ## 🎨 Premium Visual Redesign

  This release introduces a major visual overhaul for the `richColors` prop, transforming it into a full **Premium Dark Mode**:

  - **Gradient Backgrounds:** Deep, brand-specific gradients for all supported issuers (Visa, Mastercard, Amex, etc.) replacing flat colors.
  - **Metallic Chip:** New gold/silver metallic gradient chip icon.
  - **Glow Effects:** Subtle text shadows and colored box-shadow glows based on the card brand.
  - **Refined Typography:** Added `letter-spacing` and a premium monospace font stack for card numbers and names.
  - **Embedded Elements:** Magnetic stripe and signature strip now look embedded with semi-transparent styles.

  ## ✨ Improvements

  - **Smoother Animation:** Updated the flip animation to use a custom `cubic-bezier` curve for a more natural, physical feel.
  - **Modern React:** Removed legacy `React` namespace imports; fully adopted the modern JSX transform.
  - **Performance:** Optimized re-renders using strict `memo` and `useMemo` hooks throughout.

  ## 🐛 Bug Fixes

  - **React 19 Compatibility:** Fixed a TypeScript error (`MemoExoticComponent`) that caused issues in projects using strict React types or React 19 RC.
  - **SVG Attributes:** Fixed React console warnings regarding HTML-style attributes (`fill-rule` → `fillRule`).
  - **CSS Fixes:** Corrected invalid `fontWeight: "semibold"` values to numeric `600`.
  - **Asset Loading:** Fixed a crash where the "Unknown" issuer tried to load a non-existent logo.

  ## 🔧 Internal & Chore

  - Upgraded to **TypeScript 5**.
  - Upgraded build target to **ES2020**.
  - Updated dependencies: `react-icons`, `tsup`.
  - Improved type definitions in `dist/index.d.ts`.

  ***

  ### How to update

  ```bash
  npm install react-credit-cards-library@latest
  ```

## 0.2.2

### Patch Changes

- - docs: update peer dependencies to accept react 19

## 0.2.1

### Patch Changes

- feat: add new issuers
- feat: add svg for issuers
- chore: optimize card component

## 0.2.0

### Minor Changes

- change base of styling code
- organize flow of componente (props)

## [0.1.9] - 2024-09-20

### Added

- Add getCardIssuer function to handle issuers of card and validity card number
- New placeholder Intl for username field.

## [0.1.8] - 2024-08-20

### Added

- Memoized inline styles using `useMemo` for the `CardFront` and `CardBack` components, preventing unnecessary style object recreation on each render.
- Introduced memoization for SVG icons (e.g., `HiOutlineSignal`) in `CardBack` to optimize rendering performance.

### Changed

- Default prop handling for `issuer` in `CardBack` now defaults to `"Unknown"` to ensure more robust behavior and simplified logic.
- Enhanced TypeScript type safety by adding explicit type assertions (`as const`) and refining type definitions in the `CardFront` and `CardBack` components.

### Fixed

- Prevented unnecessary re-renders in `CardFront` and `CardBack` by memoizing formatted card data and rendering logic.
- Improved the overall maintainability and readability of the code by organizing and simplifying component logic.

### Performance

- Significant performance improvements by reducing unnecessary recalculations and re-renders, making components more efficient in high-frequency update scenarios.
