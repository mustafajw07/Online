import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css'],
})
export class CardSectionComponent implements OnInit {
  cardList: any = [];
  apple: any = [];
  keychron: any = [];
  rollingSquare: any = [];
  bo: any = [];

  constructor(private api: ApiService , private router: Router) {}

  ngOnInit(): void {
    this.getAllHomePageProducts();
  }

  getAllHomePageProducts(){
    this.api.getAllHomePageProducts().subscribe((res: any) => {
      this.cardList = res;
      res.forEach((e: any) => {
        if (e.brand == 'Apple') {
          this.apple.push(e);
        }
        if (e.brand == 'Keychron') {
          this.keychron.push(e);
        }
        if (e.brand == 'Rolling Square') {
          this.rollingSquare.push(e);
        }
        if (e.brand == 'B&O') {
          this.bo.push(e);
        }
      }); 
    });
  }

  navigate(param : any){
    this.router.navigate([`/products/${param}`]);
  }


}
