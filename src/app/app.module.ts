import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

//Main Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

// Comman
import { HeaderComponent } from './Partials/header/header.component';
import { FooterComponent } from './Partials/footer/footer.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { SelectorBarComponent } from './components/Products-Page/selector-bar/selector-bar.component';

// Home Section Components
import { BannerComponent } from './components/Home-Page/banner/banner.component';
import { BrandComponent } from './components/Home-Page/brand/brand.component';
import { CardSectionComponent } from './components/Home-Page/card-section/card-section.component';
import { SliderComponent } from './components/Home-Page/slider/slider.component';

// Products
import { NewArrivalsComponent } from './components/Products-Page/new-arrivals/new-arrivals.component';
import { ProductsComponent } from './components/Products-Page/products/products.component';
import { TopSellingComponent } from './components/Products-Page/top-selling/top-selling.component';

// Single Products Page
import { SingleProductComponent } from './components/Single-Product-Page/single-product/single-product.component';
import { RecommendProductsComponent } from './components/Single-Product-Page/recommend-products/recommend-products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ContactUsPageComponent,
    OurProductsComponent,
    FooterComponent,
    ErrorPageComponent,
    BannerComponent,
    BrandComponent,
    CardSectionComponent,
    SliderComponent,
    NewArrivalsComponent,
    TopSellingComponent,
    SelectorBarComponent,
    ProductsComponent,
    SingleProductComponent,
    RecommendProductsComponent,
    SingleProductPageComponent,
    BackToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
