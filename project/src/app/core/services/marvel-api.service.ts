import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const MARVEL_URL = environment.marvel;

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor() { }
  
}
