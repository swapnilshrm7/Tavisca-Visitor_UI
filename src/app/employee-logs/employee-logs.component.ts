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
ngOnInit() {   
this.http.get('https://localhost:44303/api/Employee/EmployeeLogs')
             .subscribe((response) => {
              this.dataService.setResponseOfUniqueGuardByName(response);
      this.employees = this.dataService.getResponseOfUniqueGuardByName(); 
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
    this.http.put('https://localhost:44303/api/Admin/Excel',this.excelInput)
             .subscribe((response) => {
              this.Open();
            });
  }
  Open()
  {
    window.open("https://s3.ap-south-1.amazonaws.com/visitors-excel/Item1.xlsx", "_blank");
  }
}
