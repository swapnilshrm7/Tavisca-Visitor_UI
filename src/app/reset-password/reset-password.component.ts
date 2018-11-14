import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  oldPswd: string;
  newPswd: string;
  confirmPswd: string;
  submitted = false;
  credentials= {};
  response: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

ngOnInit() {
  if(sessionStorage.getItem('loggedInEmployeeId') == null || sessionStorage.getItem('loggedInEmployeeId') == '')
    {
      location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/login');
    } 
    this.resetPasswordForm =this.formBuilder.group({
      oldPswd: this.oldPswd,
      newPswd: this.newPswd,
      confirmPswd: this.confirmPswd
      }); 
  }

  Validations(){
    this.resetPasswordForm = this.formBuilder.group({
      oldPswd: ['', Validators.required],
      newPswd: ['', [Validators.required, Validators.minLength(6)]],
      confirmPswd: ['', [Validators.required, Validators.minLength(6)]]
    });  
    }

Authentication(){
  this.credentials = {
    "UserId": this.oldPswd,
    "Password":sessionStorage.getItem('loggedInEmployeeId')
  }; 
  this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/User/Login',this.credentials)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response); 
      if(this.response == true)
      {  
        this.CheckIfPasswordEnteredCorrectly();
      }
    }) 
}  

CheckIfPasswordEnteredCorrectly(){
if(this.newPswd == this.confirmPswd) {
  alert('Done!');
  location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/welcomePage');
  }
}

get f() { return this.resetPasswordForm.controls; }

onSubmit() { 
    this.submitted = true;
      if (this.resetPasswordForm.invalid) {
      return;
      }
  }

}
