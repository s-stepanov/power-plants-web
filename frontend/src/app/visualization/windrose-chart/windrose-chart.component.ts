import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-windrose-chart',
  templateUrl: './windrose-chart.component.html',
  styleUrls: ['./windrose-chart.component.scss'],
})
export class WindroseChartComponent implements OnChanges {
  @Input()
  data;

  chart;

  constructor() {}

  ngOnChanges(): void {
    this.chart = new Chart({
      chart: {
        type: 'column',
        polar: true,
      },

      title: {
        text: 'Роза ветров для электростанции',
      },

      subtitle: {},

      pane: {
        size: '85%',
      },

      legend: {
        reversed: true,
        align: 'right',
        verticalAlign: 'top',
        y: 100,
        layout: 'vertical',
      },

      xAxis: {
        tickmarkPlacement: 'on',
      },

      yAxis: {
        min: 0,
        endOnTick: false,
        showLastLabel: true,
        title: {},
        labels: {
          formatter: function () {
            return this.value + '%';
          },
        },
      },

      tooltip: {
        valueSuffix: '%',
        followPointer: true,
      },

      plotOptions: {
        series: {
          stacking: 'normal',
          shadow: false,
          pointPlacement: 'on',
        },
      },
      series: this.data.data,
    });
  }
}
