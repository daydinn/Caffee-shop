import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ShopLiComponent } from './shop-li/shop-li.component';



import { AngeboteComponent } from './angebote.component';
import { HeaderComponent } from './header/header.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { ShopLiAddComponent } from './shop-li/shop-li-add.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ShopLiComponent,
   
  
    
    AngeboteComponent,
    HeaderComponent,
    MenuComponent,
    
  RegistrierungComponent,
    ShopLiAddComponent,
        
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
