import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'autores',
    loadChildren: () => import('./modules/autores/autores.module').then(m => m.AutoresModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./modules/noticias/noticias.module').then(m => m.NoticiasModule)
  },
  {
    path: '',
    redirectTo: 'autores'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
