import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

const MARVEL_URL = environment.marvel;
const marvelPrivateKey = environment.marvelPrivateKey
const marvelPublicKey = environment.marvelPublicKey
const timestamp = Date.now();

interface RequestParams {
    ts: string;
    apikey: string;
    hash: string;
    [key: string]: any;
}
@Injectable({
    providedIn: 'root'
})
export class MarvelApiService {

    hashAuthentication: any

    constructor(
        private httpClient: HttpClient,
    ) { }

    private generateMD5(): string {
        const hash = CryptoJS.MD5(timestamp + marvelPrivateKey + marvelPublicKey);
        return hash.toString();
    }

    private getRequestParams(params: any): RequestParams {
        return {
            ts: `${timestamp}`,
            apikey: `${marvelPublicKey}`,
            hash: this.generateMD5(),
            ...params,
        };
    }

    public get(endpoint: string, id: number | null, params: any = null): Observable<any> {
        const url = `${MARVEL_URL}${endpoint}${id ? `${id}/` : ''}`;
        const requestParams = this.getRequestParams(params);
        return this.httpClient.get(url, { params: requestParams });
    }

}
