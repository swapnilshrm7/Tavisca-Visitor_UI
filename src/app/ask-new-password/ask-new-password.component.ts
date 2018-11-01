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

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.newPasswordForm =this.formBuilder.group({
      newPswd: this.newPswd 
      }); 
  }
  SetNewPassword() {
    this.IdAndPassword = {
      "UserInput":sessionStorage.getItem('loggedInEmployeeId'),
      "Password":this.newPswd 
    };
    this.http.put('https://localhost:44303/api/PasswordManipulation/ForgotPassword_ResetPassword',this.IdAndPassword);
    alert('Done!');
  }
}
