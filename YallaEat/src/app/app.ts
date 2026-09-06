import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Booking } from './components/booking/booking';
import { Checkout } from './components/checkout/checkout';

@Component({
  imports: [Checkout,Booking],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('YallaEat');
}
