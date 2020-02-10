import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {

  constructor(private http:HttpClient) { }

  search(hotel)
  {
    console.log("in service")
    console.log(hotel);
    return this.http.post("http://localhost:8080/DacAug19/user/searchHotel",hotel);
  }

  bookHotel(hotel)
  {
    console.log("in service")
    console.log(hotel)
    return this.http.post("http://localhost:8080/DacAug19/user/getRoomList",hotel)
  }



  book(booking,user,room)
  {
    // const formData=new FormData();
    // formData.append("dateFrom",booking.dateFrom)
    // formData.append("dateTo",booking.dateTo)
    // formData.append("noOfAdults",booking.noOfAdults)
    // formData.append("noOfChild",booking.noOfChild)
    // formData.append("user",user)
    // formData.append("room",room)
    return this.http.post("http://localhost:8080/DacAug19/user/book/"+user+"/"+room,booking)
  }
}
