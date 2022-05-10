import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criminal-decision',
  templateUrl: './criminal-decision.component.html',
  styleUrls: ['./criminal-decision.component.scss']
})
export class CriminalDecisionComponent implements OnInit {
 title = 'case management';
  constructor() { }

  ngOnInit(): void {
  }

}
