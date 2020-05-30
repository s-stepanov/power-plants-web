import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindroseChartComponent } from './windrose-chart.component';

describe('WindroseChartComponent', () => {
  let component: WindroseChartComponent;
  let fixture: ComponentFixture<WindroseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindroseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindroseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
