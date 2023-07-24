import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { AutoresRoutingModule } from './autores-routing.module';
import { ListaAutoresComponent } from './components/lista-autores/lista-autores.component';
import { AdminAutoresComponent } from './pages/admin-autores/admin-autores.component';
import { AutorCardComponent } from './components/autor-card/autor-card.component';
import { AutorFormularioComponent } from './components/autor-formulario/autor-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ListaAutoresComponent,
    AdminAutoresComponent,
    AutorCardComponent,
    AutorFormularioComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AutoresRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class AutoresModule { }
