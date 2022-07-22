import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component:PublicComponent,
    children:[
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path: 'contact',
        component:ContactComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
