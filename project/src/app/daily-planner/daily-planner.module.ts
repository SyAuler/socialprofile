import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyPlannerComponent } from './daily-planner.component';
import { SharedModule } from '../shared/shared.module';
import { DailyPlannerRoutingModule } from './daily-planner-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const MAT_MODULES = [
    //FormsModule,
    ReactiveFormsModule,
    //MatFormFieldModule,
]

@NgModule({
    declarations: [
        DailyPlannerComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        DailyPlannerRoutingModule,
        RouterModule,
        ...MAT_MODULES,
    ]
})
export class DailyPlannerModule { }
