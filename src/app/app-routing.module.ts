import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngeboteComponent } from './angebote.component';
import { InfopageComponent } from './delivers/infopage.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  
  { path:'angebote-component' , component:AngeboteComponent},
  
  {path : 'registrierung-component', component:RegistrierungComponent},
  {path : 'infopage-component', component:InfopageComponent},
  {path : 'about-component', component:AboutComponent },
 
 



];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
