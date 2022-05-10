import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalAdmissionComponent } from './criminal-admission.component';

describe('CriminalAdmissionComponent', () => {
  let component: CriminalAdmissionComponent;
  let fixture: ComponentFixture<CriminalAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminalAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
