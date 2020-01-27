import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubbler-chart',
  templateUrl: './bubbler-chart.component.html'
})
export class BubblerChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Age vs Weight';
  type = 'BubbleChart';
  data = [
    ["", 8, 12],
    ["", 4, 5.5],
    ["", 11, 14],
    ["", 3, 3.5],
    ["", 6.5, 7]
  ];
  columnNames = ['Id', 'Age', 'Weight'];
  options = {};
  width = 450;
  height = 400;

}
