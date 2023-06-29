import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { DatabaseComponent } from './database/database.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'database', component: DatabaseComponent },
  { path: 'depositos', component: ClientesComponent },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }

