import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  userid: string = "";
  password: string = "";
  loginInput = {};
  response: any;
  returnUrl: string;
  showSpinner: boolean = true;
  validationMessage: string = '';
  constructor(private spinner: NgxSpinnerService, private formBuilder: FormBuilder, private svc: TestService, private http: HttpClient) { 
  }

  ngOnInit() {
   
    this.loginForm = this.formBuilder.group({
      userid: this.userid,
      password: this.password
    });
    window.history.forward();
  }

  Validations() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  Authentication() {
    this.loginInput = {
      "UserId": this.userid,
      "Password": this.password
    };
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/User/Login', this.loginInput)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
        if (this.response == false) {
          this.validationMessage = "EmployeeId or Password not valid! Please try again with correct credentials";
          console.log(this.validationMessage);
        }
        if (this.response == true) {
          console.log(this.validationMessage);
          sessionStorage.setItem('loggedInEmployeeId', this.userid);
          location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/welcomePage');
        } 
      })
  }
  ForgotPassword() {
    location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/forgotPassword');
  }

  refresh() {
    location.reload();
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }
}