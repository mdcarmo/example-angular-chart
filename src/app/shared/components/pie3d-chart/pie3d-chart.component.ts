import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie3d-chart',
  templateUrl: './pie3d-chart.component.html'
})
export class Pie3dChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
    is3D: true
  };
  width = 550;
  height = 400;
}
