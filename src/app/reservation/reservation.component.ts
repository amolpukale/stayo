import { Component, OnInit } from '@angular/core';
import { FunctionalityService } from '../functionality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
data;
msg;
user=sessionStorage['userId']
room=sessionStorage['roomid']
  constructor(private service:FunctionalityService,private router:Router) { }

  book(myForm)
  {
    this.data=myForm.form.value;
  
   // console.log(sessionStorage['userId'])
   // console.log(sessionStorage['roomid'])
   // console.log(this.data.userId)
    //console.log(this.data.id)
    console.log(this.data)
    sessionStorage['bookingData']=this.data
    this.service.book(this.data,this.user,this.room).subscribe((res)=>{
      console.log(res+"res")
      if(res!=null)
      {
        sessionStorage['price']=res;
        this.router.navigate(['payment']);
      }
      else{
        this.msg="wrong input"
        this.router.navigate(['reservation'])
      }
    })
  }
  ngOnInit() {
  }

}
