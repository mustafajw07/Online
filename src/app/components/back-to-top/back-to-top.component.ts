import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent{

  show = false;

  constructor() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(window.scrollY  > 1000){
      this.show = true
    }else{
      this.show = false
    }
  }
  onEdit() { 
    window.scrollTo(0, 0); 
  }
}
