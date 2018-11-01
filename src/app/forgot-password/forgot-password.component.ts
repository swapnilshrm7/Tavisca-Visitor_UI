import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
forgotPasswordForm_Id: FormGroup;
forgotPasswordForm_Otp: FormGroup;
displayNext : boolean = false;
otp: number;
submitted_Id= false;
submitted_Otp = false;
otpAndId: {};
employeeId: string; 
constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
userId: {};
response: any;
ngOnInit() {
  this.forgotPasswordForm_Id =this.formBuilder.group({ 
    employeeId: this.employeeId
    }); 
    this.forgotPasswordForm_Otp =this.formBuilder.group({ 
      otp: this.otp
      }); 
  }

GetId() {  
  this.userId = {
    "UserInput": this.employeeId
  };
  alert(this.userId["UserInput"]);
  this.displayNext = true;
  this.http.put('https://localhost:44303/api/PasswordManipulation/ForgotPassword_Otp',this.userId).subscribe((response) => {
    this.response = response;  
    console.log(this.response);
  }); 
}

  ValidateOtp() {   
    this.otpAndId = {
      "UserId": this.employeeId,
      "Otp": this.otp 
    };
    this.http.put('https://localhost:44303/api/PasswordManipulation/ForgotPassword_Validation',this.otpAndId)
    .subscribe((response) => {
      this.response = response; 
      if(this.response == true)
      {  
        location.replace('http://localhost:4200/askNewPassword');
      }
    }) ;
  }
get f_Id() { return this.forgotPasswordForm_Id.controls; }
get f_Otp() { return this.forgotPasswordForm_Otp.controls; }

onSubmit_Id() { 
  this.submitted_Id = true;
  if (this.forgotPasswordForm_Id.invalid) {
  return;
  }
  }
  onSubmit_Otp() { 
    this.submitted_Otp = true;
    if (this.forgotPasswordForm_Otp.invalid) {
    return;
    }
    }
}
