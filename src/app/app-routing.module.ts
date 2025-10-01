import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './resources/website/shared/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'website-incubadora', pathMatch: 'full' },
  {
    path: 'website-incubadora',
    loadChildren: () =>
      import('./resources/website/website.module').then(m => m.WebsiteModule)
  },
  { path: '**', component: ErrorPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
