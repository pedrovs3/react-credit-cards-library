# Changelog

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
