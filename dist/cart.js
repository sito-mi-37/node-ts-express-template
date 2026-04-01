"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalPrice = void 0;
const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
};
exports.calculateTotalPrice = calculateTotalPrice;
