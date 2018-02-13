import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';

import { DropdownModule, CalendarModule, SpinnerModule, AutoCompleteModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/inputswitch';
import { KeyFilterModule } from 'primeng/keyfilter';

//import { StatesResolve, SalePersonsResolve } from '../shared/resolve';
import { DataSharingService } from '../shared/data-sharing';

// Add the SecureHttpClient to this modules (Injectable)
import { SecureHttpClient } from '../shared/secure-http-client';

import { QuestionAnswerComponent } from './question-answer.component';
import { QuestionAnswerRoutingModule } from './question-answer-routing.module';
import { QuestionAnswerService } from './question-answer.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    DropdownModule,
    CalendarModule,
    SpinnerModule,
    AutoCompleteModule,
    InputSwitchModule,
    KeyFilterModule,
    QuestionAnswerRoutingModule
  ],
  declarations: [QuestionAnswerComponent],
  exports: [QuestionAnswerComponent],
  providers: [
    HttpClient,
    QuestionAnswerService,
    DataSharingService,
    SecureHttpClient
  ]
})
export class QuestionAnswerModule {

}
