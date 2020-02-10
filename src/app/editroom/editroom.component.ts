import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editroom',
  templateUrl: './editroom.component.html',
  styleUrls: ['./editroom.component.css']
})
export class EditroomComponent implements OnInit {
formdata;
data;
hotelId;
  constructor(private service:AdminService,private router:Router) { 
    this.data=JSON.parse(sessionStorage['editRoom'])
    this.hotelId=JSON.parse(sessionStorage['hotelId']);
    console.log(this.data)
    console.log(this.hotelId)
  }

  ngOnInit() {
  }
  update(myForm)
  {
    this.formdata=myForm.form.value;
    console.log(this.formdata)
    this.service.updateRoom(this.formdata,this.hotelId.hotelId).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['adminHome'])
    })
  }

}
