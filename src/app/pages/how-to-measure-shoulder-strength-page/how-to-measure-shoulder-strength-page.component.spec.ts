import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToMeasureShoulderStrengthPageComponent } from './how-to-measure-shoulder-strength-page.component';

describe('HowToMeasureShoulderStrengthPageComponent', () => {
  let component: HowToMeasureShoulderStrengthPageComponent;
  let fixture: ComponentFixture<HowToMeasureShoulderStrengthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToMeasureShoulderStrengthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToMeasureShoulderStrengthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
