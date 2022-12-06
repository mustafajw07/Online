import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  product:any = [];
  constructor(private http: HttpClient) { }

  // Get Home Page Products
  getAllHomePageProducts(){
    return this.http.get('../../assets/json/homePageCardProducts.json');
  }

  // Get Home Page Products
  getAllSliderProducts(){
    return this.http.get('../../assets/json/homePageSliderProduct.json');
  }

  // Get All new arrivals
  getAllNewArrivals(){
    return this.http.get('../../assets/json/newArrivals.json');
  }

  // Get All Top Selling
  getAllTopSelling(){
    return this.http.get('../../assets/json/topSelling.json');
  }

  // Get All Companies
  getAllCompanies(){
    return this.http.get('../../assets/json/companies.json');
  }

  // Get All Products
  getAllProducts(){
    return this.http.get('../../assets/json/allProducts.json');
  }

  // Apple Products Get
  getAllAppleProducts(){
    return this.http.get('../../assets/json/apple.json');
  }

  // Keychron Products Get
  getAllKeychronProducts(){
    return this.http.get('../../assets/json/keychron.json');
  } 

  // B&O Products Get
  getAllBOProducts(){
    return this.http.get('../../assets/json/b&o.json');
  }

  // Rolling Square Products Get
  getAllRollingSquareProducts(){
    return this.http.get('../../assets/json/rollingSquare.json');
  }
  

}
