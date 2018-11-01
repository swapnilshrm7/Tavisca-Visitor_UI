import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'visitor-management-system';
  constructor(private svc: TestService, private http: HttpClient, private dataService: DataService) {
    this.svc.printToConsole("Hey");
  }

  // ngOnInit() {
  //   let obs =  this.http.get('https://localhost:44303/api/Guard/Log'); 
  //   obs.subscribe((response) => console.log(response));
  // }

}
