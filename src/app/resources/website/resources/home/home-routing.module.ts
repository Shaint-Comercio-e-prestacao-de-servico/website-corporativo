import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoHomeComponent } from './resources/conteudo-home/conteudo-home.component';

const routes: Routes = [
  {
    path: '',
    component: ConteudoHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
