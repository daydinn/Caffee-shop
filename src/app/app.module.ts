import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule}from'@angular/common/http';



import { ShopLiComponent } from './shop-li/shop-li.component';



import { AngeboteComponent } from './angebote.component';
import { HeaderComponent } from './header/header.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { ShopLiAddComponent } from './shop-li/shop-li-add.component';

import { Menu2Component } from './menu2/menu2.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shared/shopping-cart/shopping-cart.component';




@NgModule({
  declarations: [
    AppComponent,
    ShopLiComponent,
    AngeboteComponent,
    HeaderComponent,
    RegistrierungComponent,
    ShopLiAddComponent,
    Menu2Component,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    
    
        
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
