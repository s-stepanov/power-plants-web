import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { PredictionData } from 'src/app/shared/prediction-data';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-prediction-chart',
  templateUrl: './prediction-chart.component.html',
  styleUrls: ['./prediction-chart.component.scss'],
})
export class PredictionChartComponent implements OnInit, OnChanges {
  @Input()
  data: PredictionData[];
  chart;

  constructor() {}

  ngOnChanges(_: SimpleChanges): void {
    const powerData = this.data.map((item) => [
      Date.parse(item.date),
      item.power[0],
    ]);

    this.chart = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Прогноз выработки электроэнергии',
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        type: 'datetime',
        labels: {
          format: '{value:%Y-%m-%d}',
          rotation: 45,
          align: 'left',
        },
      },
      series: [
        {
          name: 'Энергия',
          data: powerData,
          type: 'line',
        },
      ],
    });
  }

  ngOnInit(): void {}
}
