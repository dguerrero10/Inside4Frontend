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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
