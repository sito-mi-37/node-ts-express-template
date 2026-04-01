"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = require("../cart");
it("calculate cart total", () => {
    const cart = [
        { id: 1, name: "Laptop", price: 1200, quantity: 1 },
        { id: 2, name: "Mouse", price: 50, quantity: 2 },
        { id: 3, name: "Keyboard", price: 100, quantity: 1 },
    ];
    const totalPrice = (0, cart_1.calculateTotalPrice)(cart);
    expect(totalPrice).toBe(1400);
});
