// Represents a single item in the cart
export interface CartItem {
  price: number;
  quantity: number;
}

// Represents the entire cart (object with item names as keys)
export type Cart = Record<string, CartItem>;

// Action object type for adding an item to cart
interface AddItemAction {
  type: 'cart/addItem';
  payload: { name: string; price: number };
}

// Action object type for changing item quantity
interface ChangeItemQuantityAction {
  type: 'cart/changeItemQuantity';
  payload: { name: string; newQuantity: number };
}

// Union type for all possible cart actions
type CartAction = AddItemAction | ChangeItemQuantityAction | { type: 'unknown' };

// Action creator that adds an item to the cart
export const addItem = (itemToAdd: { name: string; price: number }): AddItemAction => {
  return {
    type: 'cart/addItem',
    payload: itemToAdd,
  };
};

// Action creator that changes the quantity of an item in the cart
export const changeItemQuantity = (name: string, newQuantity: number): ChangeItemQuantityAction => {
  return {
    type: 'cart/changeItemQuantity',
    payload: { name, newQuantity }
  }
}

const initialCart: Cart = {};

// Reducer function that handles cart state changes
export const cartReducer = (cart: Cart = initialCart, action: CartAction): Cart => {
  switch (action.type) {
    case 'cart/addItem': {
      const { name, price } = action.payload;

      // if the item already exists, increase the quantity by 1, otherwise set it to 1
      const quantity = cart[name] ? cart[name].quantity + 1 : 1;
      const newItem = { price, quantity };

      // Add the new item to the cart (or replace it if it existed already)
      return { 
        ...cart, 
        [name]: newItem 
      };
    }
    case 'cart/changeItemQuantity': {
      const { name, newQuantity } = action.payload;
      const itemToUpdate = cart[name];

      // Create a copy of itemToUpdate and update the quantity prop.
      const updatedItem = {
        ...itemToUpdate,
        quantity: newQuantity
      }

      // Return a copy of the cart with the updatedItem included.
      return {
        ...cart, 
        [name]: updatedItem
      };
    }
    default: {
      return cart;
    }
  }
};