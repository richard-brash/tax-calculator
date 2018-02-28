import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecureHttpClient } from '../shared/secure-http-client';
import { environment } from '../../environments/environment';

@Injectable()
export class QuestionAnswerService {
    private share_data: any;
    constructor(
        private httpClient: HttpClient,
        private secureHttpClient: SecureHttpClient
    ) { }

    getStates() {
        return this.httpClient.get('/assets/json/statesObj.json');
    }

    calculateTax(data) {
        const url = environment.apiUrl + 'calculate';
        return this.secureHttpClient.post(url, data)
            .toPromise()
            .then(res => res.json() )
            .catch(this.handleError);
    }

    getSalesPeople() {
        const url = environment.apiUrl + 'salespeople';
        console.log(url);
        return this.secureHttpClient.get(url)
            .toPromise()
            .then(res => res.json() )
            .catch(this.handleError);
    }

    protected handleError(error: any) {
        return Promise.reject(error.message || error);
    }
}
