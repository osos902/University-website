import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navlogin',
  templateUrl: './navlogin.component.html',
  styleUrls: ['./navlogin.component.css']
})
export class NavloginComponent {
  constructor(private http: HttpClient ,public authService: AuthService,private router:Router) { }
  isLoggedIn = false;

  login() {
    localStorage.setItem('access_token', 'my_token');
    this.authService.isLoggedIn = true;
    this.authService.checkAuth();
    // Perform login logic here
    // For demo purposes, we'll just set isLoggedIn to true
    this.isLoggedIn = true;
  } logout() {

    this.authService.logout().subscribe(
      res => {
        localStorage.removeItem('access_token');
        this.authService.isLoggedIn = false;
        this.authService.checkAuth();


        alert('successful logout');
          // Handle successful login
          this.router.navigate(['/home']);
        // Handle successful logout
      },
      err => {
        alert('error logout');
        // Handle error
      }
    );

}


  ngOnInit() {
    // Check if user is already authenticated
    this.authService.checkAuth();
  }
}
