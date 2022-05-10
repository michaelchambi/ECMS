import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-court-room',
  templateUrl: './court-room.component.html',
  styleUrls: ['./court-room.component.scss']
})
export class CourtRoomComponent implements OnInit {
  title = 'case management';
  constructor() { }

  ngOnInit(): void {
  }

}
