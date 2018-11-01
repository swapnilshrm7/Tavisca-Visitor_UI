import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
printToConsole(arg){};
  GetRequestWithoutParam(url) { 
    let obs =  this.http.get(url); 
    obs.subscribe((response) => console.log(response));
    }

    
  constructor(private http: HttpClient) { }
}
