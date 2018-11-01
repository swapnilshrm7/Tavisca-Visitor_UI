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
  ngOnInit() { 
    this.filterType= "search";
   this.http.get('https://localhost:44303/api/Guard/AllGuards')
   .subscribe((response) => { 
    this.guards = response; 
    console.log(this.filterType);
  });  
}
}
