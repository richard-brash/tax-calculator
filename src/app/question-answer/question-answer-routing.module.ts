import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionAnswerComponent } from './question-answer.component';
import { StatesResolve, SalePersonsResolve } from '../shared/resolve';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: QuestionAnswerComponent,
        resolve:{
          states : StatesResolve,
          salePersons : SalePersonsResolve
        }
      }
    ])
  ],
  exports: [RouterModule]
})
export class QuestionAnswerRoutingModule { }
