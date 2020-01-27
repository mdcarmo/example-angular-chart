import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Population (in millions)';
  type = 'BarChart';
  data = [
    ["2012", 900],
    ["2013", 1000],
    ["2014", 1170],
    ["2015", 1250],
    ["2016", 1530]
  ];
  columnNames = ['Year', 'Asia'];
  options = {};
  width = 450;
  height = 400;
}
