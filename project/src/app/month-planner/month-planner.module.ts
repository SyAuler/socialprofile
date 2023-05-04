import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthPlannerRoutingModule } from './month-planner-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MonthPlannerComponent } from './month-planner.component';
import { ReactiveFormsModule } from '@angular/forms';


const MAT_MODULES = [
    //FormsModule,
    ReactiveFormsModule,
    //MatFormFieldModule,
]

@NgModule({
    declarations: [
        MonthPlannerComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MonthPlannerRoutingModule,
        RouterModule,
        ...MAT_MODULES,
    ]
})
export class MonthPlannerModule { }
