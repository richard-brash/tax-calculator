import { Component, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswerService } from './question-answer.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {

  qa;
  statusOptions = [
    { id: 'S', name: 'Single' },
    { id: 'MFJ', name: 'Married filing joint' },
    { id: 'MJS', name: 'Married filing separate' },
    { id: 'HOH', name: 'Head of Household' }
  ];
  stateOptions = [];
  salesPeople = [];

  constructor(
    private route: ActivatedRoute,
    private qaservice: QuestionAnswerService
  ) {
    this.qa = {};
    this.stateOptions = this.route.snapshot.data['states'];
  }

  ngOnInit() {

    // Call the Service and when it returns, set the data to the Array.
    this.qaservice.getSalesPeople().then(result => {
      console.log(result.Data);
      this.salesPeople = result.Data;

    });

  }

}
