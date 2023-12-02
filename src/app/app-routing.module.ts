import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'documentation',
    loadChildren: () =>
      import('./modules/documentation/documentation.module').then((m) => m.DocumentationModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./modules/pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'buy',
    loadChildren: () =>
      import('./modules/buy-product/buy-product.module').then((m) => m.BuyProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
