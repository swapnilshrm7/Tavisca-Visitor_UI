import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { DataService } from '../data.service';
import { VisitorLogComponent } from '../visitor-log/visitor-log.component';

@Component({
  selector: 'app-visitor-side-nav',
  templateUrl: './visitor-side-nav.component.html',
  styleUrls: ['./visitor-side-nav.component.css']
})
export class VisitorSideNavComponent implements OnInit {

  response: any;
  nameIsCollapsed : boolean = true;
  purposeIsCollapsed : boolean = true;
  meatingIsCollapsed : boolean = true;
  dateIsCollapsed : boolean = true;
  dateNameIsCollapsed : boolean = true;
  name : string = "";
  purpose : string = "";
  fromDate : Date;
  toDate : Date;
  fromTime: Time;
  toTime: Time;
  nameObject= {};
  meetingPerson: string;
  currentDate: Date;
  constructor(private http: HttpClient,private dataService: DataService) { }

  visitorObj = new VisitorLogComponent(this.http, this.dataService);

  nameToggleCollapse() {
    this.nameIsCollapsed = !this.nameIsCollapsed;
    this.purposeIsCollapsed = true;
    this.meatingIsCollapsed = true;
    this.dateIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  purposeToggleCollapse() {
    this.purposeIsCollapsed = !this.purposeIsCollapsed;
    this.nameIsCollapsed = true;
    this.meatingIsCollapsed = true;
    this.dateIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  meatingToggleCollapse() {
    this.meatingIsCollapsed = !this.meatingIsCollapsed;
    this.purposeIsCollapsed = true;
    this.nameIsCollapsed = true;
    this.dateIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  dateToggleCollapse() {
    this.dateIsCollapsed = !this.dateIsCollapsed;
    this.purposeIsCollapsed = true;
    this.nameIsCollapsed = true;
    this.meatingIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  dateNameToggleCollapse() {
    this.dateNameIsCollapsed = !this.dateNameIsCollapsed;
    this.nameIsCollapsed = true;
    this.purposeIsCollapsed = true;
    this.meatingIsCollapsed = true;
    this.dateIsCollapsed = true;
  }

  getByVisitorName() {
    this.nameObject = {
      "UserInput": this.name 
    }; 
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Visitors/LogsByName',this.nameObject)
    .subscribe((response) => {
      this.response = response; 
      this.dataService.setResponseOfUniqueGuardByName(response);  
      this.visitorObj.SearchByName();
    }) ; 
  }

  getByPurpose() {
    this.nameObject = {
      "UserInput": this.purpose 
    }; 
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Visitors/PurposeOfVisit',this.nameObject)
    .subscribe((response) => {
      this.response = response; 
      this.dataService.setResponseOfUniqueGuardByName(response);  
      this.visitorObj.SearchByPurpose();
    }) ; 
  }

  getByMeatingPersonName() {
    this.nameObject = {
      "UserInput": this.meetingPerson 
    }; 
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Visitors/LogsByMeetingPerson',this.nameObject)
    .subscribe((response) => {
      this.response = response; 
      this.dataService.setResponseOfUniqueGuardByName(response);  
      this.visitorObj.SearchByMeetingPerson();
    }) ; 
  }

  getByDate() {

  }

  getByDateAndName() {
    
  }

  ngOnInit() {
    this.currentDate = new Date();
  }

}
