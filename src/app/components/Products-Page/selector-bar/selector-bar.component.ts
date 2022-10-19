import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-selector-bar',
  templateUrl: './selector-bar.component.html',
  styleUrls: ['./selector-bar.component.css']
})
export class SelectorBarComponent implements OnInit {

  companies:any = [];
  id = new FormControl('');
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
  
  click(e : any){
    let id = e.target.value;
    if(id == 1){
      this.api.getAllAppleProducts().subscribe((res) => console.log(res))
    }
    if(id == 2){
      this.api.getAllRollingSquareProducts().subscribe((res) => console.log(res))
    }
    if(id == 3){
      this.api.getAllDrDreProducts().subscribe((res) => console.log(res))
    }
    if(id == 4){
      this.api.getAllSatechiProducts().subscribe((res) => console.log(res))
    }
  }
}
