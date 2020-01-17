import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
data:any;
  constructor(private service:UserService,private router:Router) { }

  register(myForm)
  {
    this.data=myForm.form.value;
    console.log(this.data);
    this.service.register(this.data).subscribe((res)=>{
      this.router.navigate(['login']);
    })
  }

  ngOnInit() {
  }

}
