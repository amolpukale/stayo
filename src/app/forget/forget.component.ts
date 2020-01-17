import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
data;
  constructor(private router:Router,private service:UserService) { }

  forgot(myForm)
  {
    this.data=myForm.form.value;
    sessionStorage['email']=this.data.email;
    this.service.forgotpass(this.data).subscribe((res)=>{
      this.router.navigate(['confirmOtp']);
    })

  }

  ngOnInit() {
  }

}
