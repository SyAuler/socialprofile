import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlannerService {

    data = [
        {
            uuid: 1,
            name: 'nameeee',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 2,
            name: 'abcdef',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 3,
            name: 'abacate',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 4,
            name: 'chuva',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 5,
            name: 'musica',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 6,
            name: 'lalala',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 7,
            name: 'teste',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 8,
            name: 'musica',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 9,
            name: 'lalala',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 10,
            name: 'teste',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 11,
            name: 'lalala',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
        {
            uuid: 12,
            name: 'teste',
            created_date: '',
            event_date: '',
            description: 'Lorem ipsum',

        },
    ]

    constructor() { }

    getData(params?:any) {
        return of(this.data)
    }
}
