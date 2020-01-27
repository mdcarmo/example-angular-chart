import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BubblerChartComponent } from './components/bubbler-chart/bubbler-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { MapChartComponent } from './components/map-chart/map-chart.component';
import { OrgChartComponent } from './components/org-chart/org-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { Pie3dChartComponent } from './components/pie3d-chart/pie3d-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GoogleChartsModule
  ],
  declarations: [
    PieChartComponent,
    BarChartComponent,
    BubblerChartComponent,
    LineChartComponent,
    MapChartComponent,
    OrgChartComponent,
    Pie3dChartComponent,
    AreaChartComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    GoogleChartsModule,
    PieChartComponent,
    BarChartComponent,
    BubblerChartComponent,
    LineChartComponent,
    MapChartComponent,
    OrgChartComponent,
    Pie3dChartComponent,
    AreaChartComponent
  ]
})
export class SharedModule { }
