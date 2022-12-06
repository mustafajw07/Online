import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges {
  @Input() id! : number;
  productsList:any;
  Title = 'All';
  pageNumber: number = 1;
  constructor(private api: ApiService , private router: Router) { }

  ngOnChanges(changes: any) {
    this.id = changes.id.currentValue;
    if(this.id == undefined || null){
      this.id = 0;
    }
    if(this.id == 0){
      this.api.getAllProducts().subscribe((res) => this.productsList = res);
    }
    if(this.id == 1){
      this.api.getAllAppleProducts().subscribe((res) => this.productsList = res);
      this.Title = "Apple";
      this.pageNumber = 1;
    }
    if(this.id == 2){
      this.api.getAllBOProducts().subscribe((res) => this.productsList = res);
      this.Title = "B&O";
      this.pageNumber = 1;
    }
    if(this.id == 3){
      this.api.getAllRollingSquareProducts().subscribe((res) => this.productsList = res);
      this.Title = "Rolling Square";
      this.pageNumber = 1;
    }
    if(this.id == 4){
      this.api.getAllKeychronProducts().subscribe((res) => this.productsList = res);
      this.Title = "Keychron";
      this.pageNumber = 1;
    }
  }

  navigate(cid:any,id :any){
    this.router.navigate([`products/${cid}/${id}`])
  }

}
