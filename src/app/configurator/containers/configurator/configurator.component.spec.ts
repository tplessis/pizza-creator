import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ConfiguratorComponent } from './configurator.component';
import { CartService } from '../../../shared/services/cart.service';
import { Router } from '@angular/router';

export function findComponent<T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}

const cartService = {
  addPizza() {}
};

const fillForm = (component, numberOfToppings = 3) => {
  const sizeControl: AbstractControl = component.form.controls['size'];
  const toppingsControl: AbstractControl = component.form.controls['toppings'];
  sizeControl.setValue(component.sizes[0]);
  toppingsControl.setValue(component.toppings.slice(0, numberOfToppings));
};

describe('ConfiguratorComponent', () => {
  let component: ConfiguratorComponent;
  let fixture: ComponentFixture<ConfiguratorComponent>;
  let router;

  beforeEach(async () => {
    router = {
      navigate: jasmine.createSpy('navigate')
    };
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [ConfiguratorComponent],
      providers: [
        {
          provide: CartService,
          useValue: cartService
        },
        { provide: Router, useValue: router }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the configurator', () => {
    expect(component).toBeTruthy();
  });

  it('should renders a pizza viewer', () => {
    const pizzaViewer = findComponent(fixture, 'pizza-viewer');
    expect(pizzaViewer).toBeTruthy();
  });

  it('should have a form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should have a form invalid when it has less than 3 toppings', () => {
    fillForm(component, 2);
    expect(component.form.valid).toBeFalsy();
  });

  it('should submits the form successfully', async () => {
    fillForm(component);
    console.log(component.form);
    expect(component.form.valid).toBeTruthy();
  });

  it('should redirect to cart page after the form has been successfully submitted', async () => {
    fillForm(component);
    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledWith(['cart']);
  });
});
