import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { QuestionAnswerService } from '../../question-answer/question-answer.service';
import { DataSharingService } from '../data-sharing';

@Injectable()
export class CalculateResolve implements Resolve<any> {
    message;
    constructor(
        private questionAnswerService: QuestionAnswerService,
        private dataSharing: DataSharingService,
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        this.dataSharing.currentMessage.subscribe(message => this.message = message);
        return this.questionAnswerService.calculateTax(JSON.parse(this.message));
    }
}
