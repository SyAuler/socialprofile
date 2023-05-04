import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPlannerComponent } from './month-planner.component';

describe('MonthPlannerComponent', () => {
  let component: MonthPlannerComponent;
  let fixture: ComponentFixture<MonthPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
