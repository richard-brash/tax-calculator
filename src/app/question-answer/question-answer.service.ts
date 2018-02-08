import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecureHttpClient } from '../shared/secure-http-client';

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
    getSalePersons() {
        const httpOptions = {
            headers: new HttpHeaders({
              'Authorization': 'Basic ' + btoa('keyAuthorize:MyK3yC0d3')
            })
          };
          console.log(httpOptions)
        return this.httpClient.get('https://rbm-tsp.azurewebsites.net/getstarted/salespeople', httpOptions);
    }

    //  This call returns a promise from SecureHttpClient
    getSalesPeople() {
        const url = 'https://rbm-tsp-calculator-api.azurewebsites.net/api/salespeople';
        return this.secureHttpClient.get(url)
            .toPromise()
            .then(res => res.json() )
            .catch(this.handleError);
    }

    protected handleError(error: any) {
        return Promise.reject(error.message || error);
    }
}
