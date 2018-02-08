import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { QuestionAnswerService } from '../../question-answer/question-answer.service';

@Injectable()
export class SalePersonsResolve implements Resolve<any> {

    constructor(private questionAnswerService: QuestionAnswerService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.questionAnswerService.getSalePersons();
    }
}