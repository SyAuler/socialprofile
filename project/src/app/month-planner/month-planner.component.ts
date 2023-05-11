import { Component } from '@angular/core';

@Component({
    selector: 'app-month-planner',
    templateUrl: './month-planner.component.html',
    styleUrls: ['./month-planner.component.scss']
})
export class MonthPlannerComponent {

    date: Date = new Date()

}
