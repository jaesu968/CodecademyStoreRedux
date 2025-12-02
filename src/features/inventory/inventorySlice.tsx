import { inventoryData } from '../../../data.tsx';

// Represents a single product in inventory
export interface InventoryItem {
  name: string;
  price: number;
  img: string;
}

// Action object type for loading inventory data
interface LoadDataAction {
  type: 'inventory/loadData';
  payload: InventoryItem[];
}

// Union type for all possible inventory actions
type InventoryAction = LoadDataAction | { type: 'unknown' };

// Action creator that returns an action to load inventory data
export const loadData = (data?: InventoryItem[]): LoadDataAction => {
  return {
    type: 'inventory/loadData',
    payload: inventoryData,
  };
};

const initialInventory: InventoryItem[] = [];

// Reducer function that handles inventory state changes
export const inventoryReducer = (inventory: InventoryItem[] = initialInventory, action: InventoryAction): InventoryItem[] => {
  switch (action.type) {
    case 'inventory/loadData': {
      return action.payload;
    }
    default: {
      return inventory;
    }
  }
};
