import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthNormalizedConstantScorePageComponent } from './strength-normalized-constant-score-page.component';

describe('StrengthNormalizedConstantScorePageComponent', () => {
  let component: StrengthNormalizedConstantScorePageComponent;
  let fixture: ComponentFixture<StrengthNormalizedConstantScorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthNormalizedConstantScorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthNormalizedConstantScorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
