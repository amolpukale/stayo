import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  addHotel(hotel,image)
  {
    console.log("in service")
    console.log(hotel);
    console.log(image)
    const formData=new FormData();
    // formData.append("hotelName",hotel.hotelName)
    // formData.append("address",hotel.address)
    // formData.append("city",hotel.city)
    // formData.append("state",hotel.state)
    // formData.append("pincode",hotel.pincode)
    // formData.append("landline",hotel.landline)
    // formData.append("mail",hotel.mail)
    // formData.append("website",hotel.website)
    // formData.append("features",hotel.features)
     formData.append("image",image)
    return this.http.post("http://localhost:8080/DacAug19/admin/addhotel",hotel);
  }

  addRoom(room,id:number)
  {
    console.log("in service")
    console.log(room);
    return this.http.post("http://localhost:8080/DacAug19/admin/addroom/"+id,room);
  }

  getAllHotels()
  {
    return this.http.get("http://localhost:8080/DacAug19/admin");
  }

  deleteHotel(id:number)
  {
    return this.http.get("http://localhost:8080/DacAug19/admin/delete/"+id);
  }

  updateHotel(data,hotelId)
  {
    return this.http.post("http://localhost:8080/DacAug19/admin/updateHotel/"+hotelId,data)
  }

  getRooms(hotelId)
  {
    return this.http.post("http://localhost:8080/DacAug19/admin/getRooms",hotelId)
  }

  deleteRoom(id:number)
  {
    return this.http.get("http://localhost:8080/DacAug19/admin/deleteRoom/"+id);

  }
  updateRoom(data,hotelid)
  {
   
    return this.http.post("http://localhost:8080/DacAug19/admin/updateRoom/"+hotelid,data)
  }

}
