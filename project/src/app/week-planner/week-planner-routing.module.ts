import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekPlannerComponent } from './week-planner.component';

const routes: Routes = [
    {
        path: '',
        component: WeekPlannerComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class WeekPlannerRoutingModule { }
