import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionAnswerComponent } from './question-answer.component';
import { StatesResolve } from '../shared/resolve/states';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: QuestionAnswerComponent,
        resolve:{
          states : StatesResolve
        }
      }
    ])
  ],
  exports: [RouterModule]
})
export class QuestionAnswerRoutingModule { }
