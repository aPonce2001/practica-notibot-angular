import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { AutoresRoutingModule } from './autores-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
