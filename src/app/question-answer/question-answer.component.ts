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
  data = {};
  statusOptions = [
    { id: 'S', name: 'Single' },
    { id: 'MFJ', name: 'Married filing joint' },
    { id: 'MJS', name: 'Married filing separate' },
    { id: 'HOH', name: 'Head of Household' }
  ];
  keepBooksOptions = [
    {label: 'Quickbooks', value: 'Quickbooks'},
    {label: 'Excel', value: 'Excel'},
    {label: 'Other accounting softward', value: 'Other accounting softward'},
    {label: 'Do not have a regular method', value: 'Do not have a regular method'}
  ];
  ownPercentageOptions = [
    {label: '05', value: '05'},
    {label: '10', value: '10'},
    {label: '15', value: '15'},
    {label: '20', value: '20'},
    {label: '25', value: '25'},
    {label: '30', value: '30'},
    {label: '35', value: '35'},
    {label: '40', value: '40'},
    {label: '45', value: '45'},
    {label: '50', value: '50'},
    {label: '55', value: '55'},
    {label: '60', value: '60'},
    {label: '65', value: '65'},
    {label: '70', value: '70'},
    {label: '75', value: '75'},
    {label: '80', value: '80'},
    {label: '85', value: '85'},
    {label: '90', value: '90'},
    {label: '95', value: '95'},
    {label: '100', value: '100'}
  ];
  stateOptions;
  salePersons;
  constructor(
    private route: ActivatedRoute
  ) { 
    this.qa = {};
    this.stateOptions = this.route.snapshot.data['states'];
    this.salePersons = this.route.snapshot.data['salePersons'];
  }

  ngOnInit() {
  }

}
