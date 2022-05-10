import { TestBed } from '@angular/core/testing';

import { SenioritiesService } from './seniorities.service';

describe('SenioritiesService', () => {
  let service: SenioritiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenioritiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
