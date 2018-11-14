import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { DataService } from '../data.service';
import { UniqueGuardsComponent } from '../unique-guards/unique-guards.component';
import { GuardLogsComponent } from '../guard-logs/guard-logs.component';

@Component({
  selector: 'app-guard-side-nav',
  templateUrl: './guard-side-nav.component.html',
  styleUrls: ['./guard-side-nav.component.css']
})
export class GuardSideNavComponent implements OnInit {

  nameIsCollapsed : boolean = true;
  dateIsCollapsed : boolean = true;
  name : string = "";
  fromDate : Date;
  toDate : Date;
  fromTime: Time;
  toTime: Time;
  nameObject= {};
  dateObject= {};
  response: any;
  constructor( private http: HttpClient,private dataService: DataService) { }

  guardObj = new GuardLogsComponent(this.http, this.dataService);

  input1:any;
  ngOnInit() { 
    name: this.name;
  }

  nameToggleCollapse() {
    this.nameIsCollapsed = !this.nameIsCollapsed;
    this.dateIsCollapsed = true;
  }

  dateToggleCollapse() {
    this.dateIsCollapsed = !this.dateIsCollapsed;
    this.nameIsCollapsed = true;
  }
  
  getByGuardName() { 
    this.nameObject = {
      "UserInput": this.name 
    }; 
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/ByName',this.nameObject)
    .subscribe((response) => {
      this.response = response; 
      this.dataService.setResponseOfUniqueGuardByName(response);  
      this.guardObj.SearchByName();
    }) ; 
  }

  getByDate() {
    this.dateObject = {
      "fromDate": this.fromDate,
      "toDate": this.toDate,
      "fromTime": this.fromTime,
      "toTime": this.toTime 
    }; 
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/DateAndTime',this.dateObject)
    .subscribe((response) => {
      this.response = response; 
      console.log(response);
      this.dataService.setResponseOfUniqueGuardByName(response);  
      this.guardObj.SearchByDate();
    }) ;
  }

 
}
