import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner.component';
import { SharedModule } from '../shared/shared.module';
import { PlannerRoutingModule } from './planner-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
    declarations: [
        PlannerComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PlannerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
    ]
})
export class PlannerModule { }
