import { Component, OnInit } from '@angular/core'; 
import { Guard } from '../shared/guard.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GuardService } from '../shared/guard.service';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-add-guard',
  templateUrl: './add-guard.component.html',
  styleUrls: ['./add-guard.component.css']
})
 export class AddGuardComponent implements OnInit { 
  guard: Guard ;
  emailPattern: any;
  userid: string;
  test: any ;
  guardName: string; 
  emailid: string; 
  permanentAddress: string;
  localAddress: string;
  emergencyPerson: string;
  emergencyContact: string;
  dob: Date;
  bloodGrp: string;
  contact: string ;
  gender: string; 
  doj: Date;
  remark: string;
  medicalSpecification: string
  secondaryContact: string;
validationMessage: string = '';
  constructor(private guardService: GuardService, private http: HttpClient) { 
   }  
   numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true; 
  }
  ngOnInit() { 
    if(sessionStorage.getItem('loggedInEmployeeId') == null || sessionStorage.getItem('loggedInEmployeeId') == '')
    {
      location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/login');
    } 
    this.emailPattern= "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"; 
    
  }
   resetForm(form?: NgForm)
   {
     if(form != null)
     form.reset();
     this.userid= '';
     this.guardName= '';
     this.emailid= '';
     this.permanentAddress= '';
     this.localAddress= '';
     this.emergencyContact= '';
     this.emergencyPerson= '';
     this.dob= null;
     this.bloodGrp= '';
     this.contact= '';
     this.gender= '';
     this.doj= null;
     this.remark= '';
     this.medicalSpecification= '';
  
   }
  
  OnSubmit(form: NgForm)
  {  
    this.guard={
      GuardId:this.userid,
      GuardName : this.guardName,
      EmailId: this.emailid,
      PermanentAddress: this.permanentAddress,
      LocalAddress: this.localAddress,
      EmergencyContactNumber: this.emergencyContact,
      EmergencyContactPerson: this.emergencyPerson,
      DateOfBirth: this.dob,
      BloodGroup: this.bloodGrp,
      PrimaryContactNumber: this.contact,
      Gender: this.gender,
      DateOfJoining: this.doj,
      Remark :this.remark,
      MedicalSpecification:this.medicalSpecification,
      SecondaryContactNumber :this.secondaryContact
    }; 
    console.log(this.guard);
    console.log("Date Of Joining-- "+this.doj);
    console.log("Date Of Joining value-- "+this.doj.valueOf());
    var diff = Math.abs(new Date(this.doj).getTime() - new Date(this.dob).getTime());
    console.log("Difference-- "+diff);
     var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
     console.log("Number of days--- "+ diffDays);
    if(diff < 6700)
    {
      this.validationMessage = "Guard must have age equal to or more than 19 years.";
    } 
    this.http.post('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/AddGuard',this.guard)
    .subscribe((response) => {  
      
    console.log(this.guard);
      console.log(response); 
      if(response == true)
      {   
        this.resetForm(); 
        this.validationMessage = "Guard Added successfully"
      }
    })  
  } 
  }