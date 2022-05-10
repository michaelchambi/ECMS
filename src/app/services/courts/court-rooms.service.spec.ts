import { TestBed } from '@angular/core/testing';

import { CourtRoomsService } from './court-rooms.service';

describe('CourtRoomsService', () => {
  let service: CourtRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
