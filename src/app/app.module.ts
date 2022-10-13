import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


import { FooterComponent } from './Partials/footer/footer.component';
import { HeaderComponent } from './Partials/header/header.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContactUsPageComponent,
    ErrorPageComponent,
    OurProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
