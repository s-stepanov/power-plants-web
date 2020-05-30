import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PredictionData } from '../prediction-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  predictionApiURL = environment.predictionApiUrl;

  constructor(private http: HttpClient) {}

  getPredictionData(): Observable<PredictionData[]> {
    return this.http
      .get<{ data: PredictionData[] }>(`${this.predictionApiURL}/predict`)
      .pipe(map((response) => response.data));
  }

  getWindroseData(): Observable<any> {
    return this.http.get<any>(`${this.predictionApiURL}/wind-data`);
  }
}
