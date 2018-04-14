import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/Common/http';

import 'rxjs/add/operator/map';
import { Meteo } from '../models/meteo.model';



@Injectable()
export class MeteoServiceProvider {
    apiKey: string = "YOUR_API_KEY"

    private baseUrl = "http://api.apixu.com/v1/current.json?key=";

    constructor(public http: HttpClient) {
        
    }

    public getMeteo(city: string): any{
        const url = `${this.baseUrl}${this.apiKey}&q=${city}&lang=fr`;

        return this.http.get(url)
            .toPromise()
            .then(response => response as Meteo)
            .catch(error => console.log('Une érreur est survenue' + error))
    }
}