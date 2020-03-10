import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUserData = this.localStorageService.get('user_data');
    if (currentUserData && currentUserData.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUserData.access_token}`
        }
      });
    } else {
      location.href = 'login';
    }

    return next.handle(request);
  }
}
