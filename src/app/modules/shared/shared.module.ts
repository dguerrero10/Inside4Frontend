import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthenticatedNavbarComponent } from './components/unauthenticated-navbar/unauthenticated-navbar.component';
import { MaterialModule } from 'src/app/modules/shared/materialUI/materialUI.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    UnauthenticatedNavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    UnauthenticatedNavbarComponent,
    FooterComponent,
    MaterialModule
  ]
})
export class SharedModule { }
