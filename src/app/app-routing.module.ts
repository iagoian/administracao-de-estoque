import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {path:'', pathMatch:"full", redirectTo:'listar'},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'listar', component: ListarComponent},
  {path:'atualizar', component: AtualizarComponent}
];
@NgModule({
  imports: 
    [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
