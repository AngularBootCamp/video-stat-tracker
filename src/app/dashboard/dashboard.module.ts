import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TopListComponent } from './top-list/top-list.component';
import { VideoContainerComponent } from './video-container/video-container.component';
import { BarChartComponent } from './views-breakdown/bar-chart/bar-chart.component';
import { FilterStateDisplayComponent } from './views-breakdown/filter-state-display/filter-state-display.component';
import { ViewsBreakdownComponent } from './views-breakdown/views-breakdown.component';
import { ViewsFilterComponent } from './views-filter/views-filter.component';

const ROUTES: Route[] = [
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  declarations: [
    DashboardComponent,
    ViewsFilterComponent,
    VideoContainerComponent,
    ViewsBreakdownComponent,
    BarChartComponent,
    TopListComponent,
    FilterStateDisplayComponent
  ]
})
export class DashboardModule {}
