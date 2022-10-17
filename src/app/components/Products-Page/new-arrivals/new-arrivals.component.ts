import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {

  productsList:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllNewArrivals().subscribe((res) => this.productsList = res);
  }

}
