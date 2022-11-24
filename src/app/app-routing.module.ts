import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './components/Single-Product-Page/single-product/single-product.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';


const routes: Routes = [
  {path : '' , component : HomePageComponent},
  {path : 'products' , component : OurProductsComponent},
  {path : 'products/:company' , component : OurProductsComponent , pathMatch : 'full'},
  {path : 'products/:cid/:pid' , component : SingleProductPageComponent , pathMatch : 'full'},
  {path : 'contact' , component : ContactUsPageComponent, pathMatch : 'full'},
  {path : '**' , component : ErrorPageComponent , pathMatch : "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
