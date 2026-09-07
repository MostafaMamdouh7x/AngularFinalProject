import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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

constructor(
private cartService: CartService,
private router: Router
) {
this.loadCart();
}

loadCart(): void {
this.cartItems = this.cartService.getCart();
}

updateQuantity(productId: number, quantity: number): void {
this.cartService.updateQuantity(productId, quantity);
this.loadCart();
}

removeItem(productId: number): void {
this.cartService.removeFromCart(productId);
this.loadCart();
}

clearCart(): void {
this.cartService.clearCart();
this.loadCart();
}

proceedToCheckout(): void {
if (this.cartItems.length === 0) {
return;
}


this.router.navigate(['/checkout']);


}

getTotal(): number {
return this.cartService.getTotal();
}

getCartCount(): number {
return this.cartService.getCartCount();
}
}
