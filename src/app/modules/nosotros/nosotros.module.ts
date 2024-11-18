import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';


@NgModule({
  declarations: [
    SobrenosotrosComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
