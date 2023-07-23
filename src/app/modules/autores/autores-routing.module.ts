import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFooterTemplateComponent } from '../../core/pages/header-footer-template/header-footer-template.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterTemplateComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
