import { Component, Input } from '@angular/core';

import { GraphData } from '../graph-helper';

@Component({
  selector: 'vst-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
  standalone: true
})
export class BarChartComponent {
  @Input({ required: true }) graphData: GraphData | undefined;
}
