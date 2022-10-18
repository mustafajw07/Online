import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  productListActive: any = [];
  productListInActive: any = [];

  constructor(private api: ApiService,
              private router : Router) { }

  ngOnInit(): void {
    this.api.getAllSliderProducts().subscribe((res:any) => {
      this.productListActive.push(res[0]);
      this.productListActive.push(res[1]);
      this.productListActive.push(res[2]);
      this.productListActive.push(res[3]);
      this.productListInActive.push(res[4]);
      this.productListInActive.push(res[5]);
      this.productListInActive.push(res[6]);
      this.productListInActive.push(res[7]);
    })
  }

  navigate(){
    this.router.navigate(['/products']);
  }

}
