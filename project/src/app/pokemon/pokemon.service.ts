import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PokeApiService } from '../core/services/poke-api.service';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(
        private pokeApiService: PokeApiService,
    ) { }

    getPokemon(params?: any): Observable<any> {
        console.log('params', params)
        return this.pokeApiService.get('pokemon', null, params);
    }

    getBerry(id?: number): Observable<any> {
        return this.pokeApiService.get(`berry/${id}/`);
    }

}
