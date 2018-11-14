import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-unique-employees',
  templateUrl: './unique-employees.component.html',
  styleUrls: ['./unique-employees.component.css']
})
export class UniqueEmployeesComponent implements OnInit {

constructor(private http: HttpClient) { }
 employees= {};  
 countOfEmployees : number;
ngOnInit() { 
  if(sessionStorage.getItem('loggedInEmployeeId') == null || sessionStorage.getItem('loggedInEmployeeId') == '')
    {
      location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/login');
    } 
     this.http.get('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Employee/AllEmployees')
     .subscribe((response) => {
      console.log(response);  
      this.employees = response; 
      this.countOfEmployees = Object.keys(this.employees).length;
    });
    }  
} 