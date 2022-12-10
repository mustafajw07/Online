import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recommend-products',
  templateUrl: './recommend-products.component.html',
  styleUrls: ['./recommend-products.component.css']
})
export class RecommendProductsComponent implements OnInit {
  @Input() cid! : number;
  productList:any = [];
  constructor(private api: ApiService , private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.api.getAllProducts().subscribe((res:any) => {
      for (let index = 0; index < 4; index++) {
        let x = Math.floor((Math.random() * res.length-1) + 1);
        this.productList.push(res[x])
      }
    });
  }

  navigate(cid :any , id :any){
    this.router.navigate([`products/${cid}/${id}`])
  }

}
