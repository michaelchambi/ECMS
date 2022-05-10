import { TestBed } from '@angular/core/testing';

import { CourtSubmissionsService } from './court-submissions.service';

describe('CourtSubmissionsService', () => {
  let service: CourtSubmissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtSubmissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
