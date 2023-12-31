import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@features/products/products.routes').then(
        (m) => m.PRODUCTS_ROUTES
      ),
  },
];
