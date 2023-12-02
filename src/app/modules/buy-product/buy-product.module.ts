import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyProductRoutingModule } from './buy-product-routing.module';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { SharedModule } from '../shared/modules/shared.module';
import { PurchasePlanComponent } from './components/purchase-plan/purchase-plan.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuyPageComponent,
    PurchasePlanComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BuyProductRoutingModule
  ]
})
export class BuyProductModule { }
