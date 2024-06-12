import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private apiUrl = 'http://localhost:3000/employees'; // Adjust URL as necessary

  constructor(private http: HttpClient) {}

  saveEmployeeData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getEmployeeData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
