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

}
