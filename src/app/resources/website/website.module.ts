import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './template/header/header.component';
import { LandingPageComponent } from './template/landing-page/landing-page.component';
import { ConteudoHommeComponent } from './template/conteudo-homme/conteudo-homme.component';
import { FooterComponent } from './template/footer/footer.component';
import { SolucoesComponent } from './template/solucoes/solucoes.component';
import { FormsModule } from '@angular/forms';
import { ContactosComponent } from './template/contactos/contactos.component';
import { RouterModule } from '@angular/router';
import { SobreComponent } from './template/sobre/sobre.component';
import { LoadingPageComponent } from './shared/loading-page/loading-page.component';
import { FormContactosComponent } from './template/form-contactos/form-contactos.component';


@NgModule({
  declarations: [
    TemplateComponent,
    HeaderComponent,
    LandingPageComponent,
    ConteudoHommeComponent,
    FooterComponent,
    SolucoesComponent,
    ContactosComponent,
    SobreComponent,
    LoadingPageComponent,
    FormContactosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
