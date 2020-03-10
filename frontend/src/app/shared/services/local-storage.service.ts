import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
