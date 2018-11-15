import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-unique-guards',
  templateUrl: './unique-guards.component.html',
  styleUrls: ['./unique-guards.component.css']
})
export class UniqueGuardsComponent implements OnInit {

  constructor(private http: HttpClient,private dataService: DataService) { }  
  guards: any;   
  filterType: string;
  count: number;
  ngOnInit() { 
    if(sessionStorage.getItem('loggedInEmployeeId') == null || sessionStorage.getItem('loggedInEmployeeId') == '')
    {
      location.replace('http://localhost:4200/login');
    } 
    this.filterType= "search";
   this.http.get('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/AllGuards')
   .subscribe((response) => { 
    this.guards = response;  
    this.count = Object.keys(this.guards).length; 
  });  
}
}
