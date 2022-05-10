import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalAssignmentComponent } from './criminal-assignment.component';

describe('CriminalAssignmentComponent', () => {
  let component: CriminalAssignmentComponent;
  let fixture: ComponentFixture<CriminalAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminalAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
