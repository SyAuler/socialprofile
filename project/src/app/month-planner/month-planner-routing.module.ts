import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthPlannerComponent } from './month-planner.component';


const routes: Routes = [
    {
        path: '',
        component: MonthPlannerComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class MonthPlannerRoutingModule { }
