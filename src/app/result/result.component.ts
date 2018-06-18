import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result;

  TaxScale = [
    { key: 0, name: 'None Selected' },
    { key: 1, name: 'Single / W2' },
    { key: 2, name: 'Married / W2' },
    { key: 3, name: 'Single / Business Owner' },
    { key: 4, name: 'Married / Business Owner' }
  ];

  TaxProgram = [
    { key: 0, name: 'NADA' },
    { key: 1, name: 'ELOS' },
    { key: 2, name: 'LOS' },
    { key: 3, name: 'GLS / Tax Prep' },
    { key: 4, name: 'GLS / Tax Savings' },
    { key: 5, name: 'TSA' }
  ];


  internal = false;
  constructor(
    private route: ActivatedRoute,
  ) {
    this.result = this.route.snapshot.data['calculatedResponse'];
    this.internal = this.result.data.internal;
  }


  downloadFile(){
    
    window.open("data:application/pdf;base64," + encodeURI(this.result.pdf),'_blank');
  }

  ngOnInit() {

  }

}
