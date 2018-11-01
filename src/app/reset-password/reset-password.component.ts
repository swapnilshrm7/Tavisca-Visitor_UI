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
  this.http.put('https://localhost:44303/api/User/Login',this.credentials)
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
  location.replace('http://localhost:4200/welcomePage');
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
