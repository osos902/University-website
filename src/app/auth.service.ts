import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { TokenService } from './callapi.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  private apiUrl = 'http://127.0.0.1:8000/api/auth'; // Replace with your API URL
currentUser: any;

  constructor(private http: HttpClient,private router: Router ,) { }
  email!: string;
  password!: string;

   response = {
    access_token: "my_token",
    // Other properties in the object
  };


//login***********************************************

login(email: string, password: string): Observable<any> {
  const data = {
    email: email,
    password: password
  };
  return this.http.post(`${this.apiUrl}/login`, data);

}



  getProfile(): Observable<any> {
    const token = localStorage.getItem('access_token');
    console.log( token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/user-profile`, { headers });
  }



  logout() {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.post<any>(`${this.apiUrl}/logout`, {}, { headers });
  }


  // Add this function to retrieve the token from local storage
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
  checkAuth() {
    if (localStorage.getItem('access_token')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
