import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HotelInsertComponent } from './hotel-insert/hotel-insert.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ForgetComponent } from './forget/forget.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmOtpComponent } from './confirm-otp/confirm-otp.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { RoomInsertComponent } from './room-insert/room-insert.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { EditHotelComponent } from './edit-hotel/edit-hotel.component';
import { EditroomComponent } from './editroom/editroom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ReservationComponent,
    HotelInsertComponent,
    ContactUsComponent,
    AdminComponent,
    AboutComponent,
    ForgetComponent,
    NewpasswordComponent,
    ConfirmOtpComponent,
    AdminHomeComponent,
    CustomerHomeComponent,
    RoomInsertComponent,
    PaymentComponent,
    ProfileComponent,
    BookingsComponent,
    EditHotelComponent,
    EditroomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent},
      {path:"reservation",component:ReservationComponent},
      {path:"hotel-insert",component:HotelInsertComponent},
      {path:"room-insert",component:RoomInsertComponent},
      {path:"contactUs",component:ContactUsComponent},
      {path:"admin",component:AdminComponent},
      {path:"about",component:AboutComponent},
      {path:"forget",component:ForgetComponent},
      {path:"newpassword",component:NewpasswordComponent},
      {path:"confirmOtp",component:ConfirmOtpComponent},
      {path:'adminHome',component:AdminHomeComponent},
      {path:'customerHome',component:CustomerHomeComponent},
      {path:"payment",component:PaymentComponent},
      {path:"profile",component:ProfileComponent},
      {path:"booking",component:BookingsComponent},
      {path:"editHotel",component:EditHotelComponent},
      {path:"editroom",component:EditroomComponent}

        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
