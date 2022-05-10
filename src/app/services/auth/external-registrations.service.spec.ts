import { TestBed } from '@angular/core/testing';

import { ExternalRegistrationsService } from './external-registrations.service';

describe('ExternalRegistrationsService', () => {
  let service: ExternalRegistrationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalRegistrationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
