import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtLevelComponent } from './court-level.component';

describe('CourtLevelComponent', () => {
  let component: CourtLevelComponent;
  let fixture: ComponentFixture<CourtLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
