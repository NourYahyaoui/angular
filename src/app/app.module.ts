import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    NotfoundComponent,
    HomeComponent,
    DetailProductComponent,
    AddProductComponent,
    TemplateDrivenFormComponentComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
