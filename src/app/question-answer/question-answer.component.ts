import { Component, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from '../shared/data-sharing';
import { QuestionAnswerService } from './question-answer.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {

  qa;
  jsonStr;
  statusOptions = [
    { id: 'S', name: 'Single' },
    { id: 'MFJ', name: 'Married filing joint' },
    { id: 'MJS', name: 'Married filing separate' },
    { id: 'HOH', name: 'Head of Household' }
  ];
  keepBooksOptions = [
    { label: 'Quickbooks', value: 'Quickbooks' },
    { label: 'Excel', value: 'Excel' },
    { label: 'Other accounting softward', value: 'Other accounting softward' },
    { label: 'Do not have a regular method', value: 'Do not have a regular method' }
  ];
  ownPercentageOptions = [
    { label: '05', value: '05' },
    { label: '10', value: '10' },
    { label: '15', value: '15' },
    { label: '20', value: '20' },
    { label: '25', value: '25' },
    { label: '30', value: '30' },
    { label: '35', value: '35' },
    { label: '40', value: '40' },
    { label: '45', value: '45' },
    { label: '50', value: '50' },
    { label: '55', value: '55' },
    { label: '60', value: '60' },
    { label: '65', value: '65' },
    { label: '70', value: '70' },
    { label: '75', value: '75' },
    { label: '80', value: '80' },
    { label: '85', value: '85' },
    { label: '90', value: '90' },
    { label: '95', value: '95' },
    { label: '100', value: '100' }
  ];
  stateOptions;
  salePersons;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataSharing: DataSharingService,
    private questionAnswerService: QuestionAnswerService
  ) {
    this.qa = {
      '_TaxableIncome': 0,
      '_BusinessOwner': false,
      '_SoleOwner': false,
      '_PercentOwnership': '05',
      '_NumberOfChildren': 0,
      '_ChildrenWorkInBusiness': false,
      '_VacationAmount': 0,
      '_HSA': false,
      '_HomeOffice': false,
      '_BuildingPurchase': false,
      '_BuildingCost': 0,
      '_CompanyRetirementPlan': false,
      '_CurrentOnTaxes': false,
      '_BooksCurrent': false,
      '_LifeInsurance': false,
      '_LivingTrust': false,
      '_HaveWill': false,
      '_SalePerson': ''
    };
    // this.stateOptions = this.route.snapshot.data['states'];
    // this.salePersons = this.route.snapshot.data['salePersons'].Data;
  }

  ngOnInit() {
    this.questionAnswerService.getStates().subscribe(data => this.stateOptions = data);

    this.questionAnswerService.getSalesPeople().then(data => {
      let sps = [];
      data.Data.forEach(salePerson => {
        sps.push(
          {
            ID: salePerson.ID,
            FirstName: salePerson.FirstName,
            LastName: salePerson.LastName,
            FullName: salePerson.FirstName + ' ' + salePerson.LastName
          }
        );
      });
      this.salePersons = sps;
    });
  }

  calculateTax() {
    this.qa['_FilingStatus'] = this.qa['_FilingStatus']['id'];
    this.qa['State'] = this.qa['State']['code'];
    this.jsonStr = JSON.stringify(this.qa);
    this.jsonStr = this.jsonStr.replace(/false/g, '"No"');
    this.jsonStr = this.jsonStr.replace(/true/g, '"Yes"');
    this.dataSharing.changeMessage(this.jsonStr);
    this.router.navigate(['/result']);
  }
}
