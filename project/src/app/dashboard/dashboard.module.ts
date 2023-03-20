import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule,
        RouterModule,
    ],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule { }
