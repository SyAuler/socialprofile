import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

const API_URL = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class SocialApiService {

  constructor() { }
}
