import { Component,HostListener } from '@angular/core';

@HostListener('window:scroll', ['$event'])

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() { }

  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
      console.log('true');
    } else {
      element.classList.remove('navbar-inverse');
      console.log('false');
    }
  }
}
