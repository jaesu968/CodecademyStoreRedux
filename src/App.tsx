import React from 'react';
import { Dispatch } from 'redux';
import './App.css';

import { Inventory } from './features/inventory/Inventory';
import { CurrencyFilter } from './features/currencyFilter/CurrencyFilter';
import { Cart } from './features/cart/Cart';
import { SearchTerm } from './features/searchTerm/SearchTerm';
import type { RootState } from './app/store';

// Props interface for the App component
interface AppProps {
  state: RootState;
  dispatch: Dispatch;
}

// Main App component that renders all feature components
export const App = (props: AppProps) => {

  const { state, dispatch } = props;

  return (
    <div id="app">
      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
        searchTerm={state.searchTerm}
      />
      <Cart 
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

    </div>
  );
};
