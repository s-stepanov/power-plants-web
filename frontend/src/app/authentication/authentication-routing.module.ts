import { NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'login', component: LoginFormComponent, pathMatch: 'full' },
  { path: 'signup', component: RegisterFormComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
