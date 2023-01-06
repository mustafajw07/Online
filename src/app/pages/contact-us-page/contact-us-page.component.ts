import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ApiService } from 'src/app/services/api.service';
const snackbar = require('snackbar');
@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css']
})
export class ContactUsPageComponent implements OnInit{
  YOUR_SERVICE_ID:any = '';
  YOUR_TEMPLATE_ID:any = '';
  YOUR_PUBLIC_KEY:any = '';

  contactForm = new FormGroup({
    name: new FormControl('' , [Validators.required]),
    email: new FormControl('' ,[Validators.required]),
    subject: new FormControl('' ,[Validators.required]),
    message: new FormControl('',[Validators.required])
  });

  constructor(private api: ApiService) { }
  
  sendEmail(e: Event) {
    emailjs.sendForm(this.YOUR_SERVICE_ID, this.YOUR_TEMPLATE_ID , e.target as HTMLFormElement, this.YOUR_PUBLIC_KEY).then((result) =>{
      if(result.status == 200){
       alert('Message Send successful')
       this.contactForm.reset();
      }else{
        alert('Error')
      }
    });
  }

  ngOnInit(): void {
      this.api.getKeys().subscribe((res :any) => {
        res = res[0]; 
        this.YOUR_PUBLIC_KEY = res.YOUR_PUBLIC_KEY;
        this.YOUR_SERVICE_ID = res.YOUR_SERVICE_ID;
        this.YOUR_TEMPLATE_ID = res.YOUR_TEMPLATE_ID
      });
  }

}
