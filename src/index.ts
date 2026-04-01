import { calculateTotalPrice, Product } from "./cart";

const cart: Product[] = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 2 },
  { id: 3, name: "Keyboard", price: 100, quantity: 1 },
];

console.log("Total Price: ", calculateTotalPrice(cart));
