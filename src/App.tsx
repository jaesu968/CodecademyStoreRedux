import React from 'react';

import { Inventory } from './features/inventory/Inventory';
import { CurrencyFilter } from './features/currencyFilter/CurrencyFilter';
import { Cart } from './features/cart/Cart';

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

    </div>
  );
};
