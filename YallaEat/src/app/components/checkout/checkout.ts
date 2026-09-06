import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';

import { CartItem } from '../../models/product';

import { CartService } from '../../services/cart.service';
import { FoodNamePipe } from '../../pipes/food-name-pipe';
import { OrderHighlightDirective } from '../../directives/order-highlight';


@Component({

  selector: 'app-checkout',

  imports: [

    ReactiveFormsModule,

    RouterLink,

    FoodNamePipe,

    OrderHighlightDirective

  ],

  templateUrl: './checkout.html',

  styleUrl: './checkout.css'

})

export class Checkout {


  checkoutForm: FormGroup;


  submitted = false;

  orderCompleted = false;


  cartItems: CartItem[] = [];


  constructor(

    private fb: FormBuilder,

    private cartService: CartService,

    private router: Router

  ) {

    this.checkoutForm = this.fb.group({

      fullName: [

        '',

        [

          Validators.required,

          Validators.minLength(3)

        ]

      ],

      email: [

        '',

        [

          Validators.required,

          Validators.email

        ]

      ],

      phone: [

        '',

        [

          Validators.required,

          Validators.pattern(/^[0-9+\-\s()]{8,20}$/)

        ]

      ],

      address: [

        '',

        [

          Validators.required,

          Validators.minLength(10)

        ]

      ],

      paymentMethod: [

        'cash',

        Validators.required

      ]

    });


    // Get real cart items

    this.cartItems = this.cartService.getCart();

  }


  // =====================================
  // GET FORM CONTROLS
  // =====================================

  get f() {

    return this.checkoutForm.controls;

  }


  // =====================================
  // GET SUBTOTAL
  // =====================================

  get subtotal(): number {

    return this.cartItems.reduce(

      (total, item) => {

        return total +

          item.product.price *

          item.quantity;

      },

      0

    );

  }


  // =====================================
  // DELIVERY FEE
  // =====================================

  get deliveryFee(): number {

    return this.cartItems.length > 0

      ? 30

      : 0;

  }


  // =====================================
  // GET TOTAL
  // =====================================

  get total(): number {

    return this.subtotal +

      this.deliveryFee;

  }


  // =====================================
  // REMOVE ITEM
  // =====================================

  removeItem(productId: number): void {

    this.cartService.removeFromCart(productId);


    this.cartItems = this.cartService.getCart();

  }


  // =====================================
  // INCREASE QUANTITY
  // =====================================

  increaseQuantity(item: CartItem): void {

    this.cartService.updateQuantity(

      item.product.id,

      item.quantity + 1

    );


    this.cartItems = this.cartService.getCart();

  }


  // =====================================
  // DECREASE QUANTITY
  // =====================================

  decreaseQuantity(item: CartItem): void {

    this.cartService.updateQuantity(

      item.product.id,

      item.quantity - 1

    );


    this.cartItems = this.cartService.getCart();

  }


  // =====================================
  // PLACE ORDER
  // =====================================

  placeOrder(): void {


    this.submitted = true;


    // Validate Form

    if (this.checkoutForm.invalid) {

      this.checkoutForm.markAllAsTouched();

      return;

    }


    // Stop if cart is empty

    if (this.cartItems.length === 0) {

      return;

    }


    // Show Success Alert

    this.orderCompleted = true;


    // Clear Cart

    this.cartService.clearCart();

    this.cartItems = [];


    // Reset Form

    this.checkoutForm.reset({

      paymentMethod: 'cash'

    });


    // Scroll to Top

    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });


    // Redirect after 3 seconds

    setTimeout(() => {

      this.router.navigate(['/menu']);

    }, 3000);

  }


}