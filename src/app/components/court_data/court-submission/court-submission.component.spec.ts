import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtSubmissionComponent } from './court-submission.component';

describe('CourtSubmissionComponent', () => {
  let component: CourtSubmissionComponent;
  let fixture: ComponentFixture<CourtSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
