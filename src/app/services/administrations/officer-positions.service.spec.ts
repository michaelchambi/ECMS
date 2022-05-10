import { TestBed } from '@angular/core/testing';

import { OfficerPositionsService } from './officer-positions.service';

describe('OfficerPositionsService', () => {
  let service: OfficerPositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficerPositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
