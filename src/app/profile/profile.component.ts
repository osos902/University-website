import { AuthService } from './../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(private authService: AuthService,private http: HttpClient ,private router: Router,) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
      console.log(data);
      this.profile = data;

    }, (error: any) => {
      console.log(error);
      // handle error
    }
  );

  }


  logout() {

    this.authService.logout().subscribe(
      res => {
        alert('successful logout');
          // Handle successful login
          this.router.navigate(['/login']);
        // Handle successful logout
      },
      err => {
        alert('error logout');
        // Handle error
      }
    );
  }
}
