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
  product: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: ApiService) { }

  ngOnInit(): void {
    this.cid = this.route.snapshot.paramMap.get('cid');
    this.pid = this.route.snapshot.paramMap.get('pid');
    this.route.params.subscribe((params) => {
      this.cid = this.route.snapshot.paramMap.get('cid');
      this.pid = this.route.snapshot.paramMap.get('pid');
      this.getProductById();
    });
  }

  getProductById() {
    if (this.cid == 1) {
      this.api.getAllAppleProducts().subscribe((res: any) => {
        this.product = res.filter((p: any) => p.id == this.pid);
      });
    }
    if (this.cid == 2) {
      this.api.getAllBOProducts().subscribe((res: any) => {
        this.product = res.filter((p: any) => p.id == this.pid)
      });
    }
    if (this.cid == 3) {
      this.api.getAllRollingSquareProducts().subscribe((res: any) => {
        this.product = res.filter((p: any) => p.id == this.pid)
      });
    }
    if (this.cid == 4) {
      this.api.getAllKeychronProducts().subscribe((res: any) => {
        this.product = res.filter((p: any) => p.id == this.pid)
      });
    }
  }

  getColor(color: string): any {
    switch (color) {
      case 'Blue':
        return 'blue';
      case 'Midnight':
        return 'midnight';
      case 'Purple':
        return 'purple';
      case 'Red':
        return 'red';
      case 'StarLight':
        return 'starlight';
      case 'Deep Purple':
        return 'purple';
      case 'Gold':
        return 'gold';
      case 'Silver':
        return 'silver';
      case 'Space Grey':
        return 'grey';
      case 'Black':
        return 'midnight';
      case 'Olive Green':
        return 'green';
      case 'White':
        return 'starlight';
    }
  }

  back() {
    this.router.navigate(['/products'])
  }
}