import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';

const routes: Routes = [
  {
    path: '',
    component: PricingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
