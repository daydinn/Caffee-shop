import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule}from'@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';

import { InfopageComponent } from './info/infopage.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FiltersComponent } from './shopping-cart/filters/filters.component';
import { GetraenkListComponent } from './shopping-cart/getraenk-list/getraenk-list.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CartItemComponent } from './shopping-cart/cart/cart-item/cart-item.component';
import { GetraenkItemComponent } from './shopping-cart/getraenk-list/getraenk-item/getraenk-item.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrierungComponent,
    InfopageComponent,
    FooterComponent,
    ShoppingCartComponent,
    FiltersComponent,
    GetraenkListComponent,
    CartComponent,
    CartItemComponent,
    GetraenkItemComponent,
    AboutComponent,
    
   
    
    
 
    
    
    
        
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }