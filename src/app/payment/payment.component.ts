import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
data;
  rate=sessionStorage['price']
  
  constructor(private service:UserService,private router:Router) { }

  pay(myForm)
  {
  // let price=JSON.parse(this.rate)
    let roomid=sessionStorage['roomid']
    //console.log("in pay")
this.data=myForm.form.value;
    this.service.makePayment(this.data,roomid).subscribe((res)=>{
     // console.log(res)
      
      alert("Booking done...payment successful")
      this.router.navigate(['home'])


    })

    
  }
  booked()
  {
    alert("Booking successful")
      this.router.navigate(['home'])
  }
  ngOnInit() {
  }

}
