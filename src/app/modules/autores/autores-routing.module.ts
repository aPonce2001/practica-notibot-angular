import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFooterTemplateComponent } from '../../core/pages/header-footer-template/header-footer-template.component';
import { AdminAutoresComponent } from './pages/admin-autores/admin-autores.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterTemplateComponent,
    children: [
      {
        path: '',
        component: AdminAutoresComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
