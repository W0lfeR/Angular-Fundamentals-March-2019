import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DropdownDirective } from './components/navbar/dropdown.directive';
import { CollapseDirective } from './components/navbar/collapse.directive';
import { ToastrModule } from 'ngx-toastr'
import { AuthService } from './components/authentication/auth.service';
import { JwtInterceptorService } from './components/interceptors/jwt-interceptor.service';
import { ResponseHandlerInterceptorService } from './components/interceptors/response-handler-interceptor.service';
import { EditComponent } from './components/article/edit/edit.component';
import { CreateComponent } from './components/article/create/create.component';
import { DetailsComponent } from './components/article/details/details.component';

import { AllComponent } from './components/article/all/all.component';
import { DeleteComponent } from './components/article/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DropdownDirective,
    CollapseDirective,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    AllComponent,
    DeleteComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    HttpClientModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
