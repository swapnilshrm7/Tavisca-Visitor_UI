import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-logs',
  templateUrl: './employee-logs.component.html',
  styleUrls: ['./employee-logs.component.css']
})
export class EmployeeLogsComponent implements OnInit {

  constructor(private http: HttpClient, private dataService: DataService) { }
  employees = {}; 
  excelInput = {}; 
  url: {};
  count : number;
  error: string = "false";
ngOnInit() {   
  if(sessionStorage.getItem('loggedInEmployeeId') == null || sessionStorage.getItem('loggedInEmployeeId') == '')
    {
      location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/login');
    } 
this.http.get('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Employee/EmployeeLogs')
      .subscribe((response) => {
      this.dataService.setResponseOfUniqueGuardByName(response);
      this.employees = this.dataService.getResponseOfUniqueGuardByName();
      console.log( this.dataService.getResponseOfUniqueGuardByName()); 
      this.count = Object.keys(this.dataService.getResponseOfUniqueGuardByName()).length;
      if (this.employees[0]["error"] == "true") {
        this.error = "true";
      }
    });
  } 

  SearchByName() { 
    this.employees = {}; 
    if(this.dataService.getResponseOfUniqueGuardByName()!=null)
    { 
      this.employees = this.dataService.getResponseOfUniqueGuardByName(); 
    } 
  }
  SearchByDate() { 
    this.employees = {}; 
    if(this.dataService.getResponseOfUniqueGuardByName()!=null)
    { 
      this.employees = this.dataService.getResponseOfUniqueGuardByName(); 
    } 
  }
  SearchByDateAndName() {
    this.employees = {}; 
    if(this.dataService.getResponseOfUniqueGuardByName()!=null)
    { 
      this.employees = this.dataService.getResponseOfUniqueGuardByName(); 
    } 
  }
  DownloadExcel() {
    this.excelInput = {"UserInput": "Employees"};
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Admin/Excel',this.excelInput)
             .subscribe((response) => {
              this.Open();
            });
  }
  Open()
  {
    window.open("https://s3.ap-south-1.amazonaws.com/visitors-excel/Item1.xlsx", "_blank");
  }
}
