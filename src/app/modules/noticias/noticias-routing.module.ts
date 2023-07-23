import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFooterTemplateComponent } from 'src/app/core/pages/header-footer-template/header-footer-template.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterTemplateComponent,
    children: [
      
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NoticiasRoutingModule { }
