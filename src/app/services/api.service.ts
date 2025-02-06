import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserProfile } from '../models/requests/user-profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  //Method to send the userProfile object to the backend
  sendUserProfile(userProfile: UserProfile): Observable<any> {
    return this.http.post<any>(this.apiUrl + `request`, userProfile);
  }
}
