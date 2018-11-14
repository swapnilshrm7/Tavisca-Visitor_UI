import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-guard-logs',
  templateUrl: './guard-logs.component.html',
  styleUrls: ['./guard-logs.component.css']
})
export class GuardLogsComponent implements OnInit {

  constructor(private http: HttpClient, private dataService: DataService) { }
  guardLogs = {};   
  excelInput= {};
  count: number;
  ngOnInit() { 
    this.http.get('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/Log')
    .subscribe((response) => { 
      this.dataService.setResponseOfUniqueGuardByName(response);
      this.guardLogs = this.dataService.getResponseOfUniqueGuardByName(); 
      this.count = Object.keys(this.dataService.getResponseOfUniqueGuardByName()).length; 
}); 
  }

  SearchByName() { 
    this.guardLogs = {}; 
    if(this.dataService.getResponseOfUniqueGuardByName()!=null)
    { 
      this.guardLogs = this.dataService.getResponseOfUniqueGuardByName(); 
    } 
  }
  SearchByDate() { 
    this.guardLogs = {}; 
    if(this.dataService.getResponseOfUniqueGuardByName()!=null)
    { 
      this.guardLogs = this.dataService.getResponseOfUniqueGuardByName(); 
      console.log(this.guardLogs);
    } 
  } 
}
