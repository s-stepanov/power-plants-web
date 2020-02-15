import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Power Plants';
  response$ = new Observable();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.response$ = this.http.get('http://localhost:3000').pipe(map((response: any) => response.data));
  }
}
