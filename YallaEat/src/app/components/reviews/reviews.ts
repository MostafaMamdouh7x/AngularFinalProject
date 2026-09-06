import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews implements OnInit, OnDestroy {

  currentReview = 0;

  reviews = [
    {
      text: 'The best burgers I have ever had! Delivery was super fast and the food was hot.',
      name: 'Ahmed Hassan',
      location: 'Cairo, Egypt',
      avatar: 'A'
    },
    {
      text: 'Amazing pizza and great service. YallaEat is definitely my go-to place!',
      name: 'Sara Mahmoud',
      location: 'Giza, Egypt',
      avatar: 'S'
    },
    {
      text: 'Fresh, delicious, and always on time. Highly recommended!',
      name: 'Mohamed Ali',
      location: 'Alexandria, Egypt',
      avatar: 'M'
    }
  ];

  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextReview();
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextReview() {
    this.currentReview =
      (this.currentReview + 1) % this.reviews.length;
  }

  prevReview() {
    this.currentReview =
      (this.currentReview - 1 + this.reviews.length) % this.reviews.length;
  }

  goToReview(index: number) {
    this.currentReview = index;
  }
}