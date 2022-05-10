import { TestBed } from '@angular/core/testing';

import { CourtLevelsService } from './court-levels.service';

describe('CourtLevelsService', () => {
  let service: CourtLevelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtLevelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
