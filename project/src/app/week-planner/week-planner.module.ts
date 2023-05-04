import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekPlannerRoutingModule } from './week-planner-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WeekPlannerComponent } from './week-planner.component';
import { ReactiveFormsModule } from '@angular/forms';


const MAT_MODULES = [
    //FormsModule,
    ReactiveFormsModule,
    //MatFormFieldModule,
]

@NgModule({
    declarations: [
        WeekPlannerComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        WeekPlannerRoutingModule,
        RouterModule,
        ...MAT_MODULES,
    ]
})
export class WeekPlannerModule { }
