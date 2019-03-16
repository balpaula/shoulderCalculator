import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantScorePageComponent } from './constant-score-page.component';

describe('ConstantScorePageComponent', () => {
  let component: ConstantScorePageComponent;
  let fixture: ComponentFixture<ConstantScorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstantScorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantScorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
