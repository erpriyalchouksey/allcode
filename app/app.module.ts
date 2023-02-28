import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from "./employee-dashboard/EmployeeDashboardComponent";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import { WebpageComponent } from './webpage/webpage.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, EmployeeDashboardComponent, WebpageComponent],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    AccordionModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
