# Codecademy Store: A React & Redux Example App

Welcome! This is a simple e-commerce storefront application built to demonstrate the fundamental concepts of React and Redux. It's a great project for anyone learning how to manage application state in a modern web app.

The app displays a list of store items, allows users to filter them by currency, search for specific items, and add them to a shopping cart.

## Key Concepts & Features

This project is a practical example of the following core principles.

### 1. React: Component-Based Architecture

The user interface is broken down into reusable components, each with a specific responsibility. The main components are:

-   **`App`**: The root component that assembles the entire application.
-   **`Inventory`**: Displays the grid of all available items for sale.
-   **`Cart`**: Shows the items that have been added to the shopping cart and calculates the total cost.
-   **`CurrencyFilter`**: Allows the user to change the currency in which prices are displayed.
-   **`SearchTerm`**: Provides an input field for users to search for items by name.

### 2. Redux: Centralized State Management

Instead of each component managing its own state, we use Redux to maintain a single, centralized **store** for the entire application. This makes the flow of data predictable and easier to debug.

-   **State**: The application's state is an object that holds all necessary data, such as the inventory list, the items in the cart, the current search term, and the selected currency.
-   **Actions**: When a user interacts with the app (like clicking "Add to Cart"), a component **dispatches** an action. An action is a plain object describing what happened.
-   **Reducers**: Actions are handled by reducers. A reducer is a pure function that takes the current state and an action, and returns the *new* state. It never modifies the original state directly.
-   **Unidirectional Data Flow**: The state flows down from the Redux store to the React components. Components receive data as props. To change the data, they dispatch actions back to the store, starting the cycle over again. This is visible in `App.tsx`, where the `state` is passed down to child components and the `dispatch` function is provided for them to request changes.

### 3. Styling and Layout

The project uses modern CSS for styling, including:

-   **CSS Grid**: The inventory items are arranged in a responsive grid layout. The `grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));` rule in `App.css` allows the grid to automatically adjust the number of columns based on the available screen width.
-   **Flexbox**: Used within components for alignment and spacing.
-   **Sticky Positioning**: The cart summary at the bottom of the page uses `position: sticky` to remain visible as the user scrolls.

## How to Run This Project

First, install the necessary dependencies:

```sh
npm install
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
