import { Injectable } from '@angular/core';
import { Product, CartItem } from '../models/product';

@Injectable({
providedIn: 'root'
})
export class CartService {

private cart: CartItem[] = [];

constructor() {
this.loadCart();
}

getCart(): CartItem[] {
return this.cart;
}

addToCart(product: Product): void {

       
const existingItem = this.cart.find(
  item => item.product.id === product.id
);

if (existingItem) {
  existingItem.quantity++;
} else {
  this.cart.push({
    product: product,
    quantity: 1
  });
}

this.saveCart();
       

}

removeFromCart(productId: number): void {

       
this.cart = this.cart.filter(
  item => item.product.id !== productId
);

this.saveCart();
       

}

updateQuantity(
productId: number,
quantity: number
): void {

       
const item = this.cart.find(
  item => item.product.id === productId
);

if (!item) {
  return;
}

if (quantity <= 0) {
  this.removeFromCart(productId);
  return;
}

item.quantity = quantity;

this.saveCart();
       

}

getTotal(): number {

       
return this.cart.reduce(
  (total, item) =>
    total + item.product.price * item.quantity,
  0
);
       

}

getCartCount(): number {

       
return this.cart.reduce(
  (count, item) =>
    count + item.quantity,
  0
);
       

}

clearCart(): void {

       
this.cart = [];

this.saveCart();
       

}

private saveCart(): void {

       
localStorage.setItem(
  'yallaEatCart',
  JSON.stringify(this.cart)
);
       

}

private loadCart(): void {

       
const savedCart =
  localStorage.getItem('yallaEatCart');

if (!savedCart) {
  return;
}

try {
  this.cart = JSON.parse(savedCart);
} catch {
  this.cart = [];
  localStorage.removeItem('yallaEatCart');
}
       

}
}
