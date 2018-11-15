import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http'; 
import { FormBuilder, FormGroup, Validators, FormsModule, EmailValidator } from '@angular/forms'; 

@Component({
  selector: 'app-edit-guard-by-id',
  templateUrl: './edit-guard-by-id.component.html',
  styleUrls: ['./edit-guard-by-id.component.css']
})
export class EditGuardByIdComponent implements OnInit {
  editForm: FormGroup;
  guardId: string = "";
  guardName: string = "";  
  emailId: string;
  gender: string;
  dateOfResignation: Date;
  localAddress: string
  permanentAddress: string
  emergencyContactPerson: string
  emergencyContact: number
  contact: number
  secondaryContactNumber: number
  remark: string
  medicalSpecification: string
  guardStatus: string
  dateOfBirth: Date;
  dateOfJoining: Date;
  bloodGroup: string;
  constructor(private formBuilder: FormBuilder,private dataService: DataService, private http: HttpClient) { }
  input1:any;
editData={};
  ngOnInit() {  
    if(sessionStorage.getItem('loggedInEmployeeId') == null || sessionStorage.getItem('loggedInEmployeeId') == '')
    {
      location.replace('http://localhost:4200/login');
    } 
    this.editForm =this.formBuilder.group({
      guardId: this.guardId,
      guardName: this.guardName,
      emailId: this.emailId,
      gender: this.gender,
      dateOfResignation: this.dateOfResignation,
      localAddress: this.localAddress,
      permanentAddress: this.permanentAddress,
      emergencyContactPerson: this.emergencyContactPerson,
      emergencyContact: this.emergencyContact,
      contact: this.contact,
      secondaryContactNumber: this.secondaryContactNumber,
      remark: this.remark,
      medicalSpecification: this.medicalSpecification,
      guardStatus: this.guardStatus,
      bloodGroup: this.bloodGroup,
      dateOfBirth: this.dateOfBirth,
      dateOfJoining: this.dateOfJoining
    });
  
  this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/GuardById', this.dataService.getInput())
  .subscribe((response) => {  
    this.dataService.res = response;  
    this.dataService.setResponseOfEdit(response);  
    this.input1 = this.dataService.getResponseOfEdit();  
    console.log(this.input1["guardId"] );
  });    
   } 

  EditGuard() {
 this.editData = {
  "GuardId": this.input1["guardId"],
  "GuardName":this.input1["guardName"],
  "EmailId":this.input1["emailId"],
  "Gender": this.input1["gender"],
  "DateOfResignation": this.input1["dateOfResignation"],
  "LocalAddress": this.input1["localAddress"],
  "PermanentAddress": this.input1["permanentAddress"],
  "EmergencyContactNumber": this.input1["emergencyContactNumber"],
  "EmergencyContactPerson": this.input1["emergencyContactPerson"],
  "PrimaryContactNumber":this.input1["primaryContactNumber"],
  "SecondaryContactNumber": this.input1["secondaryContactNumber"], 
  "Remark": this.input1["remark"],
  "MedicalSpecification":  this.input1["medicalSpecification"],
  "GuardStatus": this.input1["guardStatus"],
  "DateOfBirth": this.input1["dateOfBirth"],
  "DateOfJoining": this.input1["dateOfJoining"],
  "BloodGroup": this.input1["bloodGroup"] 
    }; 
    console.log(this.editData);
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/EditGuard', this.editData)
      .subscribe((response) => {  
        console.log(response)
        if(response == true)
        { 
          
        }
      }) 
  }
}
