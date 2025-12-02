import React, { useEffect, FC } from 'react';
import { Dispatch } from 'redux';

import {
  calculatePrice,
  getCurrencySymbol,
} from '../../app/utilities/utilities';
import { addItem } from '../cart/cartSlice';
import { loadData } from './inventorySlice';
import type { InventoryItem } from './inventorySlice';

// Props interface for the Inventory component
interface InventoryProps {
  inventory: InventoryItem[];
  currencyFilter: string;
  dispatch: Dispatch;
  searchTerm: string;
}

// Inventory component that displays products and allows adding to cart
export const Inventory: FC<InventoryProps> = ({ inventory, currencyFilter, dispatch, searchTerm }) => {
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]);

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  };

  if (inventory.length === 0) {
    return <p> Sorry, no products are currently available... </p>;
  }

  function getFilteredItems(items, searchTerm) {
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  } 
  const filteredItems = getFilteredItems(inventory, searchTerm);

  return <ul id="inventory-container">{filteredItems.map(createInventoryItem)}</ul>;



  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem;
    const displayPrice = calculatePrice(price, currencyFilter);
    

  
    return (
      <li key={name} className="item">
        <img src={img} alt={''} />
        <h3>{name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
    );
  }
};
