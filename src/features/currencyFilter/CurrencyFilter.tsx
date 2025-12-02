import React, { FC } from 'react';
import { Dispatch } from 'redux';

import { currenciesData } from '../../../data';
import { setCurrency } from './currencyFilterSlice';

// Props interface for the CurrencyFilter component
interface CurrencyFilterProps {
  currencyFilter: string;
  dispatch: Dispatch;
}

// CurrencyFilter component that allows users to select a currency
export const CurrencyFilter: FC<CurrencyFilterProps> = ({ currencyFilter, dispatch }) => {
  const onClickHandler = (currency) => {
    dispatch(setCurrency(currency));
  };

  return (
    <div id="currency-filters-container">
      <h3>Choose a currency</h3>
      {currenciesData.map(createCurrencyButton)}
    </div>
  );

  function createCurrencyButton(currency) {
    return (
      <button
        className={`currency-button ${
          currencyFilter === currency && 'selected'
        }`}
        key={currency}
        onClick={() => onClickHandler(currency)}
      >
        {currency}
      </button>
    );
  }
};
