import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
name;
email;
phone;
role;
  constructor() {
    this.name=sessionStorage['username']
    this.email=sessionStorage['email']
    this.phone=sessionStorage['phone']
    this.role=sessionStorage['role']
   }

  ngOnInit() {
  }

}
