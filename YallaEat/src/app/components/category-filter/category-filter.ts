import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css'
})
export class CategoryFilter {

  @Input() categories: string[] = [];
  @Input() selectedCategory = 'All';

  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string): void {
    this.categorySelected.emit(category);
  }
}