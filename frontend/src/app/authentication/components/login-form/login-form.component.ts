import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });
  errorMessage = '';

  submitSubscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(event): void {
    event.preventDefault();
    this.submitSubscription = this.authService.login(this.loginForm.value).subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      this.errorMessage = err.message;
    });
  }

  ngOnDestroy(): void {
    this.submitSubscription.unsubscribe();
  }
}
