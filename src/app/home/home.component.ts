import { Component, OnInit } from '@angular/core';
import { FunctionalityService } from '../functionality.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data;
show=true;
show1=false;
show2=false;
show3=false;
email;
userId;

  constructor(private service:FunctionalityService,private service1:UserService,private router:Router) { 
    this.service1.changeStatusToAvailable().subscribe();
  }

  search(myForm)
  {
    console.log(myForm.form.value);
    this.data=myForm.form.value;
    this.service.search(this.data).subscribe((res)=>{
      console.log(res);
      if(res=='')
      {
        this.show=false;
        this.show3=true;
        this.show1=false;
        //this.router.navigate(['home'])
        this.ngOnInit();
      }
      else{
        this.data=res;
        this.show3=false;
        this.show1=true;
        this.show=false;
       // this.router.navigate(['home']);
        this.ngOnInit();
        sessionStorage['list']=res;
      }
   
      this.email=sessionStorage['email'];
      this.userId=sessionStorage['userId'];
      console.log(this.userId)
      console.log(this.email)
    })

  }

  book(hotelId)
  {
    
    console.log(hotelId);
    this.service.bookHotel(hotelId).subscribe((res)=>{
      console.log(res);
      this.show1=false;
      this.show2=true;
      this.data=res;
      
    })
  }

  bookroom(room)
  {
    console.log(room.id);
    sessionStorage['roomid']=room.id
    //let price=JSON.stringify(room.price)
   // sessionStorage['price']=price
    this.router.navigate(['reservation']);
  }

  ngOnInit() {
  }

}
