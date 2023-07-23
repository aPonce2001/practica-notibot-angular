import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderFooterTemplateComponent } from './pages/header-footer-template/header-footer-template.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderFooterTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderFooterTemplateComponent
  ]
})
export class CoreModule { }
