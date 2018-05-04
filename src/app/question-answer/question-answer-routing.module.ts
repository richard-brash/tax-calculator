import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionAnswerComponent } from './question-answer.component';
// import { StatesResolve, SalePersonsResolve } from '../shared/resolve';

@NgModule({
  imports: [
    RouterModule.forChild([
      // {
      //   path: '',
      //   redirectTo: 'questionaire',
      //   pathMatch: 'full',
      // },
      {
        path: '',
        component: QuestionAnswerComponent,
      //   children: [
      //     { path: '', component: QuestionAnswerComponent},
      //     { path: ':id', component: QuestionAnswerComponent}
      // ]
      
      }
    ])
  ],
  exports: [RouterModule]
})
export class QuestionAnswerRoutingModule { }
