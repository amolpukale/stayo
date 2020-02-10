import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomInsertComponent } from './room-insert.component';

describe('RoomInsertComponent', () => {
  let component: RoomInsertComponent;
  let fixture: ComponentFixture<RoomInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
