import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-selector-bar',
  templateUrl: './selector-bar.component.html',
  styleUrls: ['./selector-bar.component.css']
})
export class SelectorBarComponent implements OnInit {

  companies:any = [];
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
  
}
