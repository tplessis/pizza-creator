import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PaymentFormComponent } from './payment-form.component';
import { CreditCardFormComponent } from '../../components/credit-card-form/credit-card-form.component';

describe('PaymentFormComponent', () => {
  let component: PaymentFormComponent;
  let fixture: ComponentFixture<PaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PaymentFormComponent, CreditCardFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(PaymentFormComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message if payment method is not selected', () => {
    component.form.reset();
    component.form.markAllAsTouched();
    fixture.detectChanges();
    expect(component.form.valid).toBeFalsy();
    expect(fixture.debugElement.query(By.css('h2 span.error'))).toBeTruthy();
  });

  it('should submits the form successfully if paypal method was selected', () => {
    component.form.reset();
    component.form.controls['method'].setValue('paypal');
    component.onSubmit();
    expect(component.form.valid).toBeTruthy();
  });
});
