import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato.component';
import { FormComponent } from './pages/form/form.component';

import { HomeComponent } from './pages/home/home.component';
import { UpdateComponent } from './pages/update/update.component';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'formulario', loadChildren: () => import('./pages/form/form.module').then( m => m.FormModule)
  },
  {
    path: 'foto', loadChildren: () => import('./pages/foto/foto.module').then( m => m.FotoModule)
  },
  {
    path: 'contato', loadChildren: () => import('./pages/contato/contato.module').then( m => m.ContatoModule)
  },
  {
    path: 'update/:id', loadChildren: () => import('./pages/update/update.module').then( m => m.UpdateModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
