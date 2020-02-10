import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(user)
  {
    console.log("in service")
    console.log(user);
    return this.http.post("http://localhost:8080/DacAug19/user/register",user);
  }

  forgotpass(user)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/forgot",user);
  }

  confirmOtp(otp)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/confirmOtp",otp);
  }

  login(user)
  {
    console.log("in login method")
    console.log(user)
    return this.http.post("http://localhost:8080/DacAug19/user/login",user);
  }


  resetPassword(data)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/resetpassword",data);
  }

  contactUs(contactData)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/contactUs",contactData);

  }

  getBookings(id)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/getBooking",id);

  }

  changeStatusToAvailable()
  {
    return this.http.get("http://localhost:8080/DacAug19/user");

  }
  cancelBooking(data)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/cancelbooking",data);
  }

  makePayment(data,roomid)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/pay/"+roomid,data);
  }

}
