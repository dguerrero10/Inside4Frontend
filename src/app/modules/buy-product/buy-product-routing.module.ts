import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';

const routes: Routes = [
  {
    path: "",
    component: BuyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyProductRoutingModule { }
