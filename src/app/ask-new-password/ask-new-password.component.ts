import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ask-new-password',
  templateUrl: './ask-new-password.component.html',
  styleUrls: ['./ask-new-password.component.css']
})
export class AskNewPasswordComponent implements OnInit {
  newPasswordForm: FormGroup;
  newPswd: string; 
  IdAndPassword: {};
  confirmPswd: string;
  validationMessage: string;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.newPasswordForm =this.formBuilder.group({
      newPswd: this.newPswd,
      confirmPswd: this.confirmPswd 
      }); 
      console.log(sessionStorage.getItem('forgotPasswordEmployeeId'));
  }
  SetNewPassword() {
    if(this.newPswd == this.confirmPswd)
    {
    this.IdAndPassword = {
      "UserId":sessionStorage.getItem('forgotPasswordEmployeeId'),
      "Password":this.newPswd 
    };
    this.http.put('https://localhost:44303/api/PasswordManipulation/ForgotPassword_ResetPassword',this.IdAndPassword) .subscribe((response) => { 
      if (response == false) {
        this.validationMessage = "Some Error Occured!"; 
      }
      if (response == true) {  
        location.replace('http://localhost:4200/welcomePage');
      } 
    }) 
  }
  else {
    this.validationMessage = "Passwords do not match!";
  }
  }
  get f() { return this.newPasswordForm.controls; }
}
