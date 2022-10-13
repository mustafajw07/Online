import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';



const routes: Routes = [
  {path : '' , component : HomePageComponent},
  {path : 'products' , component : OurProductsComponent},
  {path : 'contact' , component : ContactUsPageComponent},
  {path : '**' , component : ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
