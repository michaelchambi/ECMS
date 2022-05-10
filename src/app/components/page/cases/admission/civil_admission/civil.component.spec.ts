import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilAdmissionComponent } from './civil.component';

describe('CivilAdmissionComponent', () => {
  let component: CivilAdmissionComponent;
  let fixture: ComponentFixture<CivilAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
