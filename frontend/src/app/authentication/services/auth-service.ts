import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { LoginRequest, UserTokenResponse } from '../models/auth.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private authApiService: AuthApiService, private localStorageService: LocalStorageService) {
  }

  login(loginData: LoginRequest): Observable<User> {
    return this.authApiService.sendLoginRequest(loginData)
      .pipe(
        tap((response: UserTokenResponse) => {
          this.localStorageService.set('user_data', response);
          this.currentUser.next({
            id: response.id,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email
          });
        }),
      );
  }

  logout() {
    this.currentUser.next(null);
    this.localStorageService.remove('user_data');
    location.href = 'login';
  }
}
