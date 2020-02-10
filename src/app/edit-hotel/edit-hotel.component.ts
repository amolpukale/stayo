import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit {
 
  formdata;
  data;
  constructor(private service:AdminService,private router:Router) 
  { 
     this.data=JSON.parse(sessionStorage['edit'])
    console.log(this.data)
  }

  ngOnInit() {
   // let data=JSON.parse(sessionStorage['edit'])
   // console.log(data)
  }

  update(myForm)
  {
    this.formdata=myForm.form.value;
    this.service.updateHotel(this.formdata,this.data.hotelId).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['adminHome'])
    })
  }

}
