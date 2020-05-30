import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionChartComponent } from './prediction-chart/prediction-chart.component';
import { ChartModule } from 'angular-highcharts';
import { WindroseChartComponent } from './windrose-chart/windrose-chart.component';

@NgModule({
  declarations: [PredictionChartComponent, WindroseChartComponent],
  imports: [CommonModule, ChartModule],
  exports: [PredictionChartComponent, WindroseChartComponent],
})
export class VisualizationModule {}
