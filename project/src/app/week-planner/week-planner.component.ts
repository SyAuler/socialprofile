import { Component } from '@angular/core';

@Component({
  selector: 'app-week-planner',
  templateUrl: './week-planner.component.html',
  styleUrls: ['./week-planner.component.scss']
})
export class WeekPlannerComponent {

    data: any = [
        {
            id: 1,
            name: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Delegadis gente finis, bibendum egestas augue arcu ut est.',
        },
    ]

    teste: any = [
        {
            id: 1,
            name: 'Mussum Ipsum, cacilds vidis litro abertis.',
        },
        {
            id: 2,
            name: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Delegadis gente finis, ',
        },
    ]
    
    teste1: any = [
        {
            id: 1,
            name: 'Mussum Ipsum, cacilds vidis litro abertis.',
        },        
        {
            id: 2,
            name: 'Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
        },
        {
            id: 2,
            name: 'Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
        },
    ]
}
