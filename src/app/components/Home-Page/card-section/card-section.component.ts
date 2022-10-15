import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css'],
})
export class CardSectionComponent implements OnInit {
  cardList: any = [];
  apple: any = [];
  satechi: any = [];
  rollingSquare: any = [];
  drDre: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllHomePageProducts().subscribe((res: any) => {
      this.cardList = res;
      res.forEach((e: any) => {
        if (e.brand == 'Apple') {
          this.apple.push(e);
        }
        if (e.brand == 'satechi') {
          this.satechi.push(e);
        }
        if (e.brand == 'Rolling Square') {
          this.rollingSquare.push(e);
        }
        if (e.brand == 'Dr Dre') {
          this.drDre.push(e);
        }
      });
    });
  }
}
