import { Component } from '@angular/core';
import { EmtrService } from './emtr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin:false;

  constructor(private emservice:EmtrService,private router:Router)
  { }

  ngOnInit() {

    this.emservice.getEmittedValueForLogbtnSwitch()
      .subscribe(item => this.isLogin=item);

      
  }
  logout(){
    //alert("In logout");
    this.isLogin=false;
    delete sessionStorage['username'];
    this.router.navigate(['login']);
  }
}
