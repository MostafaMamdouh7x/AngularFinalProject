import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartItem } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
    this.cartItems = this.cartService.getCart();
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCart();
  }

checkout(): void {
  if (this.cartItems.length === 0) {
    return;
  }

  alert(`Order placed successfully!\nTotal: ${this.getTotal()} EGP`);

  this.clearCart();
}

  getTotal(): number {
    return this.cartService.getTotal();
  }
  getCartCount(): number {
  return this.cartService.getCartCount();
}
}