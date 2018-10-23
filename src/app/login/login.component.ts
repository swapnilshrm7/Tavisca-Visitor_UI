import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid : string;
  password : string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  ValidateUser() {
    this.http.put("https://localhost:44303/api/Admin",
      {
        "userid": this.userid,
        "password": this.password
      })
      .subscribe(
        data => {
            console.log("PUT Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
      ); 
  }

}
