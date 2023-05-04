import { Component, OnInit } from '@angular/core';
import { PlannerService } from './planner.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {

    plannerData:any = [];
    
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
    ) {}

    ngOnInit(): void {
        this.getPlannerData();
    }

    getPlannerData() {
        this.plannerService.getData().subscribe(res => {
            this.plannerData = res;
        })
    }

    loadData(event:any): void {
        this.ordering = event.ordering;
        this.page = event.page;
        this.pageSize = event.page_size;
    }

}
