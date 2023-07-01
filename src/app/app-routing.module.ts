import { ExtCoursesComponent } from './ext-courses/ext-courses.component';
import { OVERVIEWComponent } from './overview/overview.component';
import { TestComponent } from './test/test.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { TransportationComponent } from './transportation/transportation.component';
import { UpdateprofComponent } from './updateprof/updateprof.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'blog', component: BlogComponent},
  { path: 'transport', component: TransportationComponent },
  { path: 'update', component : UpdateprofComponent },
  { path: 'test', component : TestComponent},
  { path: 'view', component : OVERVIEWComponent},
  { path: 'extra', component : ExtCoursesComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
