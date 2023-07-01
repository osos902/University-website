import { AuthService } from './../auth.service';

import {  TokenService } from './../callapi.service';
import { HttpClient, } from '@angular/common/http';
import { Component, } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})



export class LoginComponent  {

  email!: string;
  password!: string;

   response = {
    access_token: "my_token",
    // Other properties in the object
  };


  constructor(private http: HttpClient ,private router: Router ,private authService: AuthService) {}

  login() {
    if (!this.email) {
      alert('Please enter your email.');
      return;
    }

    if (!this.password) {
      alert('Please enter your password.');
      return;
    }
    interface LoginResponse {
      access_token: string;
    }
    this.authService.login(this.email, this.password)
    .subscribe(
      (response: LoginResponse) => {
        // Store the access token in local storage
        localStorage.setItem('access_token', response.access_token);
        this.authService.isLoggedIn = true;
        this.authService.checkAuth();
        alert('Successful login');
        // Handle successful login
        this.router.navigate(['/profile']);
      },
      error => {
        console.error(error);
        alert('Error login');
        // Handle login error
      }
    );
}
}










