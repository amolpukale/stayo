import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelInsertComponent } from './hotel-insert.component';

describe('HotelInsertComponent', () => {
  let component: HotelInsertComponent;
  let fixture: ComponentFixture<HotelInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
