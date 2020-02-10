import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
data;
show=false;

  constructor(private service:AdminService,private router:Router) {
    this.ngOnInit();
   }

  delete(d)
  {
    console.log("in delete")
    console.log(d);
    this.service.deleteHotel(d).subscribe((res)=>{
        //this.router.navigate(['adminHome']);
        this.ngOnInit();
    })
  }

  deleteroom(d)
  {
    this.service.deleteRoom(d).subscribe((res)=>{
     this.show=true
      this.details(JSON.parse(sessionStorage['hotelId']));
      delete sessionStorage['hotelId']
    })
  }

  details(hotelId)
  {
 
   sessionStorage['hotelId']= JSON.stringify(hotelId)
   this.show=true;
   this.service.getRooms(hotelId).subscribe((res)=>{
     this.data=res;
   })
  
  }

  edit(data)
  {
    sessionStorage['edit']=JSON.stringify(data)
    this.router.navigate(['editHotel'])
  }

  editroom(data)
  {
    sessionStorage['editRoom']=JSON.stringify(data)
    this.router.navigate(['editroom'])
  }

  ngOnInit() 
  {
    this.service.getAllHotels().subscribe((res)=>{
      this.data=res;
      
      console.log(res);
    }
  )
  }
  home()
  {
    this.show=false;
    this.ngOnInit();
  }

}
