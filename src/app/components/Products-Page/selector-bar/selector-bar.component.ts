import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-selector-bar',
  templateUrl: './selector-bar.component.html',
  styleUrls: ['./selector-bar.component.css']
})
export class SelectorBarComponent implements OnInit {
  @Output() updateSelected = new EventEmitter();
  companies:any = [];
  id!: number;
  // categories:any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies(){
    this.api.getAllCompanies().subscribe((data) => {
      this.companies = data;
    });
  }
  
  selected(e : any){
    this.id = e.target.value;
    this.updateSelected.emit(this.id);
  }
}
