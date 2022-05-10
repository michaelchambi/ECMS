import { TestBed } from '@angular/core/testing';

import { CivilViewService } from './civil-view.service';

describe('CivilViewService', () => {
  let service: CivilViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CivilViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
