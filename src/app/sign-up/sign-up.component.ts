import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name!: string;
  email!: string;
  password!: string;
  code!: string;
  job!: string;
  role_job!: string;
  phone!: string;
  address!: string;
  profile_image!:string;





  constructor(private http: HttpClient ,private router: Router) {}
  onChange() {
    console.log('role_job changed:', this.role_job);
  }
  onFileSelected(event: any) {
    this.profile_image = event.target.files[0];
  }

  submitSignUpForm() {
    if (!this.name) {
      alert('Please enter your name.');
      return;
    }
    if (!this.email) {
      alert('Please enter your email.');
      return;
    }
    if (!this.password) {
      alert('Please enter your password.');
      return;
    }
    if (!this.code) {
      alert('Please enter your number.');
      return;
    }
    if (!this.job) {
      alert('Please enter your job.');
      return;
    }
    if (!this.role_job) {
      alert('Please enter your role_job.');
      return;
    }




    const url = 'http://127.0.0.1:8000/api/auth/register';

    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('code', this.code);
    formData.append('job', this.job);
    formData.append('role_job', this.role_job);
    formData.append('phone', this.phone);
    formData.append('address', this.address);
    formData.append('profile_image', this.profile_image);

    console.log(this.profile_image);

    this.http.post(url, formData).subscribe(
      (response: any) => {
        console.log('Call registered successfully', response);
        this.router.navigate(['/login']); // go to the success page
        alert('successful registering call');
      },
      (error: any) => {
        console.log('Error registering call', error);
        alert('Error registering call');

      }
    );
  }
}
