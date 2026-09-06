import { Routes } from '@angular/router';
import { Checkout } from './components/checkout/checkout';

export const routes: Routes = [
  { path: 'gallery', loadComponent: () => import('./gallery/gallery').then(m => m.GalleryComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.ContactComponent) },
  { path: 'checkout', component: Checkout}
];