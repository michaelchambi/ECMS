import { TestBed } from '@angular/core/testing';

import { ViewCriminalService } from './view-criminal.service';

describe('ViewCriminalService', () => {
  let service: ViewCriminalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCriminalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
