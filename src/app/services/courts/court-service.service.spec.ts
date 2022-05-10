import { TestBed } from '@angular/core/testing';

import { CourtServiceService } from './court-service.service';

describe('CourtServiceService', () => {
  let service: CourtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
