import { NgIf, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

import { GraphData } from '../graph-helper';

@Component({
  selector: 'vst-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
  standalone: true,
  imports: [NgIf, NgFor]
})
export class BarChartComponent {
  @Input({ required: true }) graphData: GraphData | undefined;
}
