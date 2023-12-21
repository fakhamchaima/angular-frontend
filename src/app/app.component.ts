import { Component, OnInit } from '@angular/core';
import { AuthentificationEmployeeComponent } from './authentification-employee/authentification-employee.component';
import { AuthentificationEmployeService } from './authentification-employe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Employee';
  connect!:boolean;
  constructor(private se:AuthentificationEmployeService){

  }
  ngOnInit(): void {
   
  }
  get isLoggedIn(): boolean {
    return this.se.isUserLoggedIn;
  }
}
