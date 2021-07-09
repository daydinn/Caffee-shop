import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngeboteComponent } from './angebote.component';
import { Menu2Component } from './menu2/menu2.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  
  { path:'angebote-component' , component:AngeboteComponent},
  
  {path : 'registrierung-component', component:RegistrierungComponent},
  {path : 'menu2-component', component:Menu2Component},
  {path : 'about-component', component:AboutComponent },
 
 



];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
