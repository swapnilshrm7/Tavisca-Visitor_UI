import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
userId = {};
homeContent = {};   
interval: any;
  constructor(private http: HttpClient, private dataService: DataService) { 
   }

  ngOnInit() {   
    if(sessionStorage.getItem('loggedInEmployeeId') == null || sessionStorage.getItem('loggedInEmployeeId') == '')
    {
      location.replace('http://localhost:4200/login');
    } 
    sessionStorage.setItem('currentPageEqualsWelcomePage', 'true'); 
    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    }, 5000);
    this.userId = {"UserInput": sessionStorage.getItem('loggedInEmployeeId') }; 
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Admin/GetAllLogs', this.userId)
    .subscribe((response) => {  
     this.homeContent = response; 
   });  
  } 
  refreshData(){
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Admin/GetAllLogs', this.userId)
    .subscribe((response) => {  
     this.homeContent = response; 
   }); 
}
 
}
