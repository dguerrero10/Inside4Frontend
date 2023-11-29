import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { SharedModule } from '../shared/shared.module';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';


@NgModule({
  declarations: [
    PricingPageComponent,
    PricingCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
