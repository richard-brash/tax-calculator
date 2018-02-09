import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result;
  constructor(
    private route: ActivatedRoute,
  ) {
    console.log('calculatedResponse = ', this.route.snapshot.data['calculatedResponse']);
    this.result = this.route.snapshot.data['calculatedResponse'];
   }

  ngOnInit() {
  }

}
