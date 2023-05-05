import { Component, OnInit } from '@angular/core';
import { PlannerService } from './planner.service';

@Component({
    selector: 'app-planner',
    templateUrl: './planner.component.html',
    styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {

    plannerData: any = [];
    listLoading: boolean = false;
    date: Date = new Date()
    
    donutChart: any = 45;
    barChart:any = [
        { "Framework": "Vue", "Stars": "55", "Released": "2014" },
        { "Framework": "React", "Stars": "30", "Released": "2013" },
        { "Framework": "Angular", "Stars": "70", "Released": "2016" },
        { "Framework": "Backbone", "Stars": "25", "Released": "2010" },
        { "Framework": "Ember", "Stars": "90", "Released": "2011" },
    ];

    ordering = '-uuid';
    pageSize = 10;
    count = 0;
    page = 1;

    columnsData: any[] = [
        {
            id: 'uuid',
            name: 'ID',
            alignment: 'center',
            header: {
                disableSort: true,
            }
        },
        {
            id: 'name',
            name: 'Evento'
        },
        {
            id: 'event_date',
            name: 'Data do Evento'
        },
        {
            id: 'created_date',
            name: 'Data de Criação'
        },
        {
            id: 'description',
            name: 'Descrição'
        },
        {
            id: 'action',
            name: 'Ações'
        },
    ]

    constructor(
        private plannerService: PlannerService,
    ) { }

    ngOnInit(): void {
        this.getPlannerData();
    }

    getPlannerData() {
        const params = [
            this.ordering,
            this.page,
            this.pageSize,
        ]
        this.listLoading = true;
        this.plannerService.getData(params).subscribe(res => {
            this.plannerData = res;
            this.listLoading = false;
        })
    }

    loadData(event: any): void {
        this.ordering = event.ordering;
        this.page = event.page;
        this.pageSize = event.page_size;
        this.getPlannerData();
    }

}
