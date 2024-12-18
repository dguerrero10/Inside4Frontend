import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SharedModule } from '../shared/modules/shared.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';


@NgModule({
  declarations: [
    AuthPageComponent,
    AuthFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
