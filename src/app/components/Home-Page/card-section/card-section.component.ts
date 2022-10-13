import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit {

  cardList:any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllHomePageProducts().subscribe(res => this.cardList = res);
  }

}
