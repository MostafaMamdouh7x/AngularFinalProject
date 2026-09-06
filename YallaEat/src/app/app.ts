import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// الاستيراد بالأسماء البسيطة للمكونات زي ما هي عندك
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { WhyUs } from './components/why-us/why-us';
import { Reviews } from './components/reviews/reviews';
import { Footer } from './components/footer/footer';
import { AiChat } from './components/ai-chat/ai-chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    About,
    WhyUs,
    Reviews,
    Footer,
    AiChat
  ],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('YallaEat');
}