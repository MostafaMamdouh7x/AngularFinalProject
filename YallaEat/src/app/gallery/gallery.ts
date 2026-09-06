import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent {
  images = [
    {src: 'assets/gallery/1.jpg', category: 'meals'},
    {src: 'assets/gallery/2.jpg', category: 'meals'},
    {src: 'assets/gallery/3.jpg', category: 'meals'},
    {src: 'assets/gallery/48.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/5.jpg', category: 'meals'},
    {src: 'assets/gallery/6.jpg', category: 'meals'},
    {src: 'assets/gallery/7.jpg', category: 'meals'},
    {src: 'assets/gallery/8.jpg', category: 'meals'},
    {src: 'assets/gallery/9.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/10.jpg', category: 'meals'},
    {src: 'assets/gallery/11.jpg', category: 'meals'},
    {src: 'assets/gallery/12.jpg', category: 'meals'},
    {src: 'assets/gallery/13.jpg', category: 'meals'},
    {src: 'assets/gallery/14.jpg', category: 'meals'},
    {src: 'assets/gallery/15.jpg', category: 'meals'},
    {src: 'assets/gallery/16.jpg', category: 'meals'},
    {src: 'assets/gallery/17.jpg', category: 'meals'},
    {src: 'assets/gallery/18.jpg', category: 'meals'},
    {src: 'assets/gallery/19.jpg', category: 'meals'},
    {src: 'assets/gallery/20.jpg', category: 'meals'},
    {src: 'assets/gallery/21.jpg', category: 'desserts'},
    {src: 'assets/gallery/22.jpg', category: 'desserts'},
    {src: 'assets/gallery/23.jpg', category: 'desserts'},
    {src: 'assets/gallery/24.jpg', category: 'desserts'},
    {src: 'assets/gallery/25.jpg', category: 'desserts'},
    {src: 'assets/gallery/26.jpg', category: 'desserts'},
    {src: 'assets/gallery/27.jpg', category: 'desserts'},
    {src: 'assets/gallery/28.jpg', category: 'desserts'},
    {src: 'assets/gallery/29.jpg', category: 'desserts'},
    {src: 'assets/gallery/30.jpg', category: 'desserts'},
    {src: 'assets/gallery/31.jpg', category: 'desserts'},
    {src: 'assets/gallery/32.jpg', category: 'desserts'},
    {src: 'assets/gallery/33.jpg', category: 'desserts'},
    {src: 'assets/gallery/34.jpg', category: 'desserts'},
    {src: 'assets/gallery/35.jpg', category: 'desserts'},
    {src: 'assets/gallery/36.jpg', category: 'desserts'},
    {src: 'assets/gallery/41.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/42.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/43.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/44.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/45.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/46.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/47.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/49.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/40.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/37.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/38.jpg', category: 'atmosphere'},
    {src: 'assets/gallery/39.jpg', category: 'atmosphere'},
    

    
  ];

  selectedCategory = 'all';
  categories = ['all', 'meals', 'desserts', 'atmosphere'];

  filter(category: string) {
    this.selectedCategory = category;
  }

  get filteredImages() {
    if (this.selectedCategory === 'all') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }
}