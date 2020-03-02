import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from '../../services/auth-api.service';
import { Subscription } from 'rxjs';

const MIN_PASSWORD_LENGTH = 6;

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnDestroy {
  responseMessage: string;
  registrationForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: ['', Validators.email],
    password: ['', Validators.minLength(MIN_PASSWORD_LENGTH)],
    passwordConfirmation: ['', Validators.required]
  }, {
    validators: [this.passwordsMatchValidator('password', 'passwordConfirmation')]
  });

  submitSubscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private authService: AuthApiService) { }

  passwordsMatchValidator(passwordField, passwordConfirmationField) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[passwordField];
      const matchingControl = formGroup.controls[passwordConfirmationField];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.submitSubscription = this.authService.register(this.registrationForm.value).subscribe(data => {
      this.responseMessage = 'Аккаунт успешно зарегистрирован';
    }, err => {
      this.responseMessage = err.error.message;
    });
  }

  ngOnDestroy(): void {
    this.submitSubscription.unsubscribe();
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get passwordConfirmation() {
    return this.registrationForm.get('passwordConfirmation');
  }
}
