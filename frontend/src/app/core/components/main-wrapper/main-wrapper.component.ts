import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/services/auth-service';
import { PredictionService } from 'src/app/shared/services/prediction.service';
import { take } from 'rxjs/operators';
import { PredictionData } from 'src/app/shared/prediction-data';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss'],
})
export class MainWrapperComponent implements OnInit {
  predictedData: PredictionData[] = [];
  windRoseData = [];

  constructor(
    private authService: AuthService,
    private predictionService: PredictionService,
  ) {}

  ngOnInit(): void {
    this.predictionService
      .getWindroseData()
      .pipe(take(1))
      .subscribe((data) => (this.windRoseData = data));
  }

  logout() {
    this.authService.logout();
  }

  performPrediction(): void {
    this.predictionService
      .getPredictionData()
      .pipe(take(1))
      .subscribe((data) => {
        this.predictedData = data;
      });
  }
}
