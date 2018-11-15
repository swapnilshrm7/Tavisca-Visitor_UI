import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-unique-visitors',
  templateUrl: './unique-visitors.component.html',
  styleUrls: ['./unique-visitors.component.css']
})

export class UniqueVisitorsComponent implements OnInit { 
  constructor(private http: HttpClient) { }
  visitors= {};  
  count: number;
  ngOnInit() { 
    if(sessionStorage.getItem('loggedInEmployeeId') == null || sessionStorage.getItem('loggedInEmployeeId') == '')
    {
      location.replace('http://localhost:4200/login');
    } 
   this.http.get('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Visitors/UniqueVisitors')
   .subscribe((response) => {
    console.log(response);  
    this.visitors = response; 
    this.count = Object.keys(this.visitors).length;  
  });
  }   
}
