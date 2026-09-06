import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { OrderItem } from '../../models/order-item';
import { FoodNamePipe } from '../../pipes/food-name-pipe';
import { OrderHighlightDirective } from '../../directives/order-highlight';


@Component({

  selector: 'app-checkout',

  standalone: true,

  imports: [

    ReactiveFormsModule,

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


  orderItems: OrderItem[] = [

    {

      id: 1,

      name: 'classic beef burger',

      price: 150,

      quantity: 2,

      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'

    },

    {

      id: 2,

      name: 'crispy french fries',

      price: 50,

      quantity: 1,

      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877'

    },

    {

      id: 3,

      name: 'fresh orange juice',

      price: 45,

      quantity: 2,

      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba'

    }

  ];


  constructor(

    private fb: FormBuilder

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

        [

          Validators.required

        ]

      ]

    });

  }


  // ===============================
  // FORM CONTROLS
  // ===============================

  get f() {

    return this.checkoutForm.controls;

  }


  // ===============================
  // SUBTOTAL
  // ===============================

  get subtotal(): number {

    return this.orderItems.reduce(

      (total, item) => {

        return total +
          (item.price * item.quantity);

      },

      0

    );

  }


  // ===============================
  // DELIVERY FEE
  // ===============================

  get deliveryFee(): number {

    return this.orderItems.length > 0

      ? 30

      : 0;

  }


  // ===============================
  // TOTAL
  // ===============================

  get total(): number {

    return this.subtotal +

      this.deliveryFee;

  }


  // ===============================
  // PLACE ORDER
  // ===============================

  placeOrder(): void {

    this.submitted = true;


    if (this.checkoutForm.invalid) {

      this.checkoutForm.markAllAsTouched();

      return;

    }


    this.orderCompleted = true;


    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });


    setTimeout(() => {

      this.orderCompleted = false;

    }, 5000);

  }


  // ===============================
  // REMOVE ITEM
  // ===============================

  removeItem(id: number): void {

    this.orderItems = this.orderItems.filter(

      item => item.id !== id

    );

  }


  // ===============================
  // INCREASE QUANTITY
  // ===============================

  increaseQuantity(item: OrderItem): void {

    item.quantity++;

  }


  // ===============================
  // DECREASE QUANTITY
  // ===============================

  decreaseQuantity(item: OrderItem): void {

    if (item.quantity > 1) {

      item.quantity--;

    }

  }

}