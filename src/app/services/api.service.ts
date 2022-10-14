import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

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
    return this.http.get('../../assets/json/homePageSliderProduct.json')
  }
  // Apple Products Get
  getAllAppleProducts(){
    return this.http.get<Product>('../../assets/json/apple.json');
  }

  getProductAppleById(pid: number){
    this.getAllAppleProducts().subscribe((data : any) => {
      data.forEach((product: any) => {
        if(product.id == pid){
          return this.product = product;
        }
      });
    });
  } 

  // Satechi Products Get
  getAllSatechiProducts(){
    return this.http.get<Product>('../../assets/json/satechi.json');
  }

  getProductSatechiById(pid: number){
    this.getAllSatechiProducts().subscribe((data : any) => {
      data.forEach((product: any) => {
        if(product.id == pid){
          return this.product = product;
        }
      });
    });
  } 

  // DrDre Products Get
  getAllDrDreProducts(){
    return this.http.get<Product>('../../assets/json/drdre.json');
  }

  getProductDrDreById(pid: number){
    this.getAllDrDreProducts().subscribe((data : any) => {
      data.forEach((product: any) => {
        if(product.id == pid){
          return this.product = product;
        }
      });
    });
  } 

  // Rolling Square Products Get
  getAllRollingSquareProducts(){
    return this.http.get<Product>('../../assets/json/rollingSquare.json');
  }
  
  getProductRollingSquareById(pid: number){
    this.getAllRollingSquareProducts().subscribe((data : any) => {
      data.forEach((product: any) => {
        if(product.id == pid){
          return this.product = product;
        }
      });
    });
  } 

}
