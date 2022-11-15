import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recommend-products',
  templateUrl: './recommend-products.component.html',
  styleUrls: ['./recommend-products.component.css']
})
export class RecommendProductsComponent implements OnInit {
  @Input() cid! : number;
  productList:any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    if(this.cid == 1){
      this.api.getAllAppleProducts().subscribe((res:any) => {
        for (let index = 0; index < 4; index++) {
          let x = Math.floor((Math.random() * res.length-1) + 1);
          this.productList.push(res[x])
        }
      });
    }
    if(this.cid == 2){
      this.api.getAllBOProducts().subscribe((res:any) => {
        for (let index = 0; index < 4; index++) {
          let x = Math.floor((Math.random() * res.length-1) + 1);
          this.productList.push(res[x])
        }
      });
    }
    if(this.cid == 3){
      this.api.getAllRollingSquareProducts().subscribe((res:any) => {
        for (let index = 0; index < 4; index++) {
          let x = Math.floor((Math.random() * res.length-1) + 1);
          this.productList.push(res[x])
        }
      });
    }
    if(this.cid == 4){
      this.api.getAllKeychronProducts().subscribe((res:any) => {
        for (let index = 0; index < 4; index++) {
          let x = Math.floor((Math.random() * res.length-1) + 1);
          this.productList.push(res[x])
        }
      });
    }
  }

}
