// Converts a price from USD to another currency
export function calculatePrice(price: number, currency: string): number {
  switch (currency) {
    case 'EUR':
      return price * 0.86;
    case 'CAD':
      return price * 1.33;
    default:
      return price;
  }
}

// Calculates the total price of all items in the cart, then converts to selected currency
export function calculateTotal(cart: Record<string, { price: number; quantity: number }>, currency: string): string {
  let totalUSD = 0;
  Object.keys(cart).forEach((itemName) => {
    totalUSD += cart[itemName].price * cart[itemName].quantity;
  });
  return calculatePrice(totalUSD, currency).toFixed(2);
}

// Returns the currency symbol for the given currency code
export function getCurrencySymbol(currencyFilter: string): string {
  switch (currencyFilter) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'CAD':
      return '$';
    default:
      return '';
  }
}
