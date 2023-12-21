import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from 'express';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrl: './details-employee.component.css'
})
export class DetailsEmployeeComponent implements OnInit {
  id!:number;
  employee!:Employee;
constructor(private service:EmployeeService,private route:ActivatedRoute ){}
ngOnInit(): void {
    //pour reccupere le id a partir de url route
    this.id=this.route.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    },error =>console.log(error)
    );
}
downloadPDF() {
  const doc = new jsPDF();
  const profileContent = document.getElementById('profile-content')!;

  // Générer le PDF à partir du contenu HTML
  doc.html(profileContent, {
    callback: (pdf) => {
      pdf.save('profile.pdf'); // Télécharger le fichier PDF avec le nom 'profile.pdf'
    }
  });
}
}
