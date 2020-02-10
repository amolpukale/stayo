import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-insert',
  templateUrl: './room-insert.component.html',
  styleUrls: ['./room-insert.component.css']
})
export class RoomInsertComponent implements OnInit {
data;
  constructor(private service:AdminService,private router:Router) { }
  add(myForm)
  {
    this.data=myForm.form.value;
    // let room={
    //       "description":this.data.description,
    //       "hotelId":{
    //         "hotelId":this.data.hotelId
    //       },
    //       "roomNo":this.data.roomNo,
    //       "roomtype":this.data.roomtype,
    //       "price":this.data.price,
    //       "status":this.data.status,
    //       "maxOccupancy":this.data.maxOccupancy
    // }
    
    console.log(this.data.hotelId);
    this.service.addRoom(this.data,this.data.hotelId).subscribe((res)=>{
      this.router.navigate(['adminHome']);
    })
  }

  ngOnInit() {
  }

}
