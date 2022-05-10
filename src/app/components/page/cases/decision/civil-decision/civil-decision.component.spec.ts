import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilDecisionComponent } from './civil-decision.component';

describe('CivilDecisionComponent', () => {
  let component: CivilDecisionComponent;
  let fixture: ComponentFixture<CivilDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilDecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
