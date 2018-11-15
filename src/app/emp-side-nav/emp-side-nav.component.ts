import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { EmployeeLogsComponent } from '../employee-logs/employee-logs.component';

@Component({
  selector: 'app-emp-side-nav',
  templateUrl: './emp-side-nav.component.html',
  styleUrls: ['./emp-side-nav.component.css']
})
export class EmpSideNavComponent implements OnInit {
  nameIsCollapsed: boolean = true;
  idIsCollapsed: boolean = true;
  dateIsCollapsed: boolean = true;
  dateNameIsCollapsed: boolean = true;
  name: string = "";
  id: number;
  fromDate: Date;
  toDate: Date;
  fromTime: Time;
  toTime: Time;
  nameObject: any;
  response: any;
  employeeId: any;
  dateObject: any;
  dateAndNameObject: any;
  nameOfVisitor: string;
  nameSecondFilter: string;
  fromdateSecondFilter: Date;
  toDateSecondFilter: Date;
  fromTimeSecondFilter: Time;
  toTimeSecondFilter: Time;
  currentDate: Date;
  constructor(private http: HttpClient, private dataService: DataService) { }

  empObj = new EmployeeLogsComponent(this.http, this.dataService);

  nameToggleCollapse() {
    this.nameIsCollapsed = !this.nameIsCollapsed;
    this.idIsCollapsed = true;
    this.dateIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  idToggleCollapse() {
    this.idIsCollapsed = !this.idIsCollapsed;
    this.nameIsCollapsed = true;
    this.dateIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  dateToggleCollapse() {
    this.dateIsCollapsed = !this.dateIsCollapsed;
    this.nameIsCollapsed = true;
    this.idIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  dateNameToggleCollapse() {
    this.dateNameIsCollapsed = !this.dateNameIsCollapsed;
    this.nameIsCollapsed = true;
    this.idIsCollapsed = true;
    this.dateIsCollapsed = true;
  }

  getByEmployeeName() {
    this.nameObject = {
      "UserInput": this.name
    };
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Employee/LogsByName', this.nameObject)
      .subscribe((response) => {
        this.response = response;
        this.dataService.setResponseOfUniqueGuardByName(response);
        this.empObj.SearchByName();
      });
  }

  getById() {
    this.nameObject = {
      "UserInput": this.employeeId
    };
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Employee/LogsByName', this.nameObject)
      .subscribe((response) => {
        this.response = response;
        this.dataService.setResponseOfUniqueGuardByName(response);
        this.empObj.SearchByName();
      });
  }

  getByDate() {
    this.dateObject = {
      "fromDate": this.fromDate,
      "toDate": this.toDate,
      "fromTime": this.fromTime,
      "toTime": this.toTime
    };
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Employee/LogsByDate', this.dateObject)
      .subscribe((response) => {
        this.response = response;
        console.log(response);
        this.dataService.setResponseOfUniqueGuardByName(response);
        this.empObj.SearchByDate();
      });
  }

  getByDateAndName() {
    this.dateAndNameObject = {
      "fromDate": this.fromdateSecondFilter,
      "toDate": this.toDateSecondFilter,
      "fromTime": this.fromTimeSecondFilter,
      "toTime": this.toTimeSecondFilter,
      "nameOfVisitor": this.nameSecondFilter
    };
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Employee/LogsByDateAndName', this.dateAndNameObject)
      .subscribe((response) => {
        this.response = response;
        console.log(response);
        this.dataService.setResponseOfUniqueGuardByName(response);
        this.empObj.SearchByDateAndName();
      });
  }

  ngOnInit() {
    this.currentDate = new Date();
  }

}
