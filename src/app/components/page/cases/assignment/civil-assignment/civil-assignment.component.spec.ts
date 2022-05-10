import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilAssignmentComponent } from './civil-assignment.component';

describe('CivilAssignmentComponent', () => {
  let component: CivilAssignmentComponent;
  let fixture: ComponentFixture<CivilAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
