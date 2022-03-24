import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductslistComponent } from './Components/productslist/productslist.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductsService } from './Services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './Routing/app-routing.module';
import { CartProductCardComponent } from './Components/cart-product-card/cart-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductslistComponent,
    ProductCardComponent,
    routingComponents,
    CartProductCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //imported the module
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
