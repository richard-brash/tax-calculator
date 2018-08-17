import { Component, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataSharingService } from '../shared/data-sharing';
import { QuestionAnswerService } from './question-answer.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {

  qa;
  // testData;
  testResult;
  downloadUrl;

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
    { label: 'Other accounting software', value: 'Other accounting software' },
    { label: 'Do not have a regular method', value: 'Do not have a regular method' }
  ];

  yesno = [
    { name: 'Yes', value: true },
    { name: 'No', value: false },
  ];

  ownPercentageOptions = [
    { label: '00', value: '00' },
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
  salesPersons = [
    {
      ID: 0,
      FirstName: 'Loading',
      LastName: 'Data',
      FullName: 'Loading Data'
    }    
  ];

  internal = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataSharing: DataSharingService,
    private questionAnswerService: QuestionAnswerService
  ) {

    this.qa = {
      '_TaxableIncome': 0,
      // '_BusinessOwner': false,
      // '_MarriedFilingJointly': false,
      '_SoleOwner': false,
      '_PercentOwnership': '05',
      '_NumberOfChildren': 0,
      '_ChildrenWorkInBusiness': 0,
      // '_ChildrenWorkInBusiness': false,
      '_VacationAmount': 0,
      '_HSA': false,
      '_HomeOffice': false,
      '_BuildingPurchase': false,
      '_BuildingCost': 0,
      '_CompanyRetirementPlan': false,
      '_CurrentOnTaxes': true,
      '_BooksCurrent': false,
      '_LifeInsurance': false,
      '_LivingTrust': false,
      '_HaveWill': false,
      '_SalesPerson': '...'
    };

    // this.testData = {
    //   'FirstName':'John',
    //   'LastName':'Smith',
    //   'State': 'MD',
    //   'ContactId': 99999,
    //   'Email':'john@smithco.com',

    //   '_TaxableIncome': 987675,
    //   '_BusinessOwner': true,
    //   '_MarriedFilingJointly': false,
    //   '_SoleOwner': true,
    //   '_PercentOwnership': '05',
    //   '_NumberOfChildren': 0,
    //   '_ChildrenWorkInBusiness': 0,
    //   '_VacationAmount': 0,
    //   '_HSA': false,
    //   '_HomeOffice': false,
    //   '_BuildingPurchase': false,
    //   '_BuildingCost': 0,
    //   '_CompanyRetirementPlan': false,
    //   '_CurrentOnTaxes': true,
    //   '_BooksCurrent': false,
    //   '_LifeInsurance': false,
    //   '_LivingTrust': false,
    //   '_HaveWill': false,
    //   '_SalesPerson': 'Drew Miles'
    // };    

  }

  ngOnInit() {

    // subscribe to router event
    this.route.queryParams.subscribe((params: Params) => {
      let internal = params['internal'];
      if(internal && internal == 'yes'){
        this.internal = true;
      }
    });


    // this.questionAnswerService.calculateTax(this.testData).then(result => {
    //     this.testResult = result;
    //     this.downloadUrl = 'data:application/pdf;base64,' + this.testResult.pdf;
    // })


    this.questionAnswerService.getStates().then(data => this.stateOptions = data);

    this.questionAnswerService.getSalesPeople().then(data => {
      let sps = [];
      data.forEach(salesPerson => {
        sps.push(
          {
            ID: salesPerson.ID,
            FirstName: salesPerson.FirstName,
            LastName: salesPerson.LastName,
            FullName: salesPerson.FirstName + ' ' + salesPerson.LastName
          }
        );
      });
      this.salesPersons = sps;
    });
  }

  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
  
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
  
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
  
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      var byteArray = new Uint8Array(byteNumbers);
  
      byteArrays.push(byteArray);
    }
  
    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  downloadFile(){    

    var url = 'data:application/pdf;base64,' + this.testResult.pdf;
    fetch(url)
    .then(res => res.blob())
    .then(blob => window.URL.createObjectURL(blob))
    .then(url => window.open(url, '_blank'));
  }


  calculateTax() {
    // this.qa['_FilingStatus'] = this.qa['_FilingStatus']['id'];
    this.qa['State'] = this.qa['State']['code'];

    this.qa['_BusinessOwner'] = this.qa['_BusinessOwner']['value'];
    this.qa['_MarriedFilingJointly'] = this.qa['_MarriedFilingJointly']['value'];    

    this.qa['internal'] = this.internal;

    if(this.qa['_SalesPerson'] != '...'){  
      this.qa['_SalesPerson'] = this.qa['_SalesPerson']['FullName']
    }

    this.qa['internal'] = this.internal;

    this.jsonStr = JSON.stringify(this.qa);

    this.dataSharing.changeMessage(this.jsonStr);
    if(this.internal){
      this.router.navigate(['/result', {internal: 'yes'}]);
    } else {
      this.router.navigate(['/result']);
    }
    
  }
}
