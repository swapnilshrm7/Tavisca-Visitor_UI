import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms'; 
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; 
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http'; 


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
loginInput= {};
response: any;
returnUrl: string;

constructor(private formBuilder: FormBuilder, private svc: TestService, private http: HttpClient) {
  //svc.GetRequestWithoutParam('https://localhost:44303/api/Guard/Log');
  
 }

ngOnInit() {
this.loginForm =this.formBuilder.group({
userid: this.userid,
password: this.password
}); 
}

Validations(){
this.loginForm = this.formBuilder.group({
userid: ['', Validators.required],
password: ['', [Validators.required, Validators.minLength(6)]]
});  
}

Authentication() {  
  this.loginInput = {
    "UserId": this.userid,
    "Password":this.password
  }; 
  this.http.put('https://localhost:44303/api/User/Login',this.loginInput)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response); 
      if(this.response == true)
      { 
        sessionStorage.setItem('loggedInEmployeeId', this.userid); 
        location.replace('http://localhost:4200/welcomePage');
      }
    }) 
} 
ForgotPassword() {
  location.replace('http://localhost:4200/forgotPassword');
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