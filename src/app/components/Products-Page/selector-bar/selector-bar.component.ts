import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  name = "";
  // categories:any = [];

  constructor(private api: ApiService , 
              private route: ActivatedRoute,
              private router: Router) {}
              

  ngOnInit(): void {
    this.getAllCompanies();
    this.route.params.subscribe((data:any) =>{  
      let company = data['company'];
      if(company == 'apple'){
        this.id = 1;
        this.updateSelected.emit(this.id);
    this.getAllCompanies();

      }
      if(company == 'b&o'){
        this.id = 2;
        this.updateSelected.emit(this.id);
    this.getAllCompanies();

      }
      if(company == 'rollingSquare'){
        this.id = 3;
        this.updateSelected.emit(this.id);
    this.getAllCompanies();

      }
      if(company == 'satechi'){
        this.id = 4;
        this.updateSelected.emit(this.id);
    this.getAllCompanies();

      }
     });
  }

  getAllCompanies(){
    this.api.getAllCompanies().subscribe((data) => {
      this.companies = data;
    });
  }
  
  selected(e : any){
    this.id = e.target.value;
    if(this.id == 1){
      this.router.navigate(['/products/apple'])
    }
    if(this.id == 2){
      this.router.navigate(['/products/b&o'])
    }
    if(this.id == 3){
      this.router.navigate(['/products/rollingSquare'])
    }
    if(this.id == 4){
      this.router.navigate(['/products/satechi'])
    }
    this.updateSelected.emit(this.id);
  }
}
