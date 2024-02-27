import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IDashboard } from '../model/dashboardInfo';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };  

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

  getDashboardData(): Observable<IDashboard[]>{
    return this.http.get<IDashboard[]>(`${this.baseUrl}/api/v1/dashboard`);
  }
 

}

