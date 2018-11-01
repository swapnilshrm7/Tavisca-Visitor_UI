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
  
  this.http.put('https://localhost:44303/api/Guard/GuardById', this.dataService.getInput())
  .subscribe((response) => {  
    this.dataService.res = response;  
    this.dataService.setResponseOfEdit(response);  
    this.input1 = this.dataService.getResponseOfEdit();  
    console.log(this.input1["bloodGroup"] );
  });   
  this.editForm =this.formBuilder.group({ 
    guardId: this.input1["guardId"],
    guardName:this.input1["guardName"],
    emailId:this.input1["emailId"],
    gender: this.input1["gender"],
    dateOfResignation: this.input1["dateOfResignation"],
    localAddress: this.input1["localAddress"],
    permanentAddress: this.input1["permanentAddress"],
    emergencyContactNumber: this.input1["emergencyContactNumber"],
    emergencyContactPerson: this.input1["emergencyContactPerson"],
    primaryContactNumber: this.input1["primaryContactNumber"],
    secondaryContactNumber: this.input1["secondaryContactNumber"], 
    remark: this.input1["remark"],
    medicalSpecification: this.input1["medicalSpecification"],
    guardStatus: this.input1["guardStatus"],
    dateOfBirth: this.input1["dateOfBirth"],
    dateOfJoining: this.input1["dateOfJoining"],
    bloodGroup: this.input1["bloodGroup"] 
});
  } 

  EditGuard() {
 this.editData = {
  "GuardId": this.guardId,
  "GuardName":this.guardName,
  "EmailId":this.emailId,
  "Gender": this.gender,
  "DateOfResignation": this.dateOfResignation,
  "LocalAddress": this.localAddress,
  "PermanentAddress": this.permanentAddress,
  "EmergencyContactNumber": this.emergencyContact,
  "EmergencyContactPerson": this.emergencyContactPerson,
  "PrimaryContactNumber": this.contact,
  "SecondaryContactNumber": this.secondaryContactNumber, 
  "Remark": this.remark,
  "MedicalSpecification": this.medicalSpecification,
  "GuardStatus": this.guardStatus,
  "DateOfBirth": this.dateOfBirth,
  "DateOfJoining": this.dateOfJoining,
  "BloodGroup": this.bloodGroup 
    }; 
    this.http.put('https://localhost:44303/api/Guard/EditGuard', this.editData)
      .subscribe((response) => {  
        if(response == true)
        { 
          
        }
      }) 
  }
}
