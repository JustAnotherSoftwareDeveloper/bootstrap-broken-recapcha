import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedRecaptchaComponent } from './fixed-recaptcha.component';

describe('FixedRecaptchaComponent', () => {
  let component: FixedRecaptchaComponent;
  let fixture: ComponentFixture<FixedRecaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedRecaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedRecaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
