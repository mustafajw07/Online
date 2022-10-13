import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  product:any = [];
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get('../../assets/json/db.json');
  }
  getProductsById(pid: number){
    this.getAllProducts().subscribe((data : any) => {
      data.forEach((product: any) => {
        if(product.id == pid){
          return this.product = product;
        }
      });
    });
  } 
}
