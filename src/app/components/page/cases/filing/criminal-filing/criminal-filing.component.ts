import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criminal-filing',
  templateUrl: './criminal-filing.component.html',
  styleUrls: ['./criminal-filing.component.scss']
})
export class CriminalFilingComponent implements OnInit {
  title = 'case management';
  constructor() { }

  ngOnInit(): void {
  }

}
