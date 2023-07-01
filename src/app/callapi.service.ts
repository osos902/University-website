import { LoginComponent } from './login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  access_token!: string;
  // Other properties in the object
}

