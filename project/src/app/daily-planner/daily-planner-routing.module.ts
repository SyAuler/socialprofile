import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyPlannerComponent } from './daily-planner.component';


const routes: Routes = [
    {
        path: '',
        component: DailyPlannerComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class DailyPlannerRoutingModule { }
