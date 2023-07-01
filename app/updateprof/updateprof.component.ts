import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-updateprof',
  templateUrl: './updateprof.component.html',
  styleUrls: ['./updateprof.component.css']
})
export class UpdateprofComponent {
  name!: string;
  email!: string;
  password!: string;
  code!: string;
  job!: string;
  role_job!: string;
  phone!: string;
  address!: string;
  photo!: string;
  constructor(private authService: AuthService, private http: HttpClient,private router:Router) {}

  updateProfile() {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    const data = {

      name: this.name,
      email: this.email,
      password: this.password,
      code: this.code,
      job: this.job,
      role_job: this.role_job,
      phone: this.phone,
      address: this.address,
      photo: this.photo
    };

    console.log(data);
    this.http.post('http://127.0.0.1:8000/api/auth/register', data, httpOptions).subscribe(response => {
      console.log('Profile updated successfully');
      this.router.navigate(['/profile']);
    });
  }
}

