# Ecommerce App

A small cart application built with React and Redux. This project demonstrates a simple product list, product cards, and a cart using modern React patterns: hooks (`useReducer`, `useSelector`, `useState`, `useMemo`), Context for app-level state, and a lightweight store structure.

## Key Features

- Product listing with cards and ratings
- Add / remove items to cart, quantity management
- Cart persisted in a simple store/context layer
- Uses React hooks: useReducer, useState, useSelector
- uses thunk to combine reducers

## Tech Stack

- React
- Vite (dev tooling)
- Yarn (package manager)
- JS, CSS modules / component styles

## Project Structure (important files)

- `src/Components/` — UI components (ProductCard, ProductList, Cart, etc.)
- `src/Pages/` — Page components (Products, Cart, NotFound)

## Getting Started (Yarn)

Install dependencies:

```zsh
yarn install
```

Run the development server (Vite):

```zsh
yarn dev
```

Build for production:

```zsh
yarn build
```

Preview the production build locally:

```zsh
yarn preview
```

If your `package.json` uses different script names (for example `start`), replace the command accordingly: `yarn start`.


## Contributing

- Add features or fix bugs via PRs.
- Keep changes small and focused; update `README.md` if you add new scripts or tooling.

## Troubleshooting

- If the dev server fails to start, make sure dependencies are installed and your Node version is compatible with Vite.
- Run `yarn install` again and check `package.json` scripts.

