import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges {
  @Input() id! : number;
  constructor() { }

  ngOnChanges(changes: any) {
    this.id = changes.id.currentValue;
    if(this.id == undefined || null){
      this.id = 0;
    }
  }

}
