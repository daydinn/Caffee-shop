import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfopageComponent } from './infoseite/infopage.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { AboutComponent } from './about/about.component';
import { BestellenComponent } from './bestellen/bestellen.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  
  {path : 'bestellen',component:BestellenComponent},
  {path : 'registrierung-component', component:RegistrierungComponent},
  {path : 'infopage-component', component:InfopageComponent},
  {path : 'about-component', component:AboutComponent },

  //{path : '',redirectTo:'/bestellen',pathMatch:'full'}
  //{path : '**',component:BestellenComponent},
 
 



];

@NgModule({
imports: [RouterModule.forRoot(routes /*,{onSameUrlNavigation:'reload'}*/)],
exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
