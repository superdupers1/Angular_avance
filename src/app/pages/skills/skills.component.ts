import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  public lineAndBarChart: any;

  createChart() {
    this.lineAndBarChart = new Chart('lineAndBarChart', {
      type: 'scatter',
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          {
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(78, 169, 192, 0.2)',
          },
          {
            type: 'line',
            label: 'Line Dataset',
            data: [12, 20, 40, 50],
            fill: false,
            borderColor: 'rgb(172, 0, 0)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
