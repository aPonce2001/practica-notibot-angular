import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AutoresModule } from "./modules/autores/autores.module";
import { NoticiasModule } from './modules/noticias/noticias.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AutoresModule,
    NoticiasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
