import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './template/contactos/contactos.component';
import { ConteudoHommeComponent } from './template/conteudo-homme/conteudo-homme.component';
import { TemplateComponent } from './template/template.component';
import { SolucoesComponent } from './template/solucoes/solucoes.component';
import { SobreComponent } from './template/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      }, 
      { path: 'home', component: ConteudoHommeComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'servicos', component: SolucoesComponent },
      { path: 'contactos', component: ContactosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
