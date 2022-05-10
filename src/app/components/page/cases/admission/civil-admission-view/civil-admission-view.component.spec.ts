import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilAdmissionViewComponent } from './civil-admission-view.component';

describe('CivilAdmissionViewComponent', () => {
  let component: CivilAdmissionViewComponent;
  let fixture: ComponentFixture<CivilAdmissionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilAdmissionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilAdmissionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
