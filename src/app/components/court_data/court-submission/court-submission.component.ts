import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-court-submission',
  templateUrl: './court-submission.component.html',
  styleUrls: ['./court-submission.component.scss']
})
export class CourtSubmissionComponent implements OnInit {
  title = 'case management';
  constructor() { }

  ngOnInit(): void {
  }

}
