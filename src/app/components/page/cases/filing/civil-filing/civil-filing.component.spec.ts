import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilFilingComponent } from './civil-filing.component';

describe('CivilFilingComponent', () => {
  let component: CivilFilingComponent;
  let fixture: ComponentFixture<CivilFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilFilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
