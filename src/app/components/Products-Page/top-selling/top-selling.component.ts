import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css']
})
export class TopSellingComponent implements OnInit {

  productsList:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllTopSelling().subscribe((data) => {
      this.productsList = data;
    })
  }

}
