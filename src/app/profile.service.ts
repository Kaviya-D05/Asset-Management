import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:3000/profile';

  
  constructor(private http: HttpClient) {}

  addProfile(profileData: any): Observable<any> {
   
    return this.http.post<any>(this.baseUrl, profileData);
  }

  getProfileData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  
}
