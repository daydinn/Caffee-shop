import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecComponent } from './rec/rec.component';

import { ShopLiComponent } from './shop-li/shop-li.component';
import { RecDetailComponent } from './rec/rec-detail/rec-detail.component';
import { RecListComponent } from './rec/rec-list/rec-list.component';
import { RecItemComponent } from './rec/rec-list/rec-item.component';
import { AngeboteComponent } from './angebote.component';
import { HeaderComponent } from './header/header.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { ShopLiAddComponent } from './shop-li/shop-li-add.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    RecComponent,
    ShopLiComponent,
    RecDetailComponent,
    RecListComponent,
    RecItemComponent,
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
