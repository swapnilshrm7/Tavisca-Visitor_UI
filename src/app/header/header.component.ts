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
    console.log('Hi');
location.replace('http://localhost:4200/resetPassword');
  }
  Logout() {
    location.replace('http://localhost:4200/login');
      }
}
