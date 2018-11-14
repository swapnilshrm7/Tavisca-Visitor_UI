import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http'; 
import { Guard } from './guard.model';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
readonly rootUrl = 'https://localhost:44303';
  constructor(private http: HttpClient) { }

registerGuard(guard: Guard) {
// const body: Guard = {
//   userid: guard.userid,
//   guardName: guard.guardName, 
//   emailid: guard.emailid, 
//   permanentAddress: guard.permanentAddress,
//   localAddress: guard.localAddress,
//   emergencyPerson: guard.emergencyPerson,
//   emergencyContact: guard.emergencyContact,
//   dob: guard.dob,
//   bloodGrp: guard.bloodGrp,
//   contact:guard.contact,
//   gender: guard.gender, 
//   doj: guard.doj,
//   remark: guard.remark,
//   medicalSpecification: guard.medicalSpecification,
//   secondaryContact: guard.secondaryContact
//}
return this.http.post('https://localhost:44303/api/Employee/AddEmployee',guard)
      .subscribe((response) => {   
        if(response == true)
        { 
          location.replace('http://localhost:4200/welcomePage');
        }
      }) 
 
}

}
