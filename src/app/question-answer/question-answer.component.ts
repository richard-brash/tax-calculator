import { Component, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  constructor(
    private route: ActivatedRoute
  ) { 
    this.qa = {};
    this.stateOptions = this.route.snapshot.data['states'];
  }

  ngOnInit() {
  }

}
