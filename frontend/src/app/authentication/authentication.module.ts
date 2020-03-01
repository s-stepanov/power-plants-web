import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    AuthWrapperComponent,
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class AuthenticationModule { }
