import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthsComponent } from './calendar-months.component';

describe('CalendarComponent', () => {
  let component: CalendarMonthsComponent;
  let fixture: ComponentFixture<CalendarMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarMonthsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
