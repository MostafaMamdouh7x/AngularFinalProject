import { Routes } from '@angular/router';
import { Checkout } from './components/checkout/checkout';
import { Cart } from './pages/cart/cart';
import { ProductDetails } from './pages/product-details/product-details';
import { Menu } from './pages/menu/menu';

export const routes: Routes = [
{ path: '', redirectTo: 'menu', pathMatch: 'full' },

{ path: 'menu', component: Menu },

{
path: 'gallery',
loadComponent: () =>
import('./gallery/gallery').then(m => m.GalleryComponent)
},

{
path: 'contact',
loadComponent: () =>
import('./contact/contact').then(m => m.ContactComponent)
},

{ path: 'checkout', component: Checkout },

{ path: 'cart', component: Cart },

{ path: 'product/:id', component: ProductDetails },

{ path: '**', redirectTo: 'menu' }
];
