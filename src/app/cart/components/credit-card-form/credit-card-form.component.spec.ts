import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreditCardFormComponent } from './credit-card-form.component';

describe('CreditCardFormComponent', () => {
  let component: CreditCardFormComponent;
  let fixture: ComponentFixture<CreditCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ CreditCardFormComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(CreditCardFormComponent);
    component = fixture.componentInstance;

    component.parent = fb.group({
      method: [null, Validators.required],
      card: fb.group({
        number: [
          null,
          [Validators.pattern(/([0-9]{4} [0-9]{4,6} [0-9]{4,6} ?[0-9]{0,4})/)]
        ],
        name: [null],
        expiration: [null],
        code: [null]
      })
    });

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
