import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtRoomComponent } from './court-room.component';

describe('CourtRoomComponent', () => {
  let component: CourtRoomComponent;
  let fixture: ComponentFixture<CourtRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
