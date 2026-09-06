import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  product: Product | undefined;

  products: Product[] = [
    {
      id: 1,
      name: 'Grilled Steak',
      description: 'Tender grilled steak served with roasted vegetables.',
      price: 550,
      category: 'Main Dishes',
      image: 'assets/images/steak.jpg'
    },
    {
      id: 2,
      name: 'Grilled Salmon',
      description: 'Fresh salmon grilled with lemon and herbs.',
      price: 420,
      category: 'Main Dishes',
      image: 'assets/images/salmon.jpg'
    },
    {
      id: 3,
      name: 'Chicken Alfredo',
      description: 'Creamy Alfredo pasta with grilled chicken breast.',
      price: 320,
      category: 'Main Dishes',
      image: 'assets/images/chicken-alfredo.jpg'
    },
    {
      id: 4,
      name: 'Truffle Pasta',
      description: 'Italian pasta served with creamy truffle sauce.',
      price: 380,
      category: 'Main Dishes',
      image: 'assets/images/truffle-pasta.jpg'
    },
    {
      id: 5,
      name: 'Caesar Salad',
      description: 'Fresh lettuce, parmesan cheese and Caesar dressing.',
      price: 180,
      category: 'Appetizers',
      image: 'assets/images/caesar-salad.jpg'
    },
    {
      id: 6,
      name: 'Crispy Chicken Wings',
      description: 'Crispy chicken wings served with our special sauce.',
      price: 220,
      category: 'Appetizers',
      image: 'assets/images/wings.jpg'
    },
    {
      id: 7,
      name: 'Garlic Bread',
      description: 'Fresh toasted bread with garlic and herbs.',
      price: 100,
      category: 'Appetizers',
      image: 'assets/images/garlic-bread.jpg'
    },
    {
      id: 8,
      name: 'Mozzarella Sticks',
      description: 'Golden crispy mozzarella served with tomato sauce.',
      price: 150,
      category: 'Appetizers',
      image: 'assets/images/mozzarella.jpg'
    },
    {
      id: 9,
      name: 'Molten Chocolate Cake',
      description: 'Warm chocolate cake with a rich chocolate center.',
      price: 250,
      category: 'Desserts',
      image: 'assets/images/molten-cake.jpg'
    },
    {
      id: 10,
      name: 'Classic Cheesecake',
      description: 'Creamy cheesecake served with fresh berries.',
      price: 220,
      category: 'Desserts',
      image: 'assets/images/cheesecake.jpg'
    },
    {
      id: 11,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee and mascarpone.',
      price: 200,
      category: 'Desserts',
      image: 'assets/images/tiramisu.jpg'
    },
    {
      id: 12,
      name: 'Ice Cream',
      description: 'Three scoops of your favorite ice cream.',
      price: 130,
      category: 'Desserts',
      image: 'assets/images/ice-cream.jpg'
    },
    {
      id: 13,
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice served chilled.',
      price: 100,
      category: 'Drinks',
      image: 'assets/images/orange-juice.jpg'
    },
    {
      id: 14,
      name: 'Strawberry Mojito',
      description: 'Refreshing strawberry drink with mint and lime.',
      price: 140,
      category: 'Drinks',
      image: 'assets/images/strawberry-mojito.jpg'
    },
    {
      id: 15,
      name: 'Iced Coffee',
      description: 'Cold creamy coffee served over ice.',
      price: 130,
      category: 'Drinks',
      image: 'assets/images/iced-coffee.jpg'
    },
    {
      id: 16,
      name: 'Fresh Lemonade',
      description: 'Fresh lemon juice with mint and a touch of sweetness.',
      price: 90,
      category: 'Drinks',
      image: 'assets/images/lemonade.jpg'
    }
  ];

 constructor(
  private route: ActivatedRoute,
  private cartService: CartService
) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.products.find(
      product => product.id === id
    );
  }
  addToCart(): void {
  if (this.product) {
    this.cartService.addToCart(this.product);
    alert(`${this.product.name} added to cart!`);
  }
}
}