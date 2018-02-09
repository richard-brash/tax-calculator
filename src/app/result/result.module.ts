import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CalculateResolve } from '../shared/resolve';
import { DataSharingService } from '../shared/data-sharing';
import { QuestionAnswerService } from '../question-answer/question-answer.service';

import { ResultComponent } from './result.component';
import { resultRoutes } from './result-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(resultRoutes),
  ],
  declarations: [ResultComponent],
  exports: [ResultComponent],
  providers: [
    CalculateResolve,
    DataSharingService,
    QuestionAnswerService
  ]
})
export class ResultModule { }
