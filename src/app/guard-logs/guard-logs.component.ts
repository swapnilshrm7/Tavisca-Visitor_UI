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
  ngOnInit() { 
    this.http.get('https://localhost:44303/api/Guard/Log')
    .subscribe((response) => { 
      this.dataService.setResponseOfUniqueGuardByName(response);
      this.guardLogs = this.dataService.getResponseOfUniqueGuardByName(); 
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
