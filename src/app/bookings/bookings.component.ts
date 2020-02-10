import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
data;
id:object;
  constructor(private service:UserService) { }

  CancelBook(data)
  {
    //alert("in cancelbook")
    this.service.cancelBooking(data).subscribe((res)=>{
      this.ngOnInit();
    });
   
  }

  ngOnInit() {
    this.id=JSON.parse(sessionStorage['user'])
    this.service.getBookings(this.id).subscribe((res)=>{
     this.data=res;
    })
  }
}
