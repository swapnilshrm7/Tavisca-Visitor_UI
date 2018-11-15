import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators, FormsModule, EmailValidator } from '@angular/forms'; 
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  userid: string = "";
  employeeName: string = ""; 
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
  location: string;
  loginInput= {};
  doj: Date;
  remark: string;
  medicalSpecification: string
  secondaryContact: string;
  constructor(private formBuilder: FormBuilder, private svc: TestService, private http: HttpClient) { }

  ngOnInit() { 
    if(sessionStorage.getItem('loggedInEmployeeId') == null || sessionStorage.getItem('loggedInEmployeeId') == '')
    {
      location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/login');
    }
    this.registerForm =this.formBuilder.group({
      userid: this.userid,
      employeeName: this.employeeName,
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
      secondaryContact: this.secondaryContact,
      location: this.location 
      }); 
  }

  Authentication() {   
    this.loginInput = {
      "EmployeeId": this.userid,
      "EmployeeName":this.employeeName,
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
      "MedicalSpecification": this.medicalSpecification,
      
    }; 
    this.http.post('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/AddGuard', this.loginInput)
      .subscribe((response) => { 
        console.log(this.response); 
        if(this.response == true)
        { 
          location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/welcomePage');
        }
      }) 
  } 
}
 