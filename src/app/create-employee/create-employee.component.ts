import { Component, OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { error } from 'console';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit  {
  employee:Employee = new Employee();
  constructor(private empService:EmployeeService,
    private router:Router){}
  ngOnInit(): void {
  
  }
  saveEmployee(){
    this.empService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.gotoempl();
    }, 
    error => console.log(error) );
  
  }
 gotoempl(){

  this.router.navigate(['employees'])
 }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    
  }
 
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
  
      // Vous pouvez traiter le fichier sélectionné ici
      // Par exemple, lire les données de l'image et les assigner à employee.image
  
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result as string;
        this.employee.image = imageData; // Affectez l'URL de l'image à employee.image
    
      };
      reader.readAsDataURL(file);
    }
  }
}
