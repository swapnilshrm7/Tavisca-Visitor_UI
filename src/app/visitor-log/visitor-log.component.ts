import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-visitor-log',
  templateUrl: './visitor-log.component.html',
  styleUrls: ['./visitor-log.component.css']
})
export class VisitorLogComponent implements OnInit {

  constructor(private http: HttpClient, private dataService: DataService) { }
  visitors = {};  
  excelInput ={};
  ngOnInit() {
    this.http.get('https://localhost:44303/api/Visitors/Log')
             .subscribe((response) => { 
              this.dataService.setResponseOfUniqueGuardByName(response);
              this.visitors = this.dataService.getResponseOfUniqueGuardByName(); 
            });
  }
  SearchByName() { 
    this.visitors = {}; 
    if(this.dataService.getResponseOfUniqueGuardByName()!=null)
    { 
      this.visitors = this.dataService.getResponseOfUniqueGuardByName();  
    } 
  } 
  SearchByPurpose() { 
    this.visitors = {}; 
    if(this.dataService.getResponseOfUniqueGuardByName()!=null)
    { 
      this.visitors = this.dataService.getResponseOfUniqueGuardByName(); 
    } 
  }
  SearchByMeetingPerson() {
    this.visitors = {}; 
    if(this.dataService.getResponseOfUniqueGuardByName()!=null)
    { 
      this.visitors = this.dataService.getResponseOfUniqueGuardByName(); 
    } 
  }
  DownloadExcel() {
    this.excelInput = {"UserInput": "Visitor"};
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
