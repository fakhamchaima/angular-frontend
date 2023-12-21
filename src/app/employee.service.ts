import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'; // N'oubliez pas d'importer Injectable
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/api/employees";
  

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }
  createEmployee(emp: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, emp);
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);

  }
  updateEmploye(id:number,emp:Employee):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,emp);
  }
  deleteEmployee(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }
 
  uploadEmployeeImage(employeeId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('employeeId', employeeId.toString());

    return this.httpClient.post<any>(this.baseUrl, formData);
  }
}
