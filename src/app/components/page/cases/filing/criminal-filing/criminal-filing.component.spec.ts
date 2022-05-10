import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalFilingComponent } from './criminal-filing.component';

describe('CriminalFilingComponent', () => {
  let component: CriminalFilingComponent;
  let fixture: ComponentFixture<CriminalFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminalFilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
