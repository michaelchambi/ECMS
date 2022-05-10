import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.scss']
})
export class CourtComponent implements OnInit {
  title = 'case management';
  constructor() { }

  ngOnInit(): void {
  }

}
