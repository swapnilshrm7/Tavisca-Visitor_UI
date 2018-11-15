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
  error: string = "false";
  ngOnInit() { 
    if(sessionStorage.getItem('loggedInEmployeeId') == null || sessionStorage.getItem('loggedInEmployeeId') == '')
    {
      location.replace('http://localhost:4200/login');
    } 
    this.http.get('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/Log')
    .subscribe((response) => { 
      this.dataService.setResponseOfUniqueGuardByName(response);
      this.guardLogs = this.dataService.getResponseOfUniqueGuardByName(); 
      this.count = Object.keys(this.dataService.getResponseOfUniqueGuardByName()).length;
      if (this.guardLogs[0]["error"] == "true") {
        this.error = "true";
      }
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
