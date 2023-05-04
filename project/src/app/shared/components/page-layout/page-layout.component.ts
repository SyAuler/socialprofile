import { Component } from '@angular/core';

@Component({
    selector: 'app-page-layout',
    templateUrl: './page-layout.component.html',
    styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent {

    public links: any[] =[];

    constructor(
    ) {}

    ngOnInit(): void {
        this.links = [
            {
                name: `Página Inicial`,
                path: 'home',
                icon: 'home',
                svg_icon: 'home',
                colored: true,
            },
            {
                name: `Dashboard`,
                path: 'dashboard',
                icon: 'dashboard',
                svg_icon: 'neo_icon',
                colored: true,
            },
            {
                name: `Pokemon`,
                path: 'pokemon',
                icon: 'sports_baseball',
                svg_icon: 'neo_icon',
                colored: true,
            },
            {
                name: `Marvel`,
                path: 'marvel',
                icon: 'sports_martial_arts',
                svg_icon: 'neo_icon',
                colored: true,
            },
            {
                dropdown: `Planner`,
                path: 'planner',
                icon: 'calendar_month',
                svg_icon: 'neo_icon',
                colored: true,
                items: [
                    {
                        name: `Dashboard`,
                        path: 'planner',
                    },
                    {
                        name: `Mensal`,
                        path: 'month-planner',
                    },
                    {
                        name: `Semanal`,
                        path: 'week-planner',
                    },
                    {
                        name: `Diário`,
                        path: 'daily-planner',
                    },
                ],
            },
        ]
    }
}
