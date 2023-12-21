import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { User } from '../user';
import{AuthentificationEmployeService } from '../authentification-employe.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-authentification-employee',
  templateUrl: './authentification-employee.component.html',
  styleUrl: './authentification-employee.component.css'
})
export class AuthentificationEmployeeComponent implements OnInit {
  
  user:User = new User();
  constructor(private service:AuthentificationEmployeService,private router:Router){}
ngOnInit(): void {
  
}
userlogin(){
  console.log(this.user);
  this.service.getUser(this.user).subscribe( date =>{alert("Login successfully")
  this.Onsbmit();
  this.service.isUserLoggedIn=true;
},error =>alert("Sorry please  enter the CorrectUserId and  password")
  );
}
Onsbmit(){
  if(this.user.password=='admin'){this.router.navigate(['employees'])}
  else this.router.navigate(['create-employee'])

}
}