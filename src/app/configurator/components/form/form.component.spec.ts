import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { SizeComponent } from '../size/size.component';
import { ToppingsComponent } from '../toppings/toppings.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormComponent, SizeComponent, ToppingsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;

    component.parent = fb.group({
      size: [null, Validators.required],
      toppings: [[], [Validators.required, Validators.minLength(3)]]
    });

    fixture.detectChanges();
  }));

  it('should create form component', () => {
    expect(component).toBeTruthy();
  });
});
