import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Booking } from './components/booking/booking';
import { Checkout } from './components/checkout/checkout';
import { Menu } from "./pages/menu/menu";
import { Cart } from './pages/cart/cart';
import { ProductDetails } from './pages/product-details/product-details';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Menu,Checkout,Cart,ProductDetails],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'YallaEat';
}