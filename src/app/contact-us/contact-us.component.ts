import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
data;
  constructor(private service:UserService,private router:Router) { }


  contact(myForm)
  {
    this.data=myForm.form.value;
    this.service.contactUs(this.data).subscribe((res)=>{
      alert("Thank you for your valuable feedback")
      this.router.navigate(['home']);
    })
  }
  ngOnInit() {
  }

}
