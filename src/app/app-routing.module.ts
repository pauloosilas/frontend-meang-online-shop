import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './@public/pages/contact/contact.component';
import { HomeComponent } from './@public/pages/home/home.component';

const routes: Routes = [

 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
