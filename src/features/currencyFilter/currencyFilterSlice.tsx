// Action object type for setting currency
interface SetCurrencyAction {
  type: 'currencyFilter/setCurrency';
  payload: string;
}

// Union type for all possible currency filter actions
type CurrencyFilterAction = SetCurrencyAction | { type: 'unknown' };

const initialCurrencyFilter = 'USD';

// Reducer function that handles currency changes
export const currencyFilterReducer = (
  currencyFilter: string = initialCurrencyFilter,
  action: CurrencyFilterAction
): string => {
  switch (action.type) {
    case 'currencyFilter/setCurrency': {
      return action.payload;
    }
    default: {
      return currencyFilter;
    }
  }
};

// Action creator that returns an action to change the currency
export const setCurrency = (currency: string): SetCurrencyAction => {
  return {
    type: 'currencyFilter/setCurrency',
    payload: currency,
  };
};
