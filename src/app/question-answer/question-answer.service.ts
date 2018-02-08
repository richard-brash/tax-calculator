import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QuestionAnswerService {
    private share_data: any;
    constructor(
        private httpClient: HttpClient
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
}
