import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  id!:number;
   employees!: Employee[];
  constructor(private employeeservice:EmployeeService,private router:Router){}

  ngOnInit(): void {
    this.getEmployess();
 
  }
  private getEmployess(){
  this.employeeservice.getEmployeesList().subscribe(data => {this.employees = data});
  }
  updateEmployeee(id:number){
    this.router.navigate(['update-employee',id]);

  }
  detailsEmployee(id:number){
    this.router.navigate(['details-employee',id]);
  }
  deleteEmploye(id:number){
    this.employeeservice.deleteEmployee(id).subscribe(data =>{
      console.log('Employee deleted:', data);
      this.getEmployess();
    },error => console.log(error)
    );
  }
}
