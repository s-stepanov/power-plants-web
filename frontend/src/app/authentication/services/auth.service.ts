import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserDto } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(userDto: UserDto): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, userDto);
  }

  login() {}

  logout() {}
}
