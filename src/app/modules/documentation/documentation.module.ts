import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationPageComponent } from './pages/documentation-page/documentation-page.component';
import { SidePanelNavComponent } from './components/side-panel-nav/side-panel-nav.component';
import { DocumentationTextComponent } from './components/documentation-text/documentation-text.component';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
  declarations: [
    DocumentationPageComponent,
    SidePanelNavComponent,
    DocumentationTextComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    SharedModule
  ]
})
export class DocumentationModule { }
