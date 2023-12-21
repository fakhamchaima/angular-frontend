import { Component ,  OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Employee } from '../employee';
import { error } from 'console';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
constructor(private service:EmployeeService,
  private route:ActivatedRoute,private router:Router){}
id!:number;
employee:Employee=new Employee();
ngOnInit(): void {
  //pour reccupere le id a partir de url route
  this.id=this.route.snapshot.params['id'];
  this.service.getEmployeeById(this.id).subscribe(data =>{
    this.employee=data;
  },error =>console.log(error)
  );
}



updateEmployee(){
  this.service.updateEmploye(this.id,this.employee).subscribe(data =>{
   
    this.AfficheEmployeee();
  
 
  },error => console.log(error)
  );
}
AfficheEmployeee(){
  this.router.navigate(['/employees'])

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
