import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngeboteComponent } from './angebote.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  
  { path:'angebote-component' , component:AngeboteComponent},
  { path:'menu-component' , component:MenuComponent}





];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
