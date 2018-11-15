import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http'; 
import {Router} from '@angular/router';
import { DataService } from '../data.service';
import { EditGuardByIdComponent } from '../edit-guard-by-id/edit-guard-by-id.component';
import { GuardLogsComponent } from '../guard-logs/guard-logs.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
@Component({
  selector: 'app-nav-without-search',
  templateUrl: './nav-without-search.component.html',
  styleUrls: ['./nav-without-search.component.css']
})
export class NavWithoutSearchComponent implements OnInit {
response:any; 
editId: string;
removeId: string;
removeId_Emp: string;
guardObj = new GuardLogsComponent(this.http, this.dataService);
welcomeObj = new WelcomePageComponent(this.http, this.dataService);
  constructor( private svc: TestService, private router: Router, private http: HttpClient, private dataService: DataService) { }

ngOnInit() { 

}

EditGuard() { 
  location.replace('http://ec2-13-127-119-114.ap-south-1.compute.amazonaws.com:4200/askId');
}

Edit( ) { 
  this.dataService.setInput({'UserInput': this.editId});   
  
}


refresh() {
  location.reload();
  }

  RemoveGuard() { 
    this.dataService.setInput({'UserInput': this.removeId}); 
    console.log(this.dataService.getInput());
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/RemoveGuard', this.dataService.getInput())
    .subscribe((response) => {  
      if(response == true)
      {  
        alert("Guard removed successfully!");
        //this.welcomeObj.successfulMessage("Guard removed successfully!");
      }
    }) 
  }
  RemoveEmployee() {
    this.dataService.setInput({'UserInput': this.removeId_Emp}); 
    console.log(this.dataService.getInput());
    this.http.put('http://taviscaemployeevisitor-dev.ap-south-1.elasticbeanstalk.com/api/Guard/RemoveEmployee', this.dataService.getInput())
    .subscribe((response) => {  
      if(response == true)
      {  
        alert("Employee removed successfully!");
        //this.welcomeObj.successfulMessage("Guard removed successfully!");
      }
    }) 
  }
}
