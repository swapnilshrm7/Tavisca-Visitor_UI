import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, EmailValidator } from '@angular/forms'; 
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-guard',
  templateUrl: './add-guard.component.html',
  styleUrls: ['./add-guard.component.css']
})
 export class AddGuardComponent implements OnInit { 
  submitted = false;
  loginForm: FormGroup;
  userid: string = "";
  guardName: string = ""; 
  emailid: string; 
  permanentAddress: string;
  returnUrl: string;
  localAddress: string;
  emergencyContact: string;
  dob: Date;
  bloodGrp: string;
  contact: string
  response: any;
  gender: string;
  emergencyPerson: string;
  loginInput= {};
  doj: Date;
  remark: string;
  medicalSpecification: string
  secondaryContact: string;
  constructor(private formBuilder: FormBuilder, private svc: TestService, private http: HttpClient) { 
    
   }
  
  ngOnInit() {
  this.loginForm =this.formBuilder.group({
  userid: this.userid,
  guardName: this.guardName,
  emailid: this.emailid,
  localAddress: this.localAddress,
  permanentAddress: this.permanentAddress,
  emergencyContact: this.emergencyContact,
  emergencyPerson: this.emergencyPerson,
  contact: this.contact,
  dob: this.dob,
  gender: this.gender,
  bloodGrp: this.bloodGrp,
  doj: this.doj,
  remark: this.remark,
  medicalSpecification: this.medicalSpecification,
  secondaryContact: this.secondaryContact 
  }); 
  }
  
  Validations(){

  }

  Authentication() {   
    this.loginInput = {
      "GuardId": this.userid,
      "GuardName":this.guardName,
      "EmailId":this.emailid,
      "Gender": this.gender,
      "DateOfBirth": this.dob,
      "LocalAddress": this.localAddress,
      "PermanentAddress": this.permanentAddress,
      "EmergencyContactNumber": this.emergencyContact,
      "EmergencyContactPerson": this.emergencyPerson,
      "PrimaryContactNumber": this.contact,
      "SecondaryContactNumber": this.secondaryContact,
      "DateOfJoining": this.doj,
      "Remark": this.remark,
      "BloodGroup": this.bloodGrp,
      "MedicalSpecification": this.medicalSpecification
    }; 
    this.http.post('https://localhost:44303/api/Employee/AddEmployee', this.loginInput)
      .subscribe((response) => { 
        console.log(this.response); 
        if(this.response == true)
        { 
          location.replace('http://localhost:4200/welcomePage');
        }
      }) 
  } 

  refresh() {
  location.reload();
  }
  get f() { return this.loginForm.controls; }
   
  onSubmit() { 
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      guardName: ['', [Validators.required]],
      emailid: ['',[Validators.required, Validators.email]],
      localAddress: ['',[Validators.required]],
      permanentAddress: ['',[Validators.required]],
      emergencyContact: ['',[Validators.required ]],
      emergencyPerson: ['',[Validators.required]],
      contact: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      bloodGrp: ['',[Validators.required]],
      doj:['',[Validators.required]] 
      }); 
  this.submitted = true;
  if (this.loginForm.invalid) {
  return;
  }
  }
  }