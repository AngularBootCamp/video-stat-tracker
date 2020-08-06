import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

const ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    }),
    DashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
