
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { CategoryFilter } from '../../components/category-filter/category-filter';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
 imports: [ProductCard, CategoryFilter, RouterLink, FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
  
})
export class Menu {

  categories = [
    'All',
    'Main Dishes',
    'Appetizers',
    'Desserts',
    'Drinks'
  ];

  selectedCategory = 'All';
  searchTerm = '';

  products: Product[] = [
    {
      id: 1,
      name: 'Grilled Steak',
      description: 'Tender grilled steak served with roasted vegetables.',
      price: 550,
      category: 'Main Dishes',
      image: 'images/steak.jpg'
    },
    {
      id: 2,
      name: 'Grilled Salmon',
      description: 'Fresh salmon grilled with lemon and herbs.',
      price: 420,
      category: 'Main Dishes',
      image: 'images/salmon.jpg'
    },
    {
      id: 3,
      name: 'Chicken Alfredo',
      description: 'Creamy Alfredo pasta with grilled chicken breast.',
      price: 320,
      category: 'Main Dishes',
      image: 'images/chicken-alfredo.jpg'
    },
    {
      id: 4,
      name: 'Truffle Pasta',
      description: 'Italian pasta served with creamy truffle sauce.',
      price: 380,
      category: 'Main Dishes',
      image: 'images/truffle-pasta.jpg'
    },
    {
      id: 5,
      name: 'Caesar Salad',
      description: 'Fresh lettuce, parmesan cheese and Caesar dressing.',
      price: 180,
      category: 'Appetizers',
      image: 'images/caesar-salad.jpg'
    },
    {
      id: 6,
      name: 'Crispy Chicken Wings',
      description: 'Crispy chicken wings served with our special sauce.',
      price: 220,
      category: 'Appetizers',
      image: 'images/wings.jpg'
    },
    {
      id: 7,
      name: 'Garlic Bread',
      description: 'Fresh toasted bread with garlic and herbs.',
      price: 100,
      category: 'Appetizers',
      image: 'images/garlic-bread.jpg'
    },
    {
      id: 8,
      name: 'Mozzarella Sticks',
      description: 'Golden crispy mozzarella served with tomato sauce.',
      price: 150,
      category: 'Appetizers',
      image: 'images/mozzarella.jpg'
    },
    {
      id: 9,
      name: 'Molten Chocolate Cake',
      description: 'Warm chocolate cake with a rich chocolate center.',
      price: 250,
      category: 'Desserts',
      image: 'images/molten-cake.jpg'
    },
    {
      id: 10,
      name: 'Classic Cheesecake',
      description: 'Creamy cheesecake served with fresh berries.',
      price: 220,
      category: 'Desserts',
      image: 'images/cheesecake.jpg'
    },
    {
      id: 11,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee and mascarpone.',
      price: 200,
      category: 'Desserts',
      image: 'images/tiramisu.jpg'
    },
    {
      id: 12,
      name: 'Ice Cream',
      description: 'Three scoops of your favorite ice cream.',
      price: 130,
      category: 'Desserts',
      image: 'images/ice-cream.jpg'
    },
    {
      id: 13,
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice served chilled.',
      price: 100,
      category: 'Drinks',
      image: 'images/orange-juice.jpg'
    },
    {
      id: 14,
      name: 'Strawberry Mojito',
      description: 'Refreshing strawberry drink with mint and lime.',
      price: 140,
      category: 'Drinks',
      image: 'images/strawberry-mojito.jpg'
    },
    {
      id: 15,
      name: 'Iced Coffee',
      description: 'Cold creamy coffee served over ice.',
      price: 130,
      category: 'Drinks',
      image: 'images/iced-coffee.jpg'
    },
    {
      id: 16,
      name: 'Fresh Lemonade',
      description: 'Fresh lemon juice with mint and a touch of sweetness.',
      price: 90,
      category: 'Drinks',
      image: 'images/lemonade.jpg'
    }
  ];

 get filteredProducts(): Product[] {
  return this.products.filter(product => {

    const matchesCategory =
      this.selectedCategory === 'All' ||
      product.category === this.selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(
        this.searchTerm.toLowerCase()
      );

    return matchesCategory && matchesSearch;
  });
}


  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}