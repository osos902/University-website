
import { TestComponent } from './test/test.component';


import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

import { CourseComponent } from './course/course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItsgareApiService } from './serviuse/itsgare-api.service';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TransportationComponent } from './transportation/transportation.component';
import { ExtCoursesComponent } from './ext-courses/ext-courses.component';
import { TokenService } from './callapi.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NavloginComponent } from './navlogin/navlogin.component';
import { UpdateprofComponent } from './updateprof/updateprof.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OVERVIEWComponent } from './overview/overview.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    BlogComponent,
    TransportationComponent,
    ExtCoursesComponent,
    TestComponent,
    NavloginComponent,
    UpdateprofComponent,
    OVERVIEWComponent,
    ForgotPasswordComponent,

  ],
  imports: [
    FormsModule,
      BrowserModule,
      AppRoutingModule,

     NgbModule,

     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     RouterModule.forRoot([]),
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],

  providers: [ItsgareApiService,TokenService,MatSnackBar],
  bootstrap: [AppComponent, HomeComponent, ProfileComponent, BlogComponent, TestComponent, TransportationComponent, LoginComponent, SignUpComponent, CourseComponent,]
})
export class AppModule { }
