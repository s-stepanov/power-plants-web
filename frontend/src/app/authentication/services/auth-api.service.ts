import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserDto } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { LoginRequest, TokenResponse } from '../models/auth.model';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) {
  }

  register(userDto: UserDto): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, userDto);
  }

  sendLoginRequest(loginRequest: LoginRequest) {
    return this.http.post<TokenResponse>(`${environment.apiUrl}/auth/login`, loginRequest);
  }
}
