import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-guard',
  templateUrl: './edit-guard.component.html',
  styleUrls: ['./edit-guard.component.css']
})
export class EditGuardComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() { 
  } 
}
