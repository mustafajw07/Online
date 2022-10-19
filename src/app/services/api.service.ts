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

  // Get All Companies
  getAllCompanies(){
    return this.http.get('../../assets/json/companies.json');
  }

  // Apple Products Get
  getAllAppleProducts(){
    return this.http.get('../../assets/json/apple.json');
  }

  // Satechi Products Get
  getAllSatechiProducts(){
    return this.http.get('../../assets/json/satechi.json');
  } 

  // DrDre Products Get
  getAllDrDreProducts(){
    return this.http.get('../../assets/json/drdre.json');
  }

  // Rolling Square Products Get
  getAllRollingSquareProducts(){
    return this.http.get('../../assets/json/rollingSquare.json');
  }
  

}
