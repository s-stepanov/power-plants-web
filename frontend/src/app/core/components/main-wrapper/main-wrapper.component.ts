import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/services/auth-service';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
