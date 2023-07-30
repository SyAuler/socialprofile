import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PokeApiService } from '../core/services/poke-api.service';
import { forkJoin, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    pokeApi = {}

    constructor(
        private pokeApiService: PokeApiService,
    ) { }

    getPokemon(params?: any): Observable<any> {
        return this.pokeApiService.get('pokemon', null, params);
    }

    getPokemonWithDetail(params?: any): Observable<any> {
        return this.pokeApiService.get('pokemon', null, params).pipe(
            switchMap((res: any) => {
                const pokemonRequests = res.results.map((el: any, index: number) => {
                    const pokemonUrl = `pokemon/${el.name}`;
                    return this.pokeApiService.get(pokemonUrl)
                });
                return forkJoin(pokemonRequests);
            })
        );
    }

}
