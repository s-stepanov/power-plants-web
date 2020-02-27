import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  isLoggedIn = true;

  constructor(private router: Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isLoggedIn) {
      this.router.navigateByUrl('/dashboard');
      return true;
    }

    this.router.navigateByUrl('/auth/login');
    return false;
  }
}
