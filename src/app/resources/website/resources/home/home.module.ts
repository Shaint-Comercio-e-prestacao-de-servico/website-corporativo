import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ConteudoHomeComponent } from './resources/conteudo-home/conteudo-home.component';


@NgModule({
  declarations: [
  
    ConteudoHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
