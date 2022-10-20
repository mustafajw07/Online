import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
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
      this.api.getAllDrDreProducts().subscribe((res:any) => {
        this.product = res.filter((p: any) => p.id == this.pid )
      });
    }
    if(this.cid == 3){
      this.api.getAllRollingSquareProducts().subscribe((res:any) => {
        this.product = res.filter((p: any) => p.id == this.pid )
      });
    }
    if(this.cid == 4){
      this.api.getAllSatechiProducts().subscribe((res:any) => {
        this.product = res.filter((p: any) => p.id == this.pid )
      });
    }
  }

  back(){
    this.router.navigate(['/products'])
  }
}
