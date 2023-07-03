import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCardHeaderComponent } from './day-card-header.component';

describe('DayCardHeaderComponent', () => {
  let component: DayCardHeaderComponent;
  let fixture: ComponentFixture<DayCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayCardHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
