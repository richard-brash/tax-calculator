import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DropdownModule, CalendarModule, SpinnerModule, AutoCompleteModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/inputswitch';
import { KeyFilterModule } from 'primeng/keyfilter';


import { CalculateResolve } from '../shared/resolve';
import { DataSharingService } from '../shared/data-sharing';
import { QuestionAnswerService } from '../question-answer/question-answer.service';

import { ResultComponent } from './result.component';
import { resultRoutes } from './result-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    SpinnerModule,
    AutoCompleteModule,
    InputSwitchModule,
    KeyFilterModule,    
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
