import { TestBed } from '@angular/core/testing';

import { CriminalApplicationService } from './criminal-application.service';

describe('CriminalApplicationService', () => {
  let service: CriminalApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriminalApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
