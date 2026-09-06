import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // ضيفنا دول

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // وضيفنا دول هنا
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'YallaEat';
}