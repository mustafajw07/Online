import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  img = "https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png";
  img2 = "https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png";
  top ='2';
  right = '2';
  lensewidth = '100';
  lensheight = '100';
  resultWidth = '50';
  resultheight = '50';

  cid: any;
  pid: any;
  product:any;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: ApiService) { }

  ngOnInit(): void {
    this.cid = this.route.snapshot.paramMap.get('cid');
    this.pid = this.route.snapshot.paramMap.get('pid');
    this.getProductById();
  }
  getProductById(){
    if(this.cid == 1){
      this.api.getAllAppleProducts().subscribe((res:any) => {
        this.product = res.filter((p: any) => p.id == this.pid )
      });
    }
    if(this.cid == 2){
      this.api.getAllBOProducts().subscribe((res:any) => {
        this.product = res.filter((p: any) => p.id == this.pid )
      });
    }
    if(this.cid == 3){
      this.api.getAllRollingSquareProducts().subscribe((res:any) => {
        this.product = res.filter((p: any) => p.id == this.pid )
      });
    }
    if(this.cid == 4){
      this.api.getAllKeychronProducts().subscribe((res:any) => {
        this.product = res.filter((p: any) => p.id == this.pid )
      });
    }
  }

  back(){
    this.router.navigate(['/products'])
  }
}