import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent {
  id! : number;
  constructor() { }

  selected(e : any){
    this.id = e;
  }
}
