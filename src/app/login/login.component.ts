import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EmtrService } from '../emtr.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data;

  constructor(private service:UserService,private router:Router,private emService:EmtrService) { }

  ngOnInit() {
    
  }
 
login(loginForm)
{
  
  this.data=loginForm.form.value;
  console.log(this.data);
  this.service.login(this.data).subscribe((res)=>
{
  sessionStorage['username']=res['username'];
  sessionStorage['email']=res['email'];
  this.emService.logInBtnSwitch(true);
  this.router.navigate(['home']);
}
)

}
  

}
