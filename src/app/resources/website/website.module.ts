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


@NgModule({
  declarations: [
    TemplateComponent,
    HeaderComponent,
    LandingPageComponent,
    ConteudoHommeComponent,
    FooterComponent,
    SolucoesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WebsiteModule { }
