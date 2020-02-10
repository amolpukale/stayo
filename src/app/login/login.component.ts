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
  //console.log(this.data);
  this.service.login(this.data).subscribe((res)=>
{
  //sessionStorage['user']=res
  var user={'username':res['username'],'userId':res['userId']}
  sessionStorage['user']=JSON.stringify(user);
  sessionStorage['userId']=res['userId']
  sessionStorage['username']=res['username'];
  sessionStorage['email']=res['email'];
  sessionStorage['phone']=res['phone']
  sessionStorage['role']=res['role']
  this.emService.logInBtnSwitch(true);
  this.service.changeStatusToAvailable().subscribe();
  if(res['role']=='ADMIN')
  {
    this.router.navigate(['adminHome']);
  }else if(res['role']=='USER')
  {
    this.router.navigate(['home']);
  }else if(res['role']=='CUSTOMER')
  {
    this.router.navigate(['customerHome']);
  }

}
)

}
  

}
