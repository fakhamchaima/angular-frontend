import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationEmployeService {
  isUserLoggedIn: boolean = false;
private baseurl="http://localhost:8080/api/users";
  constructor(private httpclient:HttpClient) { }

  getUser(user:User):Observable<Object>{
    console.log(user);
    return this.httpclient.post(`${this.baseurl}`,user);
   this.isUserLoggedIn=true;
  }
}
