import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  refresh() {
    location.reload();
    }  

  ResetPassword() {
location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/resetPassword');
  }
  Logout() {
    location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/login');
      }
}
