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
  constructor(private http: HttpClient, private dataService: DataService) { 
   }
  ngOnInit() { 
    this.userId = {"UserInput": sessionStorage.getItem('loggedInEmployeeId') }; 
    this.http.put('https://localhost:44303/api/Admin/GetAllLogs', this.userId)
    .subscribe((response) => {  
     this.homeContent = response;
     console.log(this.homeContent);
   });
  }  
}
