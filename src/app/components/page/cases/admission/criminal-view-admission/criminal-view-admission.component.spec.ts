import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalViewAdmissionComponent } from './criminal-view-admission.component';

describe('CriminalViewAdmissionComponent', () => {
  let component: CriminalViewAdmissionComponent;
  let fixture: ComponentFixture<CriminalViewAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminalViewAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalViewAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
