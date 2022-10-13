import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllAppleProducts().subscribe((res) => console.log(res))
    this.api.getAllDrDreProducts().subscribe(res => console.log(res))
    this.api.getAllRollingSquareProducts().subscribe(res => console.log(res))
    this.api.getAllSatechiProducts().subscribe(res => console.log(res))
  }

}
