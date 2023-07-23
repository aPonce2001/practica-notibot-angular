import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }
