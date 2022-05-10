import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipleComponent } from './municiple.component';

describe('MunicipleComponent', () => {
  let component: MunicipleComponent;
  let fixture: ComponentFixture<MunicipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
