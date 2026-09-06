import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Booking } from './components/booking/booking';
import { Checkout } from './components/checkout/checkout';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'YallaEat';
}