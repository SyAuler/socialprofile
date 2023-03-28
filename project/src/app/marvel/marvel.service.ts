import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MarvelApiService } from '../core/services/marvel-api.service';

@Injectable({
    providedIn: 'root'
})
export class MarvelService {

    constructor(
        private marvelApiService: MarvelApiService,
    ) {}

    getComics(params?: Object): Observable<any> {
        return this.marvelApiService.get('public/comics', null, params)
    }

    getComicsId(id: number): Observable<any> {
        return this.marvelApiService.get('public/comics/', id);
    }
    
}
