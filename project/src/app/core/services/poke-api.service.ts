import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const POKE_URL = environment.pokeapi;

@Injectable({
    providedIn: 'root'
})
export class PokeApiService {

    constructor(private httpClient: HttpClient) { }

    public get(endpoint: string, id: any = null, params: any = null): Observable<any> {
        if (id === null) {
            return this.httpClient.get(
                POKE_URL + endpoint,
                { params: params }
            );
        } else {
            return this.httpClient.get(
                POKE_URL + endpoint + id.toString() + '/',
                { params: params }
            );
        }
    }

}
