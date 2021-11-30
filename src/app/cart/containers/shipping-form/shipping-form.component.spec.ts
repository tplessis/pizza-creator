import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { ShippingFormComponent } from './shipping-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { TimeSlotComponent } from '../../components/time-slot/time-slot.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '@shared/services/cart.service';
import { GeocodingService } from '@shared/services/geocoding.service';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import dayjs from 'dayjs';

const fillForm = (component) => {
  const deliveryTimecontrol: AbstractControl =
    component.form.controls['deliveryTime'];
  deliveryTimecontrol.setValue(dayjs().hour(11).minute(0).second(0).toDate());
};

describe('ShippingFormComponent', () => {
  let component: ShippingFormComponent;
  let fixture: ComponentFixture<ShippingFormComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'cart/payment-selection', component: PaymentFormComponent }
        ])
      ],
      declarations: [ShippingFormComponent, TimeSlotComponent],
      providers: [CartService, GeocodingService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(ShippingFormComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
    cartService = TestBed.inject(CartService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a shipping form component', () => {
    expect(component).toBeTruthy();
  });

  it('should display user address if given', () => {
    component.user = {
      firstname: 'Thomas',
      lastname: 'Plessis',
      email: 'tom.plessis@gmail.com',
      phone: '0600000000',
      address: 'Place du capitole',
      zipcode: '31000',
      city: 'Toulouse'
    };
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('.username').textContent
    ).toContain(component.user.firstname + ' ' + component.user.lastname);
    expect(
      fixture.nativeElement.querySelector('.address').textContent
    ).toContain(component.user.address);
    expect(fixture.nativeElement.querySelector('.city').textContent).toContain(
      component.user.zipcode + ' ' + component.user.city
    );
  });

  it('should display error messages if required inputs are not filled', () => {
    component.form.reset();
    component.form.markAllAsTouched();
    fixture.detectChanges();
    expect(component.form.valid).toBeFalsy();
    expect(fixture.nativeElement.querySelector('h2 span.error')).toBeTruthy();
  });

  it('should submits the form successfully', () => {
    fillForm(component);
    component.onSubmit();
    expect(component.form.valid).toBeTruthy();
  });

  it('should call cartService after the form has been successfully submitted', () => {
    spyOn(cartService, 'setDeliveryTime').and.callThrough();
    fillForm(component);
    component.onSubmit();
    expect(component.form.valid).toBeTruthy();
    expect(cartService.setDeliveryTime).toHaveBeenCalled();
  });
});
