import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalDecisionComponent } from './criminal-decision.component';

describe('CriminalDecisionComponent', () => {
  let component: CriminalDecisionComponent;
  let fixture: ComponentFixture<CriminalDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminalDecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
