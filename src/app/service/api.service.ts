import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Apiurl= environment.ApiUrl;

  constructor(private http: HttpClient) { }

  getDefects(){
    return this.http.get(this.Apiurl +"/9b8fd92a-f381-40eb-b1df-7a731577e994");
    
  }
  //https://run.mocky.io/v3/9b8fd92a-f381-40eb-b1df-7a731577e994


}
