import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DashboardService } from '../dashboard.service';

// Unline the top-list component, this one is tightly coupled
// to the service. This approach is helpful for more complex features
// that do not lend them selves well to reuse.
@Component({
  selector: 'vst-views-filter',
  templateUrl: './views-filter.component.html',
  styleUrls: ['./views-filter.component.css']
})
export class ViewsFilterComponent {
  filterFormGroup: FormGroup<{
    region: FormControl<string>;
    dateTo: FormControl<string>;
    dateFrom: FormControl<string>;
    minor: FormControl<boolean>;
    adults: FormControl<boolean>;
    middleAged: FormControl<boolean>;
    retired: FormControl<boolean>;
  }>;

  constructor(dashboardService: DashboardService) {
    this.filterFormGroup = dashboardService.filterForm;
  }
}
