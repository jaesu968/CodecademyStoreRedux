import { createStore, combineReducers, Dispatch, AnyAction } from 'redux'; 

import { inventoryReducer } from '../features/inventory/inventorySlice'; 
import { cartReducer } from '../features/cart/cartSlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';

const rootReducer = combineReducers({
    searchTerm: searchTermReducer,
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch; 