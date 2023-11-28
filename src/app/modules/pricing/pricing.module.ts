import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PricingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
