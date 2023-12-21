import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component'
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { AuthentificationEmployeeComponent } from './authentification-employee/authentification-employee.component';
import { AceuilComponent } from './aceuil/aceuil.component';

const routes: Routes = [
  {path:'Acceuil',component:AceuilComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'create-employee',component: CreateEmployeeComponent},
  {path:'',redirectTo:'Acceuil',pathMatch:'full'},
  {path:'update-employee/:id' ,component:UpdateEmployeeComponent},
  {path:'details-employee/:id',component:DetailsEmployeeComponent},
  {path:'login-employee',component:AuthentificationEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
