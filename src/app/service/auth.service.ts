import { Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
// import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.serverUrl
  userid = 230;

  constructor(public http: HttpClient) { }

  // login function
  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.baseUrl}/loginadmin`, credentials); 
  }



  

}
