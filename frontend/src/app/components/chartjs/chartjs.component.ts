import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { ChartjsService } from '../../core/services/chartjs.service';
import { ChartjsInterface } from '../../core/interfaces/chartjs-interface';


Chart.register(...registerables);

@Component({
  selector: 'app-chartjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']

})
export default class ChartjsComponent implements OnInit {
  salesData: ChartjsInterface[] = [];

  constructor(private chartjsService: ChartjsService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.fetchSalesData();

  }

  fetchSalesData() {
    this.chartjsService.getData().subscribe((data: ChartjsInterface[]) => {
        this.salesData = data;
        this.renderBarChart();
        this.renderLineChart();
        this.renderDonutChart();
      },
      (error) => {
        console.error('Oops! Error getting data:', error);
      }
    );
  }

   renderDonutChart() {
    const donutChartjs = this.document.getElementById('donutChart') as HTMLCanvasElement;

    const myChart = new Chart(donutChartjs, {
      type: 'doughnut',
      data: {
        labels: this.salesData.map(sale => sale.year.toString()),
        datasets: [{
          label: 'Amount',
          data: this.salesData.map(sale => sale.amount),
          backgroundColor: this.salesData.map(sale => sale.colorcode),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  renderLineChart() {
    const lineChartjs = this.document.getElementById('lineChart') as HTMLCanvasElement;

    const lineChart = new Chart(lineChartjs, {
      type: 'line',
      data: {
        labels: this.salesData.map(sale => sale.year.toString()),
        datasets: [{
          label: 'Line-Chartjs',
          data: this.salesData.map(sale => sale.amount),
          borderColor: this.salesData.map(sale => sale.colorcode),
          backgroundColor: 'green',
          borderWidth: 3,
           pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: this.salesData.map(sale => sale.colorcode),
          pointBorderColor: this.salesData.map(sale => sale.colorcode),
          pointHoverBackgroundColor: this.salesData.map(sale => sale.colorcode)
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  renderBarChart() {
    const bChartjs = this.document.getElementById('barChart') as HTMLCanvasElement;

    const chartBar = new Chart(bChartjs, {
      type: 'bar',
      data: {
        labels: this.salesData.map(sale => sale.year.toString()),
        datasets: [{
          label: 'Bar-Chartjs',
          data: this.salesData.map(sale => sale.amount),
          backgroundColor: this.salesData.map(sale => sale.colorcode),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  }
