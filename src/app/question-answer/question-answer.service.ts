import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionAnswerService {
    private share_data: any;
    constructor(
        private httpClient: HttpClient
    ) { }
    getStates() {
        return this.httpClient.get('../../assets/json/statesObj.json');
    }
}
