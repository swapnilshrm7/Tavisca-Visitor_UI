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
  ngOnInit() { 
   this.http.get('https://localhost:44303/api/Visitors/UniqueVisitors')
   .subscribe((response) => {
    console.log(response);  
    this.visitors = response; 
  });
  }   
}
