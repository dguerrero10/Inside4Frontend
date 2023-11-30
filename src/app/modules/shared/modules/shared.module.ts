import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UnauthenticatedNavbarComponent } from '../components/unauthenticated-navbar/unauthenticated-navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MaterialModule } from './materialUI.module';
import { OrLineSeparatorComponent } from '../components/UI/or-line-separator/or-line-separator.component';


@NgModule({
  declarations: [
    UnauthenticatedNavbarComponent,
    FooterComponent,
    OrLineSeparatorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    UnauthenticatedNavbarComponent,
    FooterComponent,
    OrLineSeparatorComponent,
    MaterialModule
  ]
})
export class SharedModule { }
