import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-insert',
  templateUrl: './hotel-insert.component.html',
  styleUrls: ['./hotel-insert.component.css']
})
export class HotelInsertComponent implements OnInit {
data;
image:any;
  constructor(private service:AdminService,private router:Router) { }

  onSelectFile(event) {
    alert("image upload done");
    this.image = event.target.files[0];
}

add(myForm)
{
 console.log(myForm.form.value) ;
this.data=myForm.form.value;
this.service.addHotel(this.data,this.image).subscribe((res)=>{
  this.router.navigate(['adminHome']);
})
}

  ngOnInit() {
  }

}
