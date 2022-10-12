import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsPageComponent } from './components/contact-us-page/contact-us-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OurProductsComponent } from './components/our-products/our-products.component';


const routes: Routes = [
  {path : '' , component : HomePageComponent},
  {path : 'our-products' , component : OurProductsComponent},
  {path : 'contact-us' , component : ContactUsPageComponent},
  {path : '**' , component : ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
