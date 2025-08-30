import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './resources/website/template/template.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'website-incubadora',
    pathMatch: 'full'
  },
  {
    path: 'website-incubadora',
    component: TemplateComponent,
    children: [
      {
        path: 'website',
        loadChildren: () => import('./resources/website/website.module')
          .then(m => m.WebsiteModule)
      }
    ]
  },
  { path: '**', redirectTo: 'website-incubadora/website' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
