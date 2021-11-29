import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '@shared/services/cart.service';
import { CustomerFormComponent } from './customer-form.component';

const fillForm = (component) => {
  const firstnameControl: AbstractControl =
    component.form.controls['firstname'];
  const lastnameControl: AbstractControl = component.form.controls['lastname'];
  const emailControl: AbstractControl = component.form.controls['email'];
  const phoneControl: AbstractControl = component.form.controls['phone'];
  const addressControl: AbstractControl = component.form.controls['address'];
  const zipcodeControl: AbstractControl = component.form.controls['zipcode'];
  const cityControl: AbstractControl = component.form.controls['city'];

  firstnameControl.setValue('Thomas');
  lastnameControl.setValue('Plessis');
  emailControl.setValue('myeamail@gmail.com');
  phoneControl.setValue('0600000000');
  addressControl.setValue('Place du capitole');
  zipcodeControl.setValue('31000');
  cityControl.setValue('Toulouse');
};

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;
  let cartService: CartService;
  let router;

  beforeEach(async () => {
    router = {
      navigate: jasmine.createSpy('navigate')
    };
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [CustomerFormComponent],
      providers: [CartService, { provide: Router, useValue: router }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    cartService = TestBed.inject(CartService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a customer form component', () => {
    expect(component).toBeTruthy();
  });

  it('should display error messages if required inputs are not filled', () => {
    component.form.reset();
    component.form.markAllAsTouched();
    fixture.detectChanges();
    expect(component.form.valid).toBeFalsy();
    expect(
      fixture.nativeElement.querySelector('label[for=firstname] span.error')
    ).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('label[for=lastname] span.error')
    ).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('label[for=email] span.error')
    ).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('label[for=phone] span.error')
    ).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('label[for=address] span.error')
    ).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('label[for=zipcode] span.error')
    ).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('label[for=city] span.error')
    ).toBeTruthy();
  });

  it('should submits the form successfully', () => {
    fillForm(component);
    component.onSubmit();
    expect(component.form.valid).toBeTruthy();
  });

  it('should redirect to cart page after the form has been successfully submitted', async () => {
    fillForm(component);
    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledWith(['cart/shipping-infos']);
  });

  it('should call cartService after the form has been successfully submitted', () => {
    spyOn(cartService, 'setUser').and.callThrough();
    fillForm(component);
    component.onSubmit();
    expect(component.form.valid).toBeTruthy();
    expect(cartService.setUser).toHaveBeenCalled();
  });
});
