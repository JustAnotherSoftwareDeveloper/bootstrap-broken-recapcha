import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenRecaptchaComponent } from './broken-recaptcha.component';

describe('BrokenRecaptchaComponent', () => {
  let component: BrokenRecaptchaComponent;
  let fixture: ComponentFixture<BrokenRecaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokenRecaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenRecaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
